import { useDispatch, useSelector } from 'react-redux'
import { edit } from 'store/reducer/create-project'
import styles from 'components/layouts/App/CreateProject/styles.module.css'
import Input from 'components/shared/Input'
import Textarea from 'components/shared/Textarea'
import { IconX } from '@tabler/icons-react'

function Details() {
   const dispatch = useDispatch()
   const { data } = useSelector((state) => state.createProject)

   const handleTag = (event) => {
      if (event.key === 'Enter') {
         dispatch(
            edit({
               tag: [...data.tag, event.target.value],
            })
         )

         // normalize
         event.target.value = ''
      }
   }

   const deleteTag = (index) => {
      const filtered = data.tag.filter((v, i) => i !== index)

      dispatch(
         edit({
            tag: filtered,
         })
      )
   }

   return (
      <>
         <div className={styles.inputWrapper}>
            <div className={styles.inputName}>Title</div>
            <Input
               placeholder={'Enter a title for draft'}
               type={'text'}
               style={{ textAlign: 'left', padding: '10px', width: '300px' }}
            />
         </div>
         <div className={styles.inputWrapper}>
            <div className={styles.inputName}>Description</div>
            <Textarea
               placeholder={'Enter a description for draft'}
               style={{
                  height: '100px',
               }}
            />
         </div>
         <div className={styles.inputWrapper}>
            <div className={styles.inputName}>Tag</div>
            <Input
               placeholder={'Enter a tag for draft'}
               type={'text'}
               style={{ textAlign: 'left', padding: '10px', width: '200px' }}
               onKeyPress={handleTag}
            />
            {data.tag.length === 0 && (
               <div className={styles.inputNote}>
                  You haven't added a tag yet.
               </div>
            )}
         </div>
         <div className={styles.tags}>
            {data.tag.map((v, i) => (
               <span key={i}>
                  {v}
                  <IconX
                     stroke={2}
                     width={12}
                     height={12}
                     style={{ color: 'var(--icon-color-primary)' }}
                     onClick={() => deleteTag(i)}
                  />
               </span>
            ))}
         </div>
      </>
   )
}

export default Details
