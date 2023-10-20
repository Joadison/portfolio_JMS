// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col py-8 xs:mt-[14rem]">
      <Image
        src="https://avatars.githubusercontent.com/u/32674418?v=4"
        width={200}
        height={200}
        className="w-[200px] h-[200px] rounded-[50%] m-1 object-cover"
        alt="JMS personal headshot"
      />
      <div className="text-center m-[1rem] w-[80%] xs:w-[100%]">
        <h1 className="text-[2rem] font-[600] mb-[1rem]">
          Olá, Meu nome é Joadison 👋
        </h1>
        <p className="text-[1.2rem] text-[400] mb-[1rem]">
          Olá, sou desenvolvedor de software baseado em Fortaleza, Ceará,
          Brasil. Trago uma vasta experiência e conhecimento em diversas áreas
          da tecnologia. Minha paixão reside em projetar sites excelentes e
          desenvolver soluções DevOps eficazes. Além disso, sou especialista na
          criação de soluções automatizadas que podem agilizar seu fluxo de
          trabalho, economizando tempo e recursos valiosos.
        </p>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://github.com/Joadison"
            className="text-[#9B9C9D] text-2xl transition-all duration-500 ease-in-out hover:text-[#DADADB]"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joadison-silva-6bb63914a/"
            className="text-[#9B9C9D] text-2xl transition-all duration-500 ease-in-out hover:text-[#DADADB]"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
