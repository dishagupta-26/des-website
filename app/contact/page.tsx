// app/contact/page.tsx
'use client'; 

import { PageHeader } from '@/components/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('');

  // --- IMPORTANT ---
  // Paste your own Formspree URL here
  const FORMSPREE_URL = 'http://formspree.io/f/YOUR_UNIQUE_ID';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');

    const data = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setFormStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="bg-black text-brand-light">
      
      {/* 1. Page Header */}
      <PageHeader
        title="Get in"
        gradientText="Touch"
        subtitle="We're here to answer any questions and help you start your next project."
      />

      <div className="max-w-7xl mx-auto py-24 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Column 1: Contact Details */}
          <div className="space-y-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <ul className="space-y-6">
                
                {/* Address - NOW A CLICKABLE LINK */}
                <li className="flex items-start gap-4">
                  <MapPin size={24} className="text-brand-cyan mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Address</h3>
                    <a
                      href="http://googleusercontent.com/maps/search/?api=1&query=Neel+Sidhi+Tower,+Plot+no.+195,+Sector-12,+Vashi,+Navi+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-lg hover:text-brand-cyan transition-colors"
                    >
                      A/104, Neel Sidhi Tower, Plot no. 195, Sector- 12, 
                      Vashi, Navi Mumbai - 400703
                    </a>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4">
                  <Phone size={24} className="text-brand-cyan mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <a 
                      href="tel:+919967059922"
                      className="text-gray-400 text-lg hover:text-brand-cyan transition-colors"
                    >
                      +91 9967059922
                    </a>
                  </div>
                </li>
                
                {/* Email */}
                <li className="flex items-start gap-4">
                  <Mail size={24} className="text-brand-cyan mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <a 
                      href="mailto:deeshiengineeringsolutions@gmail.com"
                      className="text-gray-400 text-lg hover:text-brand-cyan transition-colors"
                    >
                      deeshiengineeringsolutions@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
          
          {/* Column 2: Contact Form - USES FORMSPREE */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Send us a <span className="text-gradient">Message</span>
            </h2>
            
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-900 border border-gray-800 rounded-lg p-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-lg text-white focus:ring-brand-cyan focus:border-brand-cyan"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label> 
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-lg text-white focus:ring-brand-cyan focus:border-brand-cyan"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label> 
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-lg text-white focus:ring-brand-cyan focus:border-brand-cyan"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-brand-cyan text-brand-dark text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  disabled={formStatus === 'Sending...'}
                >
                  {formStatus === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {/* Form status message */}
              {formStatus && (
                <p className={`text-center ${formStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                  {formStatus}
                </p>
              )}
            </form>
            
          </div>

        </div>
      </div>
    </div>
  );
}