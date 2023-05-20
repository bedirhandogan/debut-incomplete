import { Outlet } from 'react-router-dom';

import Main from 'components/layouts/App/Main';
import Navbar from 'components/layouts/App/Navbar';
import Sidebar from 'components/layouts/App/Sidebar';

import './styles.scss';

function App() {
  return (
    <div className={'app'}>
      <Sidebar />
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default App;
