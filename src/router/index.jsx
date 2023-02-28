import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'views/public/Home'
import App from 'views/private/App'
import Layouts from 'components/layouts'
import Plans from 'components/layouts/App/Plans'
import Bookmarks from 'components/layouts/App/Bookmarks'

function Router({ children }) {
   const { Introduction } = Layouts.App

   return (
      <BrowserRouter>
         <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'app'} element={<App />}>
               <Route path={'/app'} element={<Introduction />} />
               <Route path={'plans'} element={<Plans />} />
               <Route path={'bookmarks'} element={<Bookmarks />} />
            </Route>
         </Routes>
         {children}
      </BrowserRouter>
   )
}

export default Router
