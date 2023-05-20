import { IconBrandGoogle } from '@tabler/icons-react';
import logo from 'assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

import Button from 'components/shared/Button';
import Input from 'components/shared/Input';

import './styles.scss';

function AuthForm() {
  const navigate = useNavigate();

  return (
    <form className={'auth-form'}>
      <img src={logo} alt={'logo'} id={'auth-form-logo'} />
      <p className={'auth-form-note'}>Login with email or google account</p>
      <Button
        type={'primary'}
        id={'google'}
        style={{
          color: '#fff',
          border: 'none',
          width: '260px',
          height: '40px',
        }}
      >
        <IconBrandGoogle width={14} stroke={3} style={{ color: '#fff' }} />
        Continue with Google
      </Button>
      <hr className={'auth-form-break-line'} />
      <Input
        type={'email'}
        placeholder={'Email'}
        style={{
          textAlign: 'center',
          padding: '10px',
          width: '260px',
          height: '40px',
        }}
      />
      <Input
        type={'password'}
        placeholder={'Password'}
        style={{
          textAlign: 'center',
          padding: '10px',
          width: '260px',
          height: '40px',
        }}
      />
      <Button
        id={'password'}
        style={{ width: '260px', height: '40px' }}
        onClick={(e) => {
          e.preventDefault();
          navigate('/app');
        }}
      >
        Continue
      </Button>
    </form>
  );
}

export default AuthForm;
