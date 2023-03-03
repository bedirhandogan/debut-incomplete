import { useDispatch, useSelector } from 'react-redux'
import { edit } from 'store/reducer/create-plan'
import styles from './styles.module.css'
import Input from 'components/shared/Input'
import Textarea from 'components/shared/Textarea'
import { IconX } from '@tabler/icons-react'

function Details() {
   const dispatch = useDispatch()
   const { data } = useSelector((state) => state.createPlan)

   const handleTitle = (event) =>
      dispatch(
         edit({
            title: event.target.value,
         })
      )

   const handleDescription = (event) =>
      dispatch(
         edit({
            description: event.target.value,
         })
      )

   const handleTag = (event) => {
      if (event.key === 'Enter') {
         dispatch(
            edit({
               tags: [...data.tags, event.target.value],
            })
         )

         // normalize
         event.target.value = ''
      }
   }

   const deleteTag = (index) => {
      const filtered = data.tags.filter((v, i) => i !== index)

      dispatch(
         edit({
            tags: filtered,
         })
      )
   }

   return (
      <div className={styles.details}>
         <div className={styles.wrapper}>
            <div className={styles.name}>Title</div>
            <Input
               placeholder={'Enter a title for plan'}
               type={'text'}
               style={{ textAlign: 'left', padding: '10px', width: '300px' }}
               onChange={handleTitle}
            />
         </div>
         <div className={styles.wrapper}>
            <div className={styles.name}>Description</div>
            <Textarea
               placeholder={'Enter a description for plan'}
               style={{
                  height: '100px',
               }}
               onChange={handleDescription}
            />
         </div>
         <div className={styles.wrapper}>
            <div className={styles.name}>Tags</div>
            <Input
               placeholder={'Enter a tag for plan'}
               type={'text'}
               style={{ textAlign: 'left', padding: '10px', width: '200px' }}
               onKeyPress={handleTag}
            />
            {data.tags.length === 0 && (
               <div className={styles.note}>You haven't added a tag yet.</div>
            )}
         </div>
         <div className={styles.tags}>
            {data.tags.map((v, i) => (
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
      </div>
   )
}

export default Details
