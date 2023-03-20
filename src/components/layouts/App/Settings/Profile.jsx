import defaultProfile from 'assets/images/default-profile.svg';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/shared/Button';
import ImageUpload from 'components/shared/ImageUpload';
import Input from 'components/shared/Input';

import updateEmail from 'db/auth/update-email';
import updateName from 'db/auth/update-name';
import uploadImage from 'db/storage/upload-image';

import './styles.scss';

function Profile() {
  const imageRef = useRef();
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handeSubmit = (event) => {
    event.preventDefault();
    const [name, email] = [event.target[0], event.target[1]];

    name.value.length !== 0 && updateName(name.value, dispatch);
    email.value.length !== 0 && updateEmail(email.value, dispatch);

    // normalize
    name.value = '';
    email.value = '';
  };

  const handleFocusInput = () => imageRef.current?.click();

  const handleUpload = async (event) => {
    const type = event.target.files[0].type;

    if (type === 'image/jpeg' || type === 'image/png') {
      await uploadImage(`${data.uid}.${type.slice(6)}`, event.target.files[0], dispatch);
    }
  };

  return (
    <div className={'settings-profile'}>
      <form onSubmit={handeSubmit}>
        <div className={'settings-input-wrapper'}>
          <div className={'settings-input-name'}>Name</div>
          <Input
            style={{
              textAlign: 'left',
              padding: '10px',
              width: '100%',
            }}
            placeholder={data.displayName}
            type={'text'}
          />
          <div className={'settings-input-note'}>
            Please no profanity, slang, sexuality etc. Do not use names containing.
          </div>
        </div>
        <div className={'settings-input-wrapper'}>
          <div className={'settings-input-name'}>Email</div>
          <Input
            style={{
              textAlign: 'left',
              padding: '10px',
              width: '100%',
            }}
            placeholder={data.email}
            type={'email'}
            disabled={data.providerId === 'google.com'}
          />
          <div className={'settings-input-note'}>
            {data.providerId === 'google.com'
              ? 'You cannot change your email address because you registered with google.'
              : `Please use an email of your own otherwise you will not receive a confirmation code.`}
          </div>
        </div>
        <div className={'settings-button'}>
          <Button type={'secondary'}>Update Profile</Button>
        </div>
      </form>
      <div>
        <div className={'settings-input-name'}>Profile Picture</div>
        <ImageUpload
          reference={imageRef}
          handleInputFocus={handleFocusInput}
          handleUpload={handleUpload}
          label={'Upload a photo'}
          style={{ marginTop: '10px' }}
        >
          <img src={data.photoUrl !== null ? data.photoUrl : defaultProfile} alt={'profile'} />
        </ImageUpload>
      </div>
    </div>
  );
}

export default Profile;
