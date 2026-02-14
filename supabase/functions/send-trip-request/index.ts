import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TripRequest {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  travelDate: string;
  travelers: string;
  duration: string;
  destinations: string;
  budget: string;
  tripTypes: string[];
  specialRequirements: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: TripRequest = await req.json();
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and phone are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const tripTypesFormatted = data.tripTypes.length > 0 
      ? data.tripTypes.join(', ') 
      : 'Not specified';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #1a5632, #2d8a4e); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .header p { margin: 8px 0 0; opacity: 0.9; font-size: 14px; }
          .content { padding: 30px; }
          .section { margin-bottom: 24px; }
          .section-title { font-size: 16px; font-weight: 600; color: #1a5632; border-bottom: 2px solid #e8f5e9; padding-bottom: 8px; margin-bottom: 16px; }
          .field { display: flex; margin-bottom: 12px; }
          .field-label { font-weight: 600; color: #555; min-width: 180px; font-size: 14px; }
          .field-value { color: #333; font-size: 14px; }
          .special-req { background: #f8f9fa; border-left: 4px solid #1a5632; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 8px; }
          .footer { background: #f8f9fa; padding: 20px 30px; text-align: center; color: #888; font-size: 12px; border-top: 1px solid #eee; }
          .badge { display: inline-block; background: #e8f5e9; color: #1a5632; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin: 2px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏔️ New Trip Planning Request</h1>
            <p>Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-title">👤 Contact Information</div>
              <div class="field">
                <span class="field-label">Full Name:</span>
                <span class="field-value">${data.fullName}</span>
              </div>
              <div class="field">
                <span class="field-label">Email:</span>
                <span class="field-value"><a href="mailto:${data.email}">${data.email}</a></span>
              </div>
              <div class="field">
                <span class="field-label">Phone:</span>
                <span class="field-value">${data.phone}</span>
              </div>
              <div class="field">
                <span class="field-label">Country:</span>
                <span class="field-value">${data.country || 'Not specified'}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">✈️ Trip Details</div>
              <div class="field">
                <span class="field-label">Preferred Travel Date:</span>
                <span class="field-value">${data.travelDate || 'Flexible'}</span>
              </div>
              <div class="field">
                <span class="field-label">Number of Travelers:</span>
                <span class="field-value">${data.travelers || 'Not specified'}</span>
              </div>
              <div class="field">
                <span class="field-label">Duration:</span>
                <span class="field-value">${data.duration || 'Not specified'}</span>
              </div>
              <div class="field">
                <span class="field-label">Preferred Destinations:</span>
                <span class="field-value">${data.destinations || 'Not specified'}</span>
              </div>
              <div class="field">
                <span class="field-label">Budget Range:</span>
                <span class="field-value">${data.budget || 'Not specified'}</span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">🎯 Trip Type</div>
              <div>${data.tripTypes.map(t => `<span class="badge">${t}</span>`).join(' ')  || '<span class="field-value">Not specified</span>'}</div>
            </div>

            ${data.specialRequirements ? `
            <div class="section">
              <div class="section-title">📝 Special Requirements</div>
              <div class="special-req">${data.specialRequirements}</div>
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p>This request was submitted via the Hanumante Tours & Travels website.</p>
            <p>Please respond within 24 hours.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Hanumante Tours <onboarding@resend.dev>',
        to: ['hanumantetours@gmail.com'],
        subject: `New Trip Request from ${data.fullName} — ${data.destinations || 'Various Destinations'}`,
        html: emailHtml,
        reply_to: data.email,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error('Resend API error:', result);
      throw new Error(result.message || 'Failed to send email');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Trip request sent successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending trip request:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to send trip request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
