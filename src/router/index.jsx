import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/public/Home'
import App from '../views/private/App'
import Introduction from '../components/layout/Introduction'

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'app'} element={<App />}>
               <Route path={'/app'} element={<Introduction />} />
               <Route path={'tasks'} element={<div>tasks</div>} />
               <Route path={'notes'} element={<div>notes</div>} />
               <Route path={'bookmarks'} element={<div>bookmarks</div>} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default Router
