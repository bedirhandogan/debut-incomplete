import { doc, getFirestore, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

import { change as binChange } from 'store/reducers/bin';

import app from 'db/config';
import errorMessages from 'db/config/error-messages';

const db = getFirestore(app);

async function removeGarbage(user, binData, id = 0, dispatch, trashAll = false) {
  try {
    const filtered = binData.filter((v) => v.id !== id);

    const newBinData = trashAll ? [] : filtered;

    setDoc(doc(db, 'bin', user.uid), {
      data: newBinData,
    });

    dispatch(binChange(newBinData));

    toast.success(`Garbage have been successfully deleted.`);
  } catch (e) {
    console.error(e);
    errorMessages(e.code);
  }
}

export default removeGarbage;
