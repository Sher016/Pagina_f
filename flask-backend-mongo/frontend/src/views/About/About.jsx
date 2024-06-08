// import Tweet from "../../components/Tweet/Tweet"
// import { useContext } from "react"
// import { UserContext } from "../../contexts/userContext"

function About() {

    return (
        <>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black dark:text-[#248566] pb-4">Nosotros</h1>
                        <p className="font-medium text-base leading-6 text-black dark:text-black">
                        Somos la plataforma líder en cursos virtuales, ofreciendo una amplia gama de temas, desde química hasta matemáticas y más. Nuestros cursos están diseñados para hacer que el aprendizaje sea accesible, conveniente y efectivo. Con instructores expertos y contenido de calidad, te ayudamos a alcanzar tus metas educativas desde la comodidad de tu hogar. Únete a nosotros y descubre el poder de aprender en línea
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-[#248566] pb-4">Nuestro equipo</h1>
                        <p className="font-medium text-base leading-6 text-gray-600 dark:text-black">
                        En nuestro equipo, contamos con profesores altamente calificados en diferentes campos, quienes se esfuerzan por brindar una experiencia educativa excepcional. Además, tenemos un equipo de soporte técnico dedicado a resolver problemas técnicos, garantizando una experiencia sin contratiempos en nuestra plataforma. Complementando esto, nuestro equipo de gestión logística y financiera trabaja diligentemente para garantizar el funcionamiento óptimo de nuestros cursos y transacciones financieras. Juntos, estamos comprometidos con el éxito y la satisfacción de nuestros estudiantes, proporcionando una experiencia de aprendizaje en línea de primera clase.
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-5 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                                <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Alexa</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                                <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Olivia</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                                <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Liam</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Elijah</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-black mt-4">Elijah</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About