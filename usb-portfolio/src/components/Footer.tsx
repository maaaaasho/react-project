
import {

  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,

} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8 select-none">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Oumer Sherif. All rights reserved.</p>
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
              href="oumers535@gmail.com"
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
          </div>
        </div>
      </footer>
  )
}

export default Footer