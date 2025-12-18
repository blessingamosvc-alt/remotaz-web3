import React, { useState, useEffect } from 'react';
import { Users, Briefcase, ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { Footer } from './Footer';
import { ViewType } from '@/types/remotaz';

interface HomeViewProps {
  setCurrentView: (view: ViewType) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentView }) => {
  const [placementCount, setPlacementCount] = useState(23);
  const [lastPlacement, setLastPlacement] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setLastPlacement(prev => prev + 1);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setPlacementCount(Math.floor(Math.random() * 5) + 21);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <nav className="bg-white shadow-sm px-4 sm:px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Remotaz</span>
          </div>
          <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm sm:text-base">Contact Us</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Welcome to Remotaz</h1>
          <p className="text-lg sm:text-2xl text-gray-600 mb-8 sm:mb-12">Your Gateway to Remote Excellence</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-orange-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Who We Are</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
            Remotaz bridges the gap between talented African remote workers and businesses worldwide. We don&apos;t just connect people with jobs—we invest in their success through comprehensive training, rigorous vetting, and ongoing support. Whether you&apos;re a business looking to scale efficiently or a professional seeking meaningful remote opportunities, we&apos;re here to make it seamless, professional, and incredibly effective.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-4xl sm:text-5xl font-bold mb-2">20+</div>
              <div className="text-base sm:text-lg opacity-90">Workers Placed</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-4xl sm:text-5xl font-bold mb-2">95%</div>
              <div className="text-base sm:text-lg opacity-90">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-4xl sm:text-5xl font-bold mb-2">10+</div>
              <div className="text-base sm:text-lg opacity-90">Partner Companies</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-orange-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
              <TrendingUp className="text-orange-500" size={28} />
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{placementCount}</div>
                <div className="text-xs sm:text-sm text-gray-600">Placements This Month</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 text-sm sm:text-base">
              <Clock size={20} className="text-orange-500" />
              <span>Last placement: {lastPlacement} hours ago</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is Remotaz?", a: "Remotaz is a staffing agency that connects businesses with trained, vetted remote workers from Africa. We handle recruitment, training, and ongoing support." },
              { q: "How does the process work?", a: "Simply tell us your needs, and we'll match you with qualified candidates within 48 hours. For workers, apply through our form and we'll connect you with opportunities that match your skills." },
              { q: "What makes Remotaz different?", a: "We invest heavily in training our workers, provide ongoing support, and guarantee quality placements. Our rigorous vetting ensures you get skilled professionals ready to contribute from day one." },
              { q: "Is there a guarantee?", a: "Yes! We offer a 30-day guarantee. If you're not satisfied with your placement, we'll find you a replacement at no additional cost." },
              { q: "How quickly can I get started?", a: "For clients, we can match you with candidates in less than 48 hours. For workers, once approved, you'll be added to our talent pool and matched with opportunities as they arise." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">{faq.q}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          <div
            onClick={() => setCurrentView('client')}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-orange-500"
          >
            <div className="bg-orange-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <Briefcase className="text-orange-500 group-hover:text-white" size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">I&apos;m a Client</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Find & hire skilled remote talent for your business</p>
            <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-2 transition-transform">
              Explore Services <ArrowRight className="ml-2" size={20} />
            </div>
          </div>

          <div
            onClick={() => setCurrentView('worker')}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-orange-500"
          >
            <div className="bg-orange-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <Users className="text-orange-500 group-hover:text-white" size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">I&apos;m a Remote Worker</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Join our network of professionals and find opportunities</p>
            <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-2 transition-transform">
              Apply Now <ArrowRight className="ml-2" size={20} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
