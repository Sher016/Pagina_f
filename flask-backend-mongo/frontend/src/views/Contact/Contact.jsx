// import Tweet from "../../components/Tweet/Tweet"
// import { useContext } from "react"
// import { UserContext } from "../../contexts/userContext"

function Contact() {

    return (
        <>
            <section className="bg-white">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-[#248566]">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-medium text-center text-gray-500 dark:text-black sm:text-xl">¿Tienes algún problema, inquietud o sugerencia?
                        <br>
                        </br>
                        Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label className="flex mb-2 text-sm font-bold text-gray-900 dark:text-[#248566]">Tu  email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label className="flex mb-2 text-sm font-bold text-gray-900 dark:text-[#248566]">Asunto</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Haznos saber cómo podemos ayudarte" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="flex mb-2 text-sm font-bold text-gray-900 dark:text-[#248566]">Deja tu mensaje</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Tu comentario..."></textarea>
                        </div>
                        <div className="sm:col-span-2 flex">
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#248566] sm:w-fit hover:bg-[#1cc791] hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300">Enviar mensaje</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact