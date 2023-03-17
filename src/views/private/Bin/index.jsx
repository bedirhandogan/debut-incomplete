import './styles.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'store/reducers/bin'
import getBin from 'db/storage/get-bin'

function Bin() {
   const dispatch = useDispatch()
   const user = useSelector((state) => state.user.data)

   useEffect(() => {
      ;(async () => {
         dispatch(change(await getBin(user)))
      })()
   }, [dispatch, user])

   return <div className={'bin'}>bin area</div>
}

export default Bin
