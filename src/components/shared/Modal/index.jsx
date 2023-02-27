import styles from './styles.module.css'
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'store/reducer/modal'
import Settings from 'components/layouts/App/Settings'
import AuthForm from 'components/layouts/App/Auth'

function Modal({ style }) {
   const { data } = useSelector((state) => state.modal)
   const dispatch = useDispatch()
   const [ref, refWrapper] = [useRef(), useRef()]

   const handleClick = useCallback(
      (event) => {
         if (
            event.composedPath().includes(ref.current) &&
            !event.composedPath().includes(refWrapper.current)
         )
            dispatch(
               change({
                  active: false,
               })
            )
      },
      [ref, refWrapper, dispatch]
   )

   useEffect(() => {
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
   }, [handleClick])

   return (
      <div
         className={styles.modal}
         style={{ display: data.active ? 'flex' : 'none' }}
         ref={ref}
      >
         <div className={styles.wrapper} style={style} ref={refWrapper}>
            {data.component === 'settings' ? <Settings /> : <AuthForm />}
         </div>
      </div>
   )
}

export default Modal
