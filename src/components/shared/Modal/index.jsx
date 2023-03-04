import './styles.scss'
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change } from 'store/reducers/modal'
import { IconX } from '@tabler/icons-react'

function Modal({ children, style, title }) {
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
         className={'modal'}
         style={{ display: data.active ? 'flex' : 'none' }}
         ref={ref}
      >
         <div className={'modal-main'} style={style} ref={refWrapper}>
            <div className={'modal-main-header'}>
               <div className={'modal-main-title'}>{title}</div>
               <div
                  className={'modal-main-close-button'}
                  onClick={() =>
                     dispatch(
                        change({
                           active: false,
                        })
                     )
                  }
               >
                  <IconX
                     stroke={1.5}
                     width={20}
                     height={20}
                     style={{ color: 'var(--icon-color-primary)' }}
                  />
               </div>
            </div>
            {children}
         </div>
      </div>
   )
}

export default Modal
