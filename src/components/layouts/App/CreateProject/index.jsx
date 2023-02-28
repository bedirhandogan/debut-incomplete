import styles from './styles.module.css'
import Input from 'components/shared/Input'
import Textarea from 'components/shared/Textarea'
import Button from 'components/shared/Button'
import { useDispatch, useSelector } from 'react-redux'
import { edit } from 'store/reducer/create-project'
import { IconX } from '@tabler/icons-react'

function CreateProject() {
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
      <div className={styles.createProject}>
         <div className={styles.multiStep}>
            <div className={`${styles.item} ${styles.active}`}>
               <div className={styles.count}>1</div>
               <div className={styles.text}>Details</div>
            </div>
            <div className={styles.item}>
               <div className={styles.count}>2</div>
               <div className={styles.text}>Theme</div>
            </div>
            <div className={styles.item}>
               <div className={styles.count}>3</div>
               <div className={styles.text}>Team</div>
            </div>
            <div className={styles.item}>
               <div className={styles.count}>4</div>
               <div className={styles.text}>Check</div>
            </div>
         </div>
         <div className={styles.area}>
            <div className={styles.title}>Details</div>
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
            <div className={styles.buttons}>
               <Button type={'fourth'} style={{ width: '60px' }}>
                  Prev
               </Button>
               <Button type={'secondary'} style={{ width: '60px' }}>
                  Next
               </Button>
            </div>
         </div>
      </div>
   )
}

export default CreateProject
