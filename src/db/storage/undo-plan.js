import errorMessages from 'db/config/error-messages'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import app from 'db/config'
import toast from 'react-hot-toast'
import { change as plansChange } from 'store/reducers/plans'
import { change as binChange } from 'store/reducers/bin'

const db = getFirestore(app)

async function undoPlan(user, planData, binData, id, dispatch) {
   try {
      const filterDeletedPlans = binData.filter((v) => v.id !== id)
      const undoPlan = binData.filter((v) => v.id === id)

      await setDoc(doc(db, 'plans', user.uid), {
         data: [...planData, ...undoPlan],
      })

      await setDoc(doc(db, 'bin', user.uid), {
         data: filterDeletedPlans,
      })

      dispatch(plansChange([...planData, ...undoPlan]))
      dispatch(binChange(filterDeletedPlans))

      toast.success(`Deleted plan successfully restored.`)
   } catch (e) {
      console.error(e)
      errorMessages(e.code)
   }
}

export default undoPlan
