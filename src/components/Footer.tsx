// components/Footer.jsx

const Footer = () => {
  return (
    <>
      <hr className="border-none bg-[#9B9C9D] h-px w-[80%] m-auto xs:w-[100%]" />
      <div className="flex justify-around items-center py-8">
        <p className="text-[0.8rem] text-[#9B9C9D]">
          © {new Date().getFullYear()} JMS Portfolio
        </p>
        <div className="flex justify-between items-center gap-x-4">
          <a
            href="https://github.com/Joadison"
            aria-label="GitHub"
            target="_blank"
            className="text-gray-400 text-lg transition-all duration-500 ease-in-out hover:text-[#DADADB]"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joadison-silva-6bb63914a/"
            aria-label="LinkedIn"
            target="_blank"
            className="text-gray-400 text-lg transition-all duration-500 ease-in-out hover:text-[#DADADB]"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="whatsapp://send?phone=+5585999692700"
            aria-label="Whatsapp"
            target="_blank"
            className="text-gray-400 text-lg transition-all duration-500 ease-in-out hover:text-[#DADADB]"
            rel="noopener norefferer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
