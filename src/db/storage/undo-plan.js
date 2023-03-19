import errorMessages from 'db/config/error-messages'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import app from 'db/config'
import toast from 'react-hot-toast'
import { change as plansChange } from 'store/reducers/plans'
import { change as binChange } from 'store/reducers/bin'

const db = getFirestore(app)

async function undoPlan(
   user,
   planData,
   binData,
   id = 0,
   dispatch,
   undoAll = false
) {
   try {
      const filterDeletedPlans = binData.filter((v) => v.id !== id)
      const undoPlan = binData.filter((v) => v.id === id)

      const newPlansData = undoAll
         ? [...planData, ...binData]
         : [...planData, ...undoPlan]

      const newBinData = undoAll ? [] : filterDeletedPlans

      console.log(newPlansData)
      console.log(newBinData)

      setDoc(doc(db, 'plans', user.uid), {
         data: newPlansData,
      })

      setDoc(doc(db, 'bin', user.uid), {
         data: newBinData,
      })

      dispatch(plansChange(newPlansData))
      dispatch(binChange(newBinData))

      toast.success(
         `Deleted ${
            undoAll ? 'plans' : 'plan'
         } have been successfully restored.`
      )
   } catch (e) {
      console.error(e)
      errorMessages(e.code)
   }
}

export default undoPlan
