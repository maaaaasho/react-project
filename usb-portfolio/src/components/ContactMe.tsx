import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaTelegram } from 'react-icons/fa';

const PUBLICKEY = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!PUBLICKEY) {
      setError('Email service is not configured correctly.');
      return;
    }

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
        { publicKey: PUBLICKEY }
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
        className="text-3xl font-semibold text-gray-900 dark:text-white mb-10 md:ml-80 ml-24 inline border-b-4 border-pink-600"
      >
        Contact Me
      </h3>
      <div className="mx-auto my-10">
        <div className="py-6">
          <p className="font-bold dark:text-white">
            Phone:{' '}
            <a className="text-[#0099cc] font-bold" href="tel:+251980235008">
              +251980235008
            </a>
          </p>
          <p className="font-bold dark:text-white">
            Email:{' '}
            <a className="text-[#0099cc] font-bold" href="mailto:oumers535@gmail.com">
              oumers535@gmail.com
            </a>
          </p>
        </div>
        <div className="flex gap-6 text-xl text-purple-600 dark:text-purple-400">
          <a
            href="https://github.com/oumers535"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/oumersherif"
                        target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:oumers535@gmail.com"
            aria-label="Email"
            className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+251980235008"
            aria-label="Phone"
            className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="https://t.me/usb202"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <FaTelegram />
          </a>
        </div>
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
          className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          rows={5}
          required
          className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
        />
        <button
          type="submit"
          disabled={isSending}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
        {text && <p className="text-green-600 dark:text-green-400">{text}</p>}
        {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
      </form>
    </section>
  );
};

export default ContactMe;