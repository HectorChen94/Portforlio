import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setMessage('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <motion.form
      ref={form}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary-white/80 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary-blue/50 focus:ring focus:ring-primary-blue/20 transition-colors text-primary-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary-white/80 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary-blue/50 focus:ring focus:ring-primary-blue/20 transition-colors text-primary-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-white/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary-blue/50 focus:ring focus:ring-primary-blue/20 transition-colors text-primary-white resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-primary-blue/20 hover:bg-primary-blue/30 border border-primary-blue/50 rounded-lg text-primary-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === 'sending' ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 p-4 rounded-lg ${
            status === 'success' 
              ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
              : 'bg-red-500/10 text-red-500 border border-red-500/20'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          {message}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;