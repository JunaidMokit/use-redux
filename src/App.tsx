

import { Link, Outlet } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import { NavigationMenu } from './components/ui/navigation-menu'

function App() {
 

  return (
    <>
    <h1>Helo</h1>
      <Button>Test</Button>
      <Link to="/user">User</Link>
      <Link to="/task">Task</Link>
      <NavigationMenu></NavigationMenu>
      <Outlet/>
      
    </>
  )
}

export default App
