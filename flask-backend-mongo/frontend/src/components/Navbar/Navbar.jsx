import { useState } from 'react';
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/e-logo.jpg';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const name = localStorage.getItem("name")
    //console.log(name);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    const [setIsLogged] = useOutletContext()
    // const user = useContext(UserContext);

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Inicio', route: '/home' },
        { id: 2, text: 'Cursos', route: '/courses' },
        { id: 3, text: 'Nosotros', route: '/about' },
        { id: 4, text: 'Contacto', route: '/contact' },
        { id: 5, text: name, route: '/home' },
        { id: 6, text: 'Salir', route: '' }
    ];

    function setClick(item) {
        if (item.id === 6) {
            setIsLogged(false)
            localStorage.clear()
        } else {
            navigate(item.route)
        }
    }

    return (
        <>
            <div className='bg-black flex justify-between items-center h-24 max-w-[1920px] mx-auto px-4 text-white'>
                {/* Logo */}
                <img className='logo w-20 mr-5' src={logo} />

                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>E-Learning</h1>

                <ul className='hidden md:flex'>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className='sm:align-middle md:align-bottom lg:align-text-top xl:align-text-bottom p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                            onClick={() => setClick(item)}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>E-Learning</h1>

                    {/* Mobile Navigation Items */}
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className='sm:align-middle md:align-bottom lg:align-text-top xl:align-text-bottom p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                            onClick={() => setClick(item)}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};

export default Navbar;