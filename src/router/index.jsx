import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from 'views/private/App';
import Bin from 'views/private/Bin';
import Bookmarks from 'views/private/Bookmarks';
import Overview from 'views/private/Overview';
import Plan from 'views/private/Plan';
import Plans from 'views/private/Plans';
import Home from 'views/public/Home';

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
  );
}

export default Router;
