// components/Contact.jsx

const Contact = () => {
  return (
    <div className="py-8 pb-16 flex justify-center items-center flex-col w-[80%] mx-auto xs:w-[100%]">
      <h2 className="text-[2rem] font-[600] mb-4">Entrar em contato</h2>
      <p className="text-4 font-[400] mb-4 text-center">
        Se você quiser que trabalhemos juntos, tiver alguma dúvida ou quiser que
        eu fale no seu evento, minha caixa de entrada está sempre aberta. Quer
        eu queira apenas dizer oi, farei o possível para entrar em contato com
        você! Saúde!
      </p>
      <a
        href="mailto:joadison2219@gmail.com"
        className="bg-[#FFCC1A] text-[#1D1E20] py-[0.5rem] px-[1.50rem] rounded-md text-[1rem] text-[600] transition-all duration-500 ease-in-out cursor-pointer inline-block hover:bg-[#DADADB]"
      >
        Diga Olá
      </a>
    </div>
  );
};

export default Contact;
