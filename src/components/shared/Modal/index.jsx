import styles from './styles.module.css'
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'store/reducer/modal'

function Modal({ children, style }) {
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
            {children}
         </div>
      </div>
   )
}

export default Modal
