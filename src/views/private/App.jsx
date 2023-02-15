import Layouts from 'components/layouts'
import { Outlet } from 'react-router-dom'

function App() {
   const { Sidebar, Navbar } = Layouts.App

   return (
      <div className={'app'}>
         <Sidebar />
         <Navbar />
         <Outlet />
      </div>
   )
}

export default App
