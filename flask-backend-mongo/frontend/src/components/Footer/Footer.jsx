// Footer.js file
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from "../../assets/images/e-logo.jpg"

const socialMediaIcons = [
  { icon: <FaFacebook size={28} />, link: "#" },
  { icon: <FaInstagram size={28} />, link: "#" },
  { icon: <FaTwitter size={28} />, link: "#" },
];

const footerSections = [
  {
    title: "CodeCraft",
    content:
      "Somos una academia de estudios en línea enfocada en el desarrollo personal y profesional de nuestros aprendices.",
    footerText: "@Equipo 2024 All rights Reserved"
  },
  {
    title: "Ayuda",
    links: [
      { label: "Soporte", url: "#" },
      { label: "Registro", url: "#" },
      { label: "Perfil", url: "#" },
    ],
  },
  {
    title: "E-Learning",
    links: [
      { label: "Cursos", url: "/courses" },
      { label: "Nosotros", url: "/about" },
      { label: "Contacto", url: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Confidencialidad y seguridad", url: "#" },
      { label: "Terminos y condiciones", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <section className="fotter p-3 md:p-8 bg-black text-white">
        <div className="flex flex-col md:flex-row items-center mx-auto md:mx-0 justify-between w-full p-4">
          <div className="dev font-nun w-full md:w-1/2 mt-12 md:mt-0">
            <div className="flex flex-row items-center justify-start">
              <div className="logo w-20 mr-5">
                <img src={logo} alt="" href="home"/>
              </div>
              <h1 className="font-bold text-[#00df9a] text-2xl">E-Learning</h1>
            </div>
            <p className="font-medium text-md my-4 text-left">
              {footerSections[0].content}
            </p>
            <p className="text-sm font-extralight text-left">
              {footerSections[0].footerText}
            </p>
          </div>
          <div className="help-legal my-2 md:my-8 flex flex-row justify-between w-full xl:w-1/2 mx-auto p-2 md:p-10 md:pr-2 mt-12">
            {footerSections.slice(1).map((section, index) => (
              <div key={index} className="mr-4 md:mr-8">
                <h2 className="font-bold my-3">{section.title}</h2>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="my-4 hover:text-blue-700 transition-all ease-in duration-300"
                    >
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="social font-nun w-full text-center mb-12">
          <h1 className="font-bold my-3 text-xl">Redes sociales</h1>
          <ul className="flex flex-row items-center justify-center mt-6">
            {socialMediaIcons.map((socialMedia, index) => (
              <li key={index} className="mx-8">
                <a
                  href={socialMedia.link}
                  className="bi bi-instagram text-[#00df9a] hover:text-[#a8f0d9] transition-all ease-in duration-300"
                >
                  {socialMedia.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;