import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Main from 'components/layouts/App/Main'
import Sidebar from 'components/layouts/App/Sidebar'
import Navbar from 'components/layouts/App/Navbar'
import './styles.scss'

function App() {
   const navigate = useNavigate()

   useEffect(() => {
      if (Object.keys(JSON.parse(localStorage.getItem('user'))).length === 0)
         navigate('/')
   }, [navigate])

   return (
      <div className={'app'}>
         <Sidebar />
         <Navbar />
         <Main>
            <Outlet />
         </Main>
      </div>
   )
}

export default App
