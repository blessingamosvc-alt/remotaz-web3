import React, { useState } from 'react';
import { CheckCircle, Star, DollarSign, Zap, MessageSquare, Code, Palette, BarChart, Headphones, FileText, TrendingUp, Shield } from 'lucide-react';
import { Footer } from './Footer';
import { ViewType, ClientFormData } from '@/types/remotaz';

interface ClientViewProps {
  setCurrentView: (view: ViewType) => void;
}

export const ClientView: React.FC<ClientViewProps> = ({ setCurrentView }) => {
  const [clientFormData, setClientFormData] = useState<ClientFormData>({
    name: '', email: '', phone: '', role: '', budget: '', experience: '', quantity: '', other: ''
  });
  const [showClientSuccess, setShowClientSuccess] = useState(false);

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowClientSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm px-4 sm:px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div
            onClick={() => {setCurrentView('home'); setShowClientSuccess(false);}}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Remotaz</span>
          </div>
          <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm sm:text-base">
            Get Started
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Hire Top Remote Talent</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            We find, vet, and train skilled remote workers so you can focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-2 bg-orange-50 px-4 sm:px-6 py-3 rounded-full">
              <DollarSign className="text-orange-500" size={24} />
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                <span className="font-bold text-gray-900 text-sm sm:text-base">Starter packages from $100</span>
                <span className="text-xs sm:text-sm text-gray-600">- includes vetting, training & 30-day guarantee</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-10 text-white text-center shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Zap size={40} />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Get Matched in Less Than 48 Hours</h3>
              <p className="text-base sm:text-lg opacity-90">Fast, efficient, and reliable hiring process</p>
            </div>
          </div>
        </div>

        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">We Hire for All Remote Roles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: "Administrative", roles: "Virtual Assistants, Data Entry, Executive Assistants" },
              { icon: Code, title: "Technical", roles: "Web Developers, IT Support, Software Engineers" },
              { icon: Palette, title: "Creative", roles: "Graphic Designers, Content Writers, Social Media Managers" },
              { icon: BarChart, title: "Sales & Marketing", roles: "Sales Reps, Email Marketing, Lead Generation" },
              { icon: Headphones, title: "Customer Support", roles: "Chat Support, Phone Support, Technical Support" },
              { icon: FileText, title: "Finance & Admin", roles: "Bookkeepers, Accountants, HR Specialists" }
            ].map((category, idx) => (
              <div key={idx} className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-all hover:bg-orange-100">
                <category.icon className="text-orange-500 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.roles}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 font-semibold">+ Many More...</p>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: 'Talent Sourcing', desc: 'Access our pool of pre-vetted remote professionals across multiple industries and skill levels' },
              { title: 'Skills Training', desc: 'Workers trained to meet your specific requirements and company culture' },
              { title: 'Ongoing Support', desc: '24/7 assistance for seamless remote collaboration and performance management' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 rounded-xl p-6 sm:p-8 hover:border-orange-500 transition-all hover:shadow-lg">
                <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Tell Us Your Needs', desc: 'Share your requirements and ideal candidate profile' },
              { step: '2', title: 'We Match Talent', desc: 'Our team finds the perfect fit from our vetted pool' },
              { step: '3', title: 'Interview & Select', desc: 'Meet your top candidates and make your choice' },
              { step: '4', title: 'Onboard & Succeed', desc: 'Start working together with our full support' }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white rounded-xl p-6 shadow-md">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Success Story</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-orange-200">
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">US Marketing Agency</h3>
                <p className="text-gray-600">E-commerce Marketing Firm</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-orange-600 mb-2">The Challenge</h4>
                <p className="text-gray-700">A fast-growing e-commerce marketing agency needed to scale their customer support and social media management teams quickly without breaking their budget. They were struggling to find reliable, skilled workers who could handle multiple clients and maintain quality.</p>
              </div>

              <div>
                <h4 className="font-bold text-orange-600 mb-2">The Solution</h4>
                <p className="text-gray-700">Remotaz provided 3 trained virtual assistants specializing in customer service and 2 social media managers within 5 days. Each worker went through our rigorous vetting process and received specialized training in e-commerce tools and customer communication.</p>
              </div>

              <div>
                <h4 className="font-bold text-orange-600 mb-2">The Results</h4>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-3xl font-bold text-orange-500">40%</div>
                    <div className="text-sm text-gray-600">Productivity Increase</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-3xl font-bold text-orange-500">60%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-3xl font-bold text-orange-500">95%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: 'Jennifer Martinez', text: 'Remotaz referred my VA and it has been an absolute pleasure working with them. Professional, reliable, and incredibly efficient!' },
              { name: 'David Thompson', text: 'I hired my salesperson from Remotaz and they gave me the best person with a good accent and amazing sales skills. Revenue is up 35%!' },
              { name: 'Rachel Kim', text: 'Our web developer from Remotaz is outstanding. Clean code, great communication, and always delivers on time. Best tech hire we have made!' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-orange-500 fill-orange-500" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </section>

        {!showClientSuccess ? (
          <section className="mb-16 sm:mb-20">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-t-2xl p-6 sm:p-8 text-white text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Let&apos;s Find Your Perfect Match</h2>
              <p className="text-base sm:text-lg opacity-90">Tell us what you need and we will get started immediately</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-b-2xl p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleClientSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={clientFormData.name}
                      onChange={(e) => setClientFormData({...clientFormData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={clientFormData.email}
                      onChange={(e) => setClientFormData({...clientFormData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={clientFormData.phone}
                    onChange={(e) => setClientFormData({...clientFormData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="+1 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role You Want to Hire For *</label>
                  <input
                    type="text"
                    value={clientFormData.role}
                    onChange={(e) => setClientFormData({...clientFormData, role: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="e.g., Virtual Assistant, Sales Rep, Developer"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range *</label>
                    <select
                      value={clientFormData.budget}
                      onChange={(e) => setClientFormData({...clientFormData, budget: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select budget</option>
                      <option value="100-300">$100 - $300/month</option>
                      <option value="300-500">$300 - $500/month</option>
                      <option value="500-1000">$500 - $1000/month</option>
                      <option value="1000+">$1000+/month</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level Required *</label>
                    <select
                      value={clientFormData.experience}
                      onChange={(e) => setClientFormData({...clientFormData, experience: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select experience</option>
                      <option value="entry">Entry Level (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="experienced">Experienced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of People Needed *</label>
                  <input
                    type="number"
                    value={clientFormData.quantity}
                    onChange={(e) => setClientFormData({...clientFormData, quantity: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="1"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Requirements</label>
                  <textarea
                    value={clientFormData.other}
                    onChange={(e) => setClientFormData({...clientFormData, other: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Any specific skills, timezone preferences, or other requirements..."
                  />
                </div>

                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Shield className="text-green-500" size={20} />
                  <span className="font-semibold">100% Secure</span>
                  <span>•</span>
                  <span className="font-semibold">No Hidden Fees</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </section>
        ) : (
          <section className="mb-16 sm:mb-20">
            <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-200 rounded-2xl p-8 sm:p-12 text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h2>
              <p className="text-lg text-gray-700 mb-8">
                Thank you for choosing Remotaz. We will review your requirements and get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://calendly.com', '_blank')}
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  Book a Call Now
                </button>
                <button
                  onClick={() => alert('Our team will contact you shortly to proceed with direct hiring!')}
                  className="bg-white border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors"
                >
                  Proceed to Hire
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Client FAQs</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: "What roles can you fill?", a: "We specialize in all remote roles including Virtual Assistants, Customer Support, Sales, Marketing, Development, Design, and more. If it can be done remotely, we can help you fill it." },
              { q: "What if I'm not satisfied with my hire?", a: "We offer a 30-day guarantee. If you're not completely satisfied, we'll find you a replacement at no additional cost." },
              { q: "How long does the hiring process take?", a: "We can match you with qualified candidates in less than 48 hours. The full hiring process typically takes 5-7 days from initial request to onboarding." },
              { q: "Do you handle payroll and contracts?", a: "Yes! We can manage all administrative tasks including payroll, contracts, and ongoing HR support for an additional fee." },
              { q: "What makes your workers different?", a: "Our workers go through rigorous vetting and receive specialized training. We ensure they have the right skills, communication abilities, and work ethic before matching them with clients." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
