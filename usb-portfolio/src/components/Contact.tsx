import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const PUBLICKEY = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false); 
  const [text, setText] = useState('');
   const [error, setError] = useState('');

 

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!PUBLICKEY) { 
      setError('Email service is not configured correctly.');
       return;
   }
    e.preventDefault();
    setIsSending(true); 
    setText(''); 
    setError('');
    
    if (!form.current) {
    setError('Form not found.');
    return;
    }
    try {
      await emailjs.sendForm( 'service_nf5lz5k', 'template_pzofyoc', form.current, { publicKey: PUBLICKEY, } ); 
    setText('Your message was sent successfully!'); 
    form.current.reset();
    } catch (err: any) { 
      setError(`Failed to send message: ${err.text || err.message || 'Unknown error'}`); 
      console.error('FAILED...', err); 
    }
      finally { setIsSending(false); }
    };
    
  
  return (
    <section
          id="contact"
          className="mb-20 max-w-4xl mx-auto"
        >
          <h3 data-aos='zoom-in' className="text-3xl  font-semibold text-gray-900 dark:text-white mb-10 md:ml-80 ml-24 inline border-b-4 border-pink-600 ">
            Contact Me
          </h3>
          <form ref={form}  data-aos='fade-up'
            className="flex flex-col gap-6 mt-10"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Your Name"
              name='name'
              required
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
               name='email'
              required
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            /> 
            <textarea
              placeholder="Your Message"
               name='message'
              rows={5}
              required
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
            />
            {/* <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
            >
              Send Message
            </button> */}
            <button bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors duration-300 type="submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
             </button>
            {text && <p style={{ color: 'green' }}>{text}</p>}
             {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </section>
  )
}

export default Contact