import {doc, setDoc, getFirestore} from "firebase/firestore";
import app from "db/config";

const db = getFirestore(app)

async function createDocument(user) {
    await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
    })
}

export default createDocument