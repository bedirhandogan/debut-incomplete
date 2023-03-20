import { createUserWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import handleUser from 'utils/handle/user';

import { change } from 'store/reducers/user';

import createDocument from 'db/storage/create-document';

import errorMessages from '../config/error-messages';
import { AuthInstance } from './index';

async function Register(email, password, navigate, dispatch) {
  try {
    const result = await createUserWithEmailAndPassword(AuthInstance, email, password);
    const user = handleUser(result.user);

    toast.success('Your account has been created.');

    await createDocument(result.user);
    navigate('/app');
    dispatch(change(user));
  } catch (e) {
    errorMessages(e.code);
  }
}

export default Register;
