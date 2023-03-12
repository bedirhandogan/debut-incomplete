import { doc, getFirestore, setDoc, getDoc } from 'firebase/firestore'
import app from 'db/config'
import toast from 'react-hot-toast'
import { change } from 'store/reducers/plans'

const db = getFirestore(app)

async function addPlan(user, data, dispatch) {
   const docSnap = await getDoc(doc(db, 'users', user.uid))
   try {
      const updatedData = {
         ...docSnap.data(),
         plans: [...docSnap.data()?.plans, data],
      }

      if (docSnap.exists()) {
         await setDoc(doc(db, 'users', user.uid), updatedData)
      }

      dispatch(change(updatedData.plans))

      toast.success('Your plan has been created.', {
         position: 'top-right',
      })
   } catch (e) {
      console.error(e)
   }
}

export default addPlan
