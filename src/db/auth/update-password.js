import { updatePassword as _updatePassword } from 'firebase/auth';
import toast from 'react-hot-toast';

import { AuthInstance } from 'db/auth/index';
import errorMessages from 'db/config/error-messages';

async function updatePassword(password) {
  try {
    await _updatePassword(AuthInstance.currentUser, password);
    toast.success('Your password has been changed.');
  } catch (e) {
    errorMessages(e.code);
    console.error(e);
  }
}

export default updatePassword;
