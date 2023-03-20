import { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from 'components/shared/Button';
import Input from 'components/shared/Input';

import updatePassword from 'db/auth/update-password';

import './styles.scss';

function Password() {
  const [confirmColor, setConfirmColor] = useState('');
  const { data } = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const [newPassword, confirmPassword] = [event.target[0], event.target[1]];

    if (newPassword.value === confirmPassword.value) {
      setConfirmColor('#01d001');
      await updatePassword(newPassword.value);
    } else setConfirmColor('#fd2835');

    // normalize
    newPassword.value = '';
    confirmPassword.value = '';
  };

  return (
    <form className={'settings-password'} onSubmit={handleSubmit}>
      <div className={'settings-input-wrapper'}>
        <div className={'settings-input-name'}>New Password</div>
        <Input
          style={{
            textAlign: 'left',
            padding: '10px',
            width: '100%',
          }}
          placeholder={'Enter a new password'}
          type={'text'}
          disabled={data.providerId === 'google.com'}
        />
      </div>
      <div className={'settings-input-wrapper'}>
        <div className={'settings-input-name'}>Confirm New Password</div>
        <Input
          style={{
            textAlign: 'left',
            padding: '10px',
            width: '100%',
            borderColor: confirmColor,
          }}
          placeholder={'Confirm your new password'}
          type={'text'}
          disabled={data.providerId === 'google.com'}
        />
        <div className={'settings-input-note'}>
          {data.providerId === 'google.com'
            ? 'You cannot change your password because you are registered with Google.'
            : 'Please enter a password longer than 6 characters.'}
        </div>
      </div>
      <div className={'settings-button'}>
        <Button type={'secondary'} style={{ width: '150px' }} disabled={data.providerId === 'google.com'}>
          Update Password
        </Button>
      </div>
    </form>
  );
}

export default Password;
