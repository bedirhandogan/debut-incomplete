import styles from './styles.module.css'
import Input from 'components/shared/Input'
import Button from 'components/shared/Button'
import { useRef } from 'react'
import uploadImage from 'db/storage/upload-image'
import { useDispatch, useSelector } from 'react-redux'
import updateName from 'db/storage/update-name'

function Profile({ state }) {
   const fileRef = useRef()
   const handleFileUpload = () => fileRef.current?.click()
   const { data } = useSelector((state) => state.user)
   const dispatch = useDispatch()

   const handeSubmit = (event) => {
      event.preventDefault()
      const [name, email] = [event.target[0], event.target[2]]

      name.value.length !== 0 && updateName(name.value, dispatch)

      // normalize
      name.value = ''
      email.value = ''
   }

   const handleFileChange = async (event) => {
      const type = event.target.files[0].type

      if (type === 'image/jpeg' || type === 'image/png') {
         await uploadImage(
            `${data.uid}.${type.slice(6)}`,
            event.target.files[0],
            dispatch
         )
      }
   }

   return (
      <div className={styles.profile}>
         <div className={styles.actionTitle}>Profile</div>
         <div className={styles.profileContainer}>
            <form onSubmit={handeSubmit}>
               <div className={styles.inputWrapper}>
                  <div className={styles.inputName}>Name</div>
                  <Input
                     style={{
                        textAlign: 'left',
                        padding: '10px',
                        width: '100%',
                     }}
                     placeholder={state.displayName}
                     type={'text'}
                  />
                  <div className={styles.inputNote}>
                     Please no profanity, slang, sexuality etc. Do not use names
                     containing.
                  </div>
               </div>
               <div className={styles.inputWrapper}>
                  <div className={styles.inputName}>Email</div>
                  <Input
                     style={{
                        textAlign: 'left',
                        padding: '10px',
                        width: '100%',
                     }}
                     placeholder={state.email}
                     type={'email'}
                  />
                  <div className={styles.inputNote}>
                     Please use an email of your own otherwise you will not
                     receive a confirmation code.
                  </div>
               </div>
               <Button color={'blue'}>Update Profile</Button>
            </form>
            <div>
               <div
                  className={styles.profilePicture}
                  onClick={handleFileUpload}
               >
                  <img src={state.photoUrl} alt={'profile'} />
                  <div className={styles.pictureHover}>Upload a photo</div>
                  <input
                     type={'file'}
                     ref={fileRef}
                     onChange={handleFileChange}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile
