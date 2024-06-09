import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import logo from '../../assets/images/e-logo.jpg'

// const USER_LOGIN_DEFAULT = {
//   username: 'juan',
//   password: '123456'
// }

function Login() {

  const navigate = useNavigate()
  const [setIsLogged] = useOutletContext();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('');
  const [user, setUser] = useState('');

  async function login(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/validateStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        setStatus(data.status);

        if (data.status === 'Valid login') {
          setIsLogged(true);
          localStorage.setItem("name", data.studentName);
          navigate('/home');
        } else {
          alert('Usuario incorrecto');
        }
      } else {
        setStatus(data.status);
        setUser(data);
        alert('Usuario incorrecto');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setStatus('An error occurred. Please try again.');
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
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Usuario
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-[#00df9a] hover:text-[#008a5f]">
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </div>
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
              onClick={login}
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Aún no tiene cuenta?{' '}
          <a href="#" className="font-semibold leading-6 text-[#00df9a] hover:text-[#008a5f]" onClick={() => navigate('/signup')}>
            Regístrese gratis.
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login