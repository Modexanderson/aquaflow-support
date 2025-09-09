import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, MessageCircle, Droplets, Shield, Smartphone, BarChart3, Bell, Activity } from 'lucide-react';
import './App.css';

function App() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I set my daily water intake goal?",
      answer: "Go to the Profile tab and tap on 'Daily Goal'. You can adjust your target based on your weight, activity level, and personal preferences."
    },
    {
      question: "Why aren't my water intake notifications working?",
      answer: "Make sure you've enabled notifications for AquaFlow in your device settings. Go to Settings > Notifications and ensure all reminder options are turned on."
    },
    {
      question: "How do I sync with Apple Health or Google Fit?",
      answer: "Navigate to Settings > Health Integration and toggle on the health app integration. You'll be prompted to grant permissions."
    },
    {
      question: "Can I track different types of beverages?",
      answer: "Currently, AquaFlow focuses on water intake tracking for optimal hydration to maintain accuracy."
    },
    {
      question: "How do I backup my data?",
      answer: "Your data is automatically backed up to Firebase when you create an account and sign in."
    },
    {
      question: "Why can't I see my statistics?",
      answer: "Make sure you have recorded at least a few days of water intake. Statistics become more meaningful with consistent tracking."
    },
    {
      question: "How do achievements work?",
      answer: "AquaFlow rewards consistent hydration habits with achievements. Check the Rewards tab to see your progress."
    },
    {
      question: "Can I use AquaFlow without creating an account?",
      answer: "Yes, you can use AquaFlow locally without an account. However, signing in provides cloud backup and cross-device sync."
    }
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-icon">
            <Droplets size={60} />
          </div>
          <h1>AquaFlow Support</h1>
          <p className="hero-subtitle">Stay Hydrated, Stay Healthy</p>
          <p className="hero-description">
            Your comprehensive hydration tracking companion. Get help, find answers, and make the most of your wellness journey.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="section">
        <div className="container">
          <h2>What AquaFlow Offers</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Droplets className="feature-icon" />
              <h3>Smart Water Tracking</h3>
              <p>Easy logging with customizable container sizes and quick-add buttons</p>
            </div>
            <div className="feature-card">
              <BarChart3 className="feature-icon" />
              <h3>Detailed Analytics</h3>
              <p>Visual charts and statistics to track your hydration patterns over time</p>
            </div>
            <div className="feature-card">
              <Bell className="feature-icon" />
              <h3>Smart Reminders</h3>
              <p>Personalized notifications to help you maintain consistent hydration</p>
            </div>
            <div className="feature-card">
              <Activity className="feature-icon" />
              <h3>Health Integration</h3>
              <p>Seamlessly sync with Apple Health and Google Fit</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-question"
                >
                  <span>{faq.question}</span>
                  {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section contact-section">
        <div className="container">
          <h2>Need More Help?</h2>
          <p className="contact-description">Can't find the answer you're looking for? We're here to help!</p>
          
          <div className="contact-grid">
            <a href="mailto:aquaflowapp@gmail.com" className="contact-card">
              <Mail size={40} />
              <h3>Email Support</h3>
              <p>aquaflowapp@gmail.com</p>
            </a>
            <div className="contact-card">
              <MessageCircle size={40} />
              <h3>Response Time</h3>
              <p>We typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* App Info Section */}
      <div className="section info-section">
        <div className="container">
          <h2>App Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Privacy & Security</h3>
              <div className="info-list">
                <div className="info-item">
                  <Shield size={20} />
                  <span>Your data is encrypted and secure</span>
                </div>
                <div className="info-item">
                  <Shield size={20} />
                  <span>No personal data is shared with third parties</span>
                </div>
                <div className="info-item">
                  <Shield size={20} />
                  <span>Optional cloud backup via Firebase</span>
                </div>
              </div>
            </div>
            
            <div className="info-card">
              <h3>Compatibility</h3>
              <div className="info-list">
                <div className="info-item">
                  <Smartphone size={20} />
                  <span>iOS and Android devices</span>
                </div>
                <div className="info-item">
                  <Activity size={20} />
                  <span>Apple Health integration</span>
                </div>
                <div className="info-item">
                  <Activity size={20} />
                  <span>Google Fit integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <Droplets size={32} />
            <h3>AquaFlow</h3>
            <p>Stay Hydrated, Stay Healthy</p>
            <div className="footer-info">
              <p>© 2024 AquaFlow. All rights reserved. | Version 1.0.0</p>
              <p>For support: <a href="mailto:aquaflowapp@gmail.com">aquaflowapp@gmail.com</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;