import React from 'react';

export default function PolicyWazirLanding() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans scroll-smooth">
      
      {/* 1. NAVBAR */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Brand */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-extrabold text-blue-700 tracking-tight">Policy Wazir</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium transition">Contact Us</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        
        {/* 2. HERO SECTION (Smart & Tech-Driven) */}
        <section id="home" className="bg-blue-700 text-white py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Smart Insurance, Simplified.
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
              Our intelligent platform analyzes thousands of policies to find the exact coverage you need—without the hidden fees, spam calls, or agent bias.
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-lg">
              Find Your Match
            </button>
          </div>
        </section>

        {/* 3. COLLABORATORS "ZIP LINE" (Auto-scrolling marquee) */}
        <section className="bg-white py-8 border-b border-gray-200 overflow-hidden flex flex-col items-center">
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-6">
            Proudly Collaborating With
          </p>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li className="font-bold text-2xl text-gray-400">HDFC Life</li>
              <li className="font-bold text-2xl text-gray-400">ICICI Prudential</li>
              <li className="font-bold text-2xl text-gray-400">Axis Bank</li>
              <li className="font-bold text-2xl text-gray-400">Max Life</li>
              <li className="font-bold text-2xl text-gray-400">SBI General</li>
              {/* Duplicated for infinite scroll effect */}
              <li className="font-bold text-2xl text-gray-400" aria-hidden="true">HDFC Life</li>
              <li className="font-bold text-2xl text-gray-400" aria-hidden="true">ICICI Prudential</li>
              <li className="font-bold text-2xl text-gray-400" aria-hidden="true">Axis Bank</li>
              <li className="font-bold text-2xl text-gray-400" aria-hidden="true">Max Life</li>
              <li className="font-bold text-2xl text-gray-400" aria-hidden="true">SBI General</li>
            </ul>
          </div>
        </section>

        {/* 4. ABOUT & SERVICES */}
        <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Policy Wazir?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We leverage data to bring complete transparency to your insurance buying journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Unbiased Comparisons</h3>
              <p className="text-gray-600">Compare quotes side-by-side. We show you the exact premiums, coverages, and hidden clauses.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Matching</h3>
              <p className="text-gray-600">Our engine maps your demographic profile to the policies that actually cover your unique risks.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Zero Spam Calls</h3>
              <p className="text-gray-600">Your data stays with us until you are ready to buy. No aggressive agents calling you during dinner.</p>
            </div>
          </div>
        </section>

        {/* 5. CONTACT US FORM */}
        <section id="contact" className="bg-gray-200 py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 mt-2">Have a question? Our support team is here to help.</p>
            </div>
            
            <form className="bg-white shadow-xl rounded-xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full border-gray-300 rounded-lg shadow-sm border p-3 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                    placeholder="Mudassir Khan" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full border-gray-300 rounded-lg shadow-sm border p-3 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                    placeholder="you@policywazir.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows={5} 
                  className="w-full border-gray-300 rounded-lg shadow-sm border p-3 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-blue-700 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* 6. FOOTER & REGULATORY DISCLAIMERS */}
      <footer className="bg-slate-900 text-white py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Policy Wazir</h3>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Empowering consumers with transparent, data-driven insurance comparisons. Your future, secured seamlessly.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-gray-400 text-sm">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#about" className="hover:text-white transition">About Us</a>
              <a href="#services" className="hover:text-white transition">Compare Services</a>
              <a href="#contact" className="hover:text-white transition">Contact Support</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex flex-col space-y-2 text-gray-400 text-sm">
              <p>Email: hello@policywazir.com</p>
              <p>Phone: +91 (XXX) XXX-XXXX</p>
              <p>Location: Lucknow, UP, India</p>
            </div>
          </div>
        </div>
        
        {/* Mandatory Regulatory Boilerplate */}
        <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-8 mt-8 text-xs text-gray-500 text-center">
          <p className="mb-2">
            **Dummy Disclaimer:** Policy Wazir is a technology platform. Insurance is the subject matter of solicitation. 
            For more details on risk factors, terms and conditions, please read the sales brochure carefully before concluding a sale.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Policy Wazir. All rights reserved. (Pending IRDAI Web Aggregator License)
          </p>
        </div>
      </footer>
      
    </div>
  );
}