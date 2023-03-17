import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'views/public/Home'
import App from 'views/private/App'
import Overview from 'views/private/Overview'
import Plans from 'views/private/Plans'
import Bookmarks from 'views/private/Bookmarks'
import Plan from 'views/private/Plan'
import Bin from 'views/private/Bin'

function Router({ children }) {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'app'} element={<App />}>
               <Route path={'/app'} element={<Overview />} />
               <Route path={'plans'} element={<Plans />} />
               <Route path={'plans/:id'} element={<Plan />} />
               <Route path={'bookmarks'} element={<Bookmarks />} />
               <Route path={'bin'} element={<Bin />} />
            </Route>
         </Routes>
         {children}
      </BrowserRouter>
   )
}

export default Router
