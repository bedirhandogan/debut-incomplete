import errorMessages from 'db/config/error-messages'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import app from 'db/config'
import toast from 'react-hot-toast'
import { change as plansChange } from 'store/reducers/plans'
import { change as binChange } from 'store/reducers/bin'

const db = getFirestore(app)

async function removePlan(user, planData, binData, id, dispatch) {
   try {
      const filtered = planData.filter((v) => v.id !== id)
      const removedPlan = planData.filter((v) => v.id === id)

      await setDoc(doc(db, 'plans', user.uid), {
         data: filtered,
      })

      await setDoc(doc(db, 'bin', user.uid), {
         data: [...binData, ...removedPlan],
      })

      dispatch(plansChange(filtered))
      dispatch(binChange([...binData, ...removedPlan]))

      toast.success(
         `The plan was successfully deleted. If you wish, you can see the deleted plans from the bin page.`
      )
   } catch (e) {
      console.error(e)
      errorMessages(e.code)
   }
}

export default removePlan
