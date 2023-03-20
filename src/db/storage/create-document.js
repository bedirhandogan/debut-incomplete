import { doc, getFirestore, setDoc } from 'firebase/firestore';

import app from 'db/config';

const db = getFirestore(app);

async function createDocument(user) {
  // plans document
  setDoc(doc(db, 'plans', user.uid), {
    data: [],
  });

  // bin document
  setDoc(doc(db, 'bin', user.uid), {
    data: [],
  });
}

export default createDocument;
