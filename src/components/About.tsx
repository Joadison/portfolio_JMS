// components/About.jsx

import Image from "next/image";
import photo from "@/public/photo.png"

const About = () => {
  return (
    <div className="py-[2rem] xs:mt-[5rem]">
      <h2 className="text-[2rem] font-[600] mb-4">Sobre Mim</h2>
      <div className="flex justify-between items-center space-x-8 xs:flex-col xs:space-x-0">
        <div className="w-[50%] xs:w-[100%]">
          <p className="text-[1rem] font-[400] mb-4">
            Minha trajetória educacional e profissional na área de Tecnologia da
            Informação é caracterizada por um compromisso contínuo com o
            aprendizado e desenvolvimento de habilidades. Ao longo dos anos,
            conquistei: Fundamentos de HTML, CSS e JavaScript para o
            desenvolvimento web. Uma especialização em Redes de Computadores
            durante o ensino médio. Uma graduação em Análise de Sistemas de
            Computação na Universidade Estácio de Sá. Certificações abrangentes
            em hardware, software e gerenciamento de serviços de TI.
            Conhecimentos sólidos em SAP, AWS, Power BI e PostgreSQL.
            Compreensão profunda dos princípios do DevOps. Certificações em
            conformidade, incluindo LGPD. Essa trajetória reflete meu
            compromisso com a excelência em Tecnologia da Informação e minha
            determinação em acompanhar as últimas tendências e práticas em um
            campo em constante evolução. Estou motivado a continuar minha busca
            por conhecimento e excelência na área de TI.
          </p>
          <p className="text-[1rem] font-[400] mb-4">
            Minha carreira começou com um estágio em redes de computadores na
            Bitnet Soluções, onde adquiri habilidades em suporte técnico por
            telefone, instalação e configuração de redes. Na Tecnet Provedor de
            Acesso e na Videomar Rede Nordeste, continuei aprimorando minhas
            capacidades de suporte técnico. Mudei para a Lanlink, onde cresci de
            suporte técnico de 2° nível para Líder de Telemarketing e
            Atendimento. Minhas responsabilidades incluíram resolução de
            chamados, criação de documentos de base de conhecimento e liderança
            em projetos de auxílio a diferentes setores. Atualmente, sou Dev
            Junior na Lanlink Informática, utilizando JS para automatizar
            processos em várias empresas. Minha jornada destaca meu compromisso
            com a TI e minha vontade de crescer continuamente neste campo em
            constante evolução.
          </p>
        </div>
        <div className="w-[50%] xs:w-[100%] xs:flex xs:items-center xs:justify-center">
          <Image
            src={photo}
            width={300}
            height={200}
            className="w-[90%] h-[450px] xs:w-auto xs:h-auto object-cover border border-[#DADADB] transition-all duration-500 ease-in-out cursor-pointer transform hover:scale-[1.05]"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
