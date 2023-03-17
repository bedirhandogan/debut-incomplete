import { doc, getFirestore, setDoc, getDoc } from 'firebase/firestore'
import app from 'db/config'
import toast from 'react-hot-toast'
import { change } from 'store/reducers/plans'

const db = getFirestore(app)

async function addPlan(user, data, dispatch) {
   const docSnap = await getDoc(doc(db, 'plans', user.uid))
   try {
      const updatedData = {
         ...docSnap.data(),
         data: [...docSnap.data()?.data, data],
      }

      if (docSnap.exists()) {
         await setDoc(doc(db, 'plans', user.uid), updatedData)
      }

      dispatch(change(updatedData.data))

      toast.success('Your plan has been created.')
   } catch (e) {
      console.error(e)
   }
}

export default addPlan
