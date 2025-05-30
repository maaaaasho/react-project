

const Contact = () => {
  return (
    <section
          id="contact"
          className="mb-20 max-w-4xl mx-auto"
        >
          <h3 data-aos='zoom-in' className="text-3xl  font-semibold text-gray-900 dark:text-white mb-10 md:ml-80 ml-24 inline border-b-4 border-pink-600 ">
            Contact Me
          </h3>
          <form action="https://getform.io/f/ayvykxmb" method="POST" data-aos='fade-up'
            className="flex flex-col gap-6 mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for reaching out! I will get back to you soon.');
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
  )
}

export default Contact