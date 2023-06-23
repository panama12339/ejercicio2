import './App.css'
import { NavLink } from 'react-router-dom'
import Header from './componentes/Header'
import About from './componentes/About'
import Dashboard from './componentes/Dashboard'
import Home from './componentes/Home'

function App() {

  return (
   <section>
      <NavLink to={Header}>Header</NavLink>
      <NavLink to={About}>About</NavLink>
      <NavLink to={Dashboard}>Dashboard</NavLink>
      <NavLink to={Home}>Home</NavLink>
   </section>
  )
}

export default App
