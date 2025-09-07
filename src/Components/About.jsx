import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="mx-auto max-w-7xl px-8 grid md:grid -cols-2 items-center gap-6">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="code and Coffee"></SectionTitle>
          <p className="text-slate-600 mt-4 text-lg">
            Hi, I’m Chidozie Nwanedo — a Front-End Web Developer,
            Bioinformatician, and Pharmacist with a growing passion for Web3
            technologies. My journey bridges science and technology, from
            analyzing biological data to creating responsive, user-focused
            applications with JavaScript, TypeScript, React, and modern
            frameworks. My background in pharmacy sharpens my problem-solving,
            perseverance, and attention to detail, while my current exploration
            of Solidity and blockchain reflects my drive to build innovative,
            decentralized solutions. Beyond tech, I value continuous learning,
            teamwork, and knowledge-sharing, and in my free time I enjoy
            football, reading, volunteering, and connecting with friends.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
