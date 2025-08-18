import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactSection = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form data:", data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-sacred-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to embark on a meaningful spiritual journey? Let's connect and create
            something extraordinary together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in delay-200">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Let's Connect</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking to build a meaningful spiritual presence, need creative
              pilgrimage planning, or want to explore how our expertise can serve your sacred journey,
              we're here to help. Let's start a conversation about your vision.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 p-4 travel-card hover-scale cursor-pointer group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">hanumantetours@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 travel-card hover-scale cursor-pointer group">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+977 9842290039 / 9842290280</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4 p-4 travel-card hover-scale cursor-pointer group bg-green-50/50 border-green-200/50">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">+977 9842290039 / 9842290280</p>
                </div>
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                  Chat Now
                </Button>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 travel-card hover-scale cursor-pointer group">
                <div className="w-12 h-12 bg-sacred-gold/10 rounded-lg flex items-center justify-center group-hover:bg-sacred-gold/20 transition-colors">
                  <MapPin className="h-6 w-6 text-sacred-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Maitidevi, Kathmandu, Nepal</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center space-x-4 p-4 travel-card">
                <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Business Hours</h4>
                  <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white flex-1">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Chat
              </Button>
              <Button variant="outline" className="flex-1">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in delay-400">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What's this about?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your thoughts, project ideas, or questions..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 group"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};