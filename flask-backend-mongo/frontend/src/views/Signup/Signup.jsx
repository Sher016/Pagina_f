import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import logo from '../../assets/images/e-logo.jpg';

function Signup() {

    const navigate = useNavigate();
    // const [setIsLogged] = useOutletContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [status, setStatus] = useState('');
    const [user, setUser] = useState('');

    async function signup(event) {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:5000/postStudent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, lastName, idNumber, email, birthDate, username, password })
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setUser(data);
            setStatus(data.status);
            if (data.status === 'Signup successful') {
              localStorage.setItem("name", data.name);
              navigate('/home');
            } else {
              alert(data.status);
            }
          } else {
            setStatus(data.message);
            alert(data.message);
          }
        } catch (error) {
          console.error('Error during fetch:', error);
          setStatus('An error occurred. Please try again.');
          alert('An error occurred. Please try again.');
        }
      }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-100 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Crea una cuenta nueva
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombre
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                required
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                            Apellido
                        </label>
                        <div className="mt-2">
                            <input
                                id="lastname"
                                name="lastname"
                                required
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="idNumber" className="block text-sm font-medium leading-6 text-gray-900">
                            Número de identificación
                        </label>
                        <div className="mt-2">
                            <input
                                id="idNumber"
                                name="idNumber"
                                required
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                onChange={(e) => setIdNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                required
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="birthDante" className="block text-sm font-medium leading-6 text-gray-900">
                            Fecha de nacimiento
                        </label>
                        <div className="mt-2">
                            <input
                                id="birthDante"
                                name="birthDante"
                                required
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                onChange={(e) => setBirthDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Usuario
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                required
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Contraseña
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#00df9a] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#008a5f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={signup}
                        >
                            Registrarse
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    ¿Ya tienes cuenta?{' '}
                    <a href="/login" className="font-semibold leading-6 text-[#00df9a] hover:text-[#008a5f]">
                        Inicia sesión.
                    </a>
                </p>
            </div>
        </div>
    );
}

    export default Signup;
