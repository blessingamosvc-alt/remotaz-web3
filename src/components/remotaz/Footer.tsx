import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold">Remotaz</span>
          </div>
          <p className="text-gray-400">Connecting talent with opportunities worldwide</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>hello@remotaz.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>+234 xxx xxx xxxx</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Linkedin className="cursor-pointer hover:text-orange-500 transition-colors" size={24} />
            <Twitter className="cursor-pointer hover:text-orange-500 transition-colors" size={24} />
            <Instagram className="cursor-pointer hover:text-orange-500 transition-colors" size={24} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Remotaz. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
