import styles from './styles.module.css'
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'store/reducer/modal'

function Modal({ size = { width: 350, height: 350 } }) {
   const { show } = useSelector((state) => state.modal)
   const dispatch = useDispatch()
   const [ref, refWrapper] = [useRef(), useRef()]

   const handleClick = useCallback(
      (event) => {
         if (
            event.composedPath().includes(ref.current) &&
            !event.composedPath().includes(refWrapper.current)
         )
            dispatch(change(false))
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
         style={{ display: show ? 'flex' : 'none' }}
         ref={ref}
      >
         <div className={styles.wrapper} style={size} ref={refWrapper}></div>
      </div>
   )
}

export default Modal
