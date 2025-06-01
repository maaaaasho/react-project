import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import SocialLinks from './SocialLinks';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      setError('Form not found.');
      return;
    }

    setIsSending(true);
    setText('');
    setError('');

    try {
      await emailjs.sendForm(
        'service_nf5lz5k',
        'template_pzofyoc',
        form.current,
        { publicKey: 'darQwd-pzxt2UBRVv' }
      );
      setText('Your message was sent successfully!');
      form.current.reset();
    } catch (err: any) {
      setError(`Failed to send message: ${err.text || err.message || 'Unknown error'}`);
      console.error('FAILED...', err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="mb-20 max-w-4xl mx-auto">
      <h3
        data-aos="zoom-in"
        className="text-3xl font-semibold text-white mb-10 md:ml-80 ml-24 inline border-b-4 border-pink-600"
      >
        Contact Me
      </h3>
      <div className='mx-auto my-10 '>
        <div className='py-6'>
        <p className='font-bold text-white'>Phone: <a className='text-[#0099cc] font-bold ' href='tel:+251980235008'>+251980235008</a></p>
        <p className='font-bold text-white'>Email: <a className='text-[#0099cc] font-bold ' href='mailto:oumers535@gmail.com'>oumers535@gmail.com</a></p>
      </div>
      <SocialLinks/>
      </div>
      
       
      <form
        ref={form}
        data-aos="fade-up"
        className="flex flex-col gap-6 mt-10"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          required
          className="px-4 py-3 outline-none rounded-md border border-gray-700 bg-gray-900 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          rows={5}
          required
          className="px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
        />

        <button
          type="submit"
          disabled={isSending}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>

        {text && <p style={{ color: 'green' }}>{text}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </section>
  );
};

export default ContactUs;