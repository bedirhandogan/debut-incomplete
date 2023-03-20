import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';
import handleUser from 'utils/handle/user';

import { change } from 'store/reducers/user';

import createDocument from 'db/storage/create-document';

import errorMessages from '../config/error-messages';
import { AuthInstance } from './index';

const provider = new GoogleAuthProvider();

async function GoogleAuth(navigate, dispatch) {
  try {
    const result = await signInWithPopup(AuthInstance, provider);
    const { isNewUser } = getAdditionalUserInfo(result);
    const user = handleUser(result.user);

    toast.success('Your account has been successfully logged in.');

    if (isNewUser) {
      await createDocument(result.user);
    }

    dispatch(change(user));
    navigate('/app');
  } catch (e) {
    errorMessages(e.code);
    console.error(e);
  }
}

export default GoogleAuth;
