import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import handleUser from 'utils/handle/user';

import { change } from 'store/reducers/user';

import errorMessages from '../config/error-messages';
import { AuthInstance } from './index';

async function Login(email, password, navigate, dispatch) {
  try {
    const result = await signInWithEmailAndPassword(AuthInstance, email, password);
    const user = handleUser(result.user);

    toast.success('Your account has been successfully logged in.');

    dispatch(change(user));
    navigate('/app');
  } catch (e) {
    errorMessages(e.code);
  }
}

export default Login;
