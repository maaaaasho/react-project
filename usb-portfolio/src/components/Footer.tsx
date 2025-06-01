import SocialLinks from "./SocialLinks"


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 select-none">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Oumer Sherif &copy;{new Date().getFullYear()}. All rights reserved.</p>
          <SocialLinks/>  
        </div>
      </footer>
  )
}

export default Footer