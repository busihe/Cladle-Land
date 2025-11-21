import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, this would send to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0A1E3F] mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#F2C94C] mx-auto rounded-full mb-4"></div>
          <p className="text-[#0A1E3F]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Have a project in mind or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
            <h3 className="text-[#0A1E3F] mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#0A1E3F] mb-2" style={{ fontWeight: 500 }}>
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border-gray-300 focus:border-[#F2C94C] focus:ring-[#F2C94C]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#0A1E3F] mb-2" style={{ fontWeight: 500 }}>
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border-gray-300 focus:border-[#F2C94C] focus:ring-[#F2C94C]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#0A1E3F] mb-2" style={{ fontWeight: 500 }}>
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  className="w-full rounded-xl border-gray-300 focus:border-[#F2C94C] focus:ring-[#F2C94C] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0A1E3F] text-white hover:bg-[#0A1E3F]/90 rounded-xl py-6"
                style={{ fontSize: '1rem' }}
              >
                Send Message
                <Send size={20} className="ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-[#0A1E3F] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#F2C94C]/10 rounded-xl flex items-center justify-center">
                    <Phone className="text-[#F2C94C]" size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }} className="text-[#0A1E3F] mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:0798672478"
                      className="text-[#0A1E3F]/70 hover:text-[#F2C94C] transition-colors"
                    >
                      0798672478
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#F2C94C]/10 rounded-xl flex items-center justify-center">
                    <Mail className="text-[#F2C94C]" size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }} className="text-[#0A1E3F] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:andygaga250@gmail.com"
                      className="text-[#0A1E3F]/70 hover:text-[#F2C94C] transition-colors"
                    >
                      andygaga250@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-[#F2C94C]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="text-[#F2C94C]" size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }} className="text-[#0A1E3F] mb-1">
                      Location
                    </p>
                    <p className="text-[#0A1E3F]/70">
                      Zaria court - Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-[#0A1E3F] to-[#0A1E3F]/90 rounded-3xl p-8 shadow-lg text-white">
              <h4 className="text-white mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Monday - Friday</span>
                  <span style={{ fontWeight: 600 }}>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Saturday</span>
                  <span style={{ fontWeight: 600 }}>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Sunday</span>
                  <span style={{ fontWeight: 600 }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
