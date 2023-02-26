import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'views/public/Home'
import App from 'views/private/App'
import Layouts from 'components/layouts'
import Tasks from 'components/layouts/App/Projects'
import Bookmarks from 'components/layouts/App/Bookmarks'

function Router() {
   const { Introduction } = Layouts.App

   return (
      <BrowserRouter>
         <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'app'} element={<App />}>
               <Route path={'/app'} element={<Introduction />} />
               <Route path={'projects'} element={<Tasks />} />
               <Route path={'bookmarks'} element={<Bookmarks />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default Router
