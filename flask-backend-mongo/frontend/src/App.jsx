import './App.css'
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from './contexts/userContext';
import { useEffect, useState } from 'react';

function App() {

  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('isLogged'))
  const [user, setUser] = useState(false)

  useEffect(() => {
    if (isLogged) {
      // llama a API obtiene información del usuario
      const currentUser = {
        user: localStorage.getItem("name")
      }
      setUser(currentUser)
      localStorage.setItem('isLogged', isLogged)
    } else {
      setUser(null)
      localStorage.removeItem('isLogged')
      navigate('/login')
    }
  }, [isLogged, navigate])

  return (
    <UserContext.Provider value={user}>
      <Outlet context={[setIsLogged]} />
    </UserContext.Provider>    
  )
}

export default App

