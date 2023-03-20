import 'assets/styles/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider, useSelector } from 'react-redux';
import Router from 'router';
import { store } from 'store';

import CreatePlan from 'components/layouts/App/CreatePlan';
import Settings from 'components/layouts/App/Settings';
import AuthForm from 'components/layouts/Home/Auth';
import Loader from 'components/shared/Loader';
import Modal from 'components/shared/Modal';

const root = createRoot(document.getElementById('root'));

function ModalWrapper() {
  const { data } = useSelector((state) => state.modal);

  const sections = [
    {
      name: 'settings',
      component: <Settings />,
    },
    {
      name: 'auth-form',
      component: <AuthForm />,
    },
    {
      name: 'create-plan',
      component: <CreatePlan />,
    },
  ];

  const index = sections.findIndex((v) => v.name === data.component);

  return <Modal title={sections[index]?.name.replace('-', ' ')}>{sections[index]?.component}</Modal>;
}

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <ModalWrapper />
      </Router>
      <Toaster
        toastOptions={{
          position: 'top-right',
          style: {
            background: 'var(--background-color-primary-variant)',
            border: 'var(--g-border)',
            color: 'var(--text-color-primary)',
          },
        }}
      />
      <Loader />
    </Provider>
  );
}

root.render(<Root />);
