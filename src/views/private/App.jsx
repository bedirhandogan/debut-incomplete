import Sidebar from 'components/layout/Sidebar'
import Navbar from 'components/layout/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
   return (
      <div className={'app'}>
         <Sidebar />
         <Navbar />
         <Outlet />
      </div>
   )
}

export default App
