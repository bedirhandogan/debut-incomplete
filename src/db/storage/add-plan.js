import { doc, getFirestore, setDoc, getDoc } from 'firebase/firestore'
import app from 'db/config'
import toast from 'react-hot-toast'

const db = getFirestore(app)

async function addPlan(user, data) {
   const docSnap = await getDoc(doc(db, 'users', user.uid))
   try {
      if (docSnap.exists()) {
         await setDoc(doc(db, 'users', user.uid), {
            ...docSnap.data(),
            plans: [...docSnap.data()?.plans, data],
         })
      }

      toast.success('Your plan has been created.', {
         position: 'top-right',
      })
   } catch (e) {
      console.error(e)
   }
}

export default addPlan
