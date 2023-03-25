import { doc, getFirestore, updateDoc } from 'firebase/firestore';

import { change } from 'store/reducers/plans';

import app from 'db/config';

const db = getFirestore(app);

function changeMarkValue(data, plans, uid, dispatch) {
  const findIndexUser = data.users.findIndex((v) => v.uid === uid);
  const filterPlans = plans.filter((v) => v.id !== data.id);
  const plan = JSON.parse(JSON.stringify(data));

  Object.assign(plan.users[findIndexUser], { mark: !plan.users[findIndexUser].mark });

  dispatch(change([...filterPlans, plan]));
  updateDoc(doc(db, 'plans', uid), {
    data: [...filterPlans, plan],
  });
}

export default changeMarkValue;
