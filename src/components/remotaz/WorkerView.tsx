import React, { useState } from 'react';
import { CheckCircle, Star, MessageSquare, Code, Palette, BarChart, Headphones, FileText, Shield } from 'lucide-react';
import { Footer } from './Footer';
import { ViewType, WorkerFormData } from '@/types/remotaz';

interface WorkerViewProps {
  setCurrentView: (view: ViewType) => void;
}

export const WorkerView: React.FC<WorkerViewProps> = ({ setCurrentView }) => {
  const [workerFormData, setWorkerFormData] = useState<WorkerFormData>({
    name: '', email: '', phone: '', experience: '', skills: '', availability: ''
  });
  const [showWorkerSuccess, setShowWorkerSuccess] = useState(false);

  const handleWorkerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowWorkerSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm px-4 sm:px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div
            onClick={() => {setCurrentView('home'); setShowWorkerSuccess(false);}}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Remotaz</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Join Our Remote Talent Network</h1>
          <p className="text-xl text-gray-600">
            Get matched with exciting opportunities from top companies worldwide
          </p>
        </div>

        <section className="mb-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Join Remotaz?</h2>
          <div className="space-y-4">
            {[
              'Access to vetted, quality job opportunities from global companies',
              'Professional skills training and development programs',
              'Ongoing support and career guidance from our team',
              'Flexible remote work arrangements that fit your lifestyle',
              'Competitive compensation packages'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start bg-white rounded-lg p-4">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Roles We Place Professionals In</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: MessageSquare, title: "Administrative Roles", desc: "Virtual Assistants, Data Entry, Executive Support" },
              { icon: Code, title: "Technical Roles", desc: "Developers, IT Support, QA Testers" },
              { icon: Palette, title: "Creative Roles", desc: "Designers, Writers, Video Editors" },
              { icon: BarChart, title: "Sales & Marketing", desc: "Sales Reps, Marketing Specialists" },
              { icon: Headphones, title: "Customer Support", desc: "Chat/Phone Support, Help Desk" },
              { icon: FileText, title: "Finance Roles", desc: "Bookkeepers, Accountants" }
            ].map((role, idx) => (
              <div key={idx} className="bg-orange-50 rounded-xl p-4 flex items-start space-x-3">
                <role.icon className="text-orange-500 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{role.title}</h3>
                  <p className="text-sm text-gray-600">{role.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Place You</h2>
          <div className="space-y-6">
            {[
              { title: 'Apply', desc: 'Submit your application and tell us about your skills and experience' },
              { title: 'Assessment', desc: 'Complete our skills evaluation and virtual interview' },
              { title: 'Training', desc: 'Get access to training resources to enhance your professional skills' },
              { title: 'Matching', desc: 'We match you with companies looking for your specific expertise' },
              { title: 'Placement', desc: 'Start your new remote position with our full support and guidance' }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start border-l-4 border-orange-500 pl-6 py-2 bg-orange-50 rounded-r-lg">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories from Our Workers</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Chinedu Okafor', text: 'Remotaz placed me in my role as a Virtual Assistant and it has been amazing! The training prepared me perfectly and the support is incredible.' },
              { name: 'Amina Hassan', text: 'I was matched with a great company within 2 weeks of applying. The professional development opportunities have been outstanding.' },
              { name: 'Tunde Adeyemi', text: 'As a developer, I was skeptical at first, but Remotaz connected me with serious clients who value quality work. Best decision I made!' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border-2 border-orange-200 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-lg">
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

        {!showWorkerSuccess ? (
          <section className="mb-16">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-t-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Start Your Application</h2>
              <p className="opacity-90">Fill out the form below and we will get back to you within 48 hours</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-b-2xl p-8 shadow-lg">
              <form onSubmit={handleWorkerSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={workerFormData.name}
                    onChange={(e) => setWorkerFormData({...workerFormData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={workerFormData.email}
                      onChange={(e) => setWorkerFormData({...workerFormData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={workerFormData.phone}
                      onChange={(e) => setWorkerFormData({...workerFormData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
                  <select
                    value={workerFormData.experience}
                    onChange={(e) => setWorkerFormData({...workerFormData, experience: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Key Skills *</label>
                  <textarea
                    value={workerFormData.skills}
                    onChange={(e) => setWorkerFormData({...workerFormData, skills: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="List your key skills (e.g., Customer Service, Data Entry, Virtual Assistance, etc.)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Availability *</label>
                  <select
                    value={workerFormData.availability}
                    onChange={(e) => setWorkerFormData({...workerFormData, availability: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select availability</option>
                    <option value="immediate">Immediate</option>
                    <option value="2weeks">Within 2 weeks</option>
                    <option value="1month">Within 1 month</option>
                  </select>
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
                  Submit Application
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </section>
        ) : (
          <section className="mb-16">
            <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-200 rounded-2xl p-8 sm:p-12 text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-700 mb-8">
                Thank you for applying to join Remotaz! Our team will review your application and get back to you within 48 hours.
              </p>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Join Our Community</h3>
                <p className="text-gray-700 mb-4">
                  Connect with other remote professionals, get job alerts, and access exclusive resources!
                </p>
                <button
                  onClick={() => alert('Discord community link will be provided here!')}
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                >
                  Join Free Community
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Remote Worker FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "How do I get paid?", a: "Payment arrangements are made directly between you and the client. We facilitate the connection and provide support, but payments are handled between you and your employer." },
              { q: "What if I don't get placed immediately?", a: "We're continuously matching workers with opportunities. Stay active in our community, keep your skills updated, and we'll notify you as soon as a matching opportunity arises." },
              { q: "Do I need previous remote work experience?", a: "Not necessarily! We provide training and support to help you succeed. However, relevant skills in your field and good communication abilities are essential." },
              { q: "Is there a fee to join?", a: "No! Joining our talent network is completely free. We only succeed when you succeed." },
              { q: "What kind of support do I get after placement?", a: "You'll have access to our support team, ongoing training resources, and our community of remote workers. We're here to help you thrive in your role." }
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
