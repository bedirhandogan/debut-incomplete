import styles from './styles.module.css'
import Input from 'components/shared/Input'
import Button from 'components/shared/Button'
import { useState } from 'react'
import updatePassword from 'db/auth/update-password'
import { useSelector } from 'react-redux'

function Password() {
   const [confirmColor, setConfirmColor] = useState('')
   const { data } = useSelector((state) => state.user)

   const handleSubmit = async (event) => {
      event.preventDefault()

      const [newPassword, confirmPassword] = [event.target[0], event.target[1]]

      if (newPassword.value === confirmPassword.value) {
         setConfirmColor('#01d001')
         await updatePassword(newPassword.value)
         return
      }

      setConfirmColor('#fd2835')
   }

   return (
      <form className={styles.password} onSubmit={handleSubmit}>
         <div className={styles.inputWrapper}>
            <div className={styles.inputName}>New Password</div>
            <Input
               style={{
                  textAlign: 'left',
                  padding: '10px',
                  width: '100%',
               }}
               placeholder={'Enter a new password'}
               type={'text'}
               disabled={data.providerId === 'google.com'}
            />
         </div>
         <div className={styles.inputWrapper}>
            <div className={styles.inputName}>Confirm New Password</div>
            <Input
               style={{
                  textAlign: 'left',
                  padding: '10px',
                  width: '100%',
                  borderColor: confirmColor,
               }}
               placeholder={'Confirm your new password'}
               type={'text'}
               disabled={data.providerId === 'google.com'}
            />
            <div className={styles.inputNote}>
               {data.providerId === 'google.com'
                  ? 'You cannot change your password because you are registered with Google.'
                  : 'Please enter a password longer than 6 characters.'}
            </div>
         </div>
         <Button
            color={'blue'}
            style={{ width: '150px' }}
            disabled={data.providerId === 'google.com'}
         >
            Update Password
         </Button>
      </form>
   )
}

export default Password
