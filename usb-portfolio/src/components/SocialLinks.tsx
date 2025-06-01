import {

  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaTelegram,

} from 'react-icons/fa';

const SocialLinks = () => {
  return (
           <div className="flex gap-6 text-xl text-purple-400">
            <a
              href="https://github.com/oumers535"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/oumersherif"
              target="_blank"
              rel="noopener noreferrer"
          
              className="hover:text-purple-300 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="oumers535@gmail.com"
       
              className="hover:text-purple-300 transition-colors"
            >
            <FaEnvelope />
            </a>
            <a
              href="tel:+251980235008"
              aria-label="Phone"
              className="hover:text-purple-300 transition-colors"
            >
              <FaPhoneAlt />
            </a>
            <a
              href="https://t.me/usb202"
          
              className="hover:text-purple-300 transition-colors"
            >
              <FaTelegram />
            </a>
          </div>
  )
}

export default SocialLinks