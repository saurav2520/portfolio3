import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ID',       // replace with your actual service ID
        'template_id',      // replace with your template ID
        form.current,
        'public key'        // replace with your public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        () => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#171d32] flex items-center justify-center p-4" id='Contact'>
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 text-white font-medium py-2 rounded-lg transition "
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-sm text-green-600">{status}</p>
        )}
      </div>
    </div>
  );
}
