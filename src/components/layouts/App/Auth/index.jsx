import './styles.scss'
import logo from 'assets/images/logo.svg'
import Button from 'components/shared/Button'
import { IconBrandGoogle } from '@tabler/icons-react'
import Input from 'components/shared/Input'
import { useNavigate } from 'react-router-dom'
import Auth, { GoogleAuth } from 'db/auth'

function AuthForm() {
   const navigate = useNavigate()

   const handleSubmit = (event) => {
      event.preventDefault()
      const [email, password] = [event.target[1].value, event.target[2].value]

      if (event.nativeEvent.submitter.id === 'password') {
         if (email.length !== 0 && password.length !== 0)
            Auth(email, password, navigate)
         return
      }

      GoogleAuth(navigate)
   }

   return (
      <form className={'auth-form'} onSubmit={handleSubmit}>
         <img src={logo} alt={'logo'} id={'auth-form-logo'} />
         <p className={'auth-form-note'}>Login with email or google account</p>
         <Button
            type={'primary'}
            id={'google'}
            style={{
               color: '#fff',
               border: 'none',
               width: '260px',
               height: '40px',
            }}
         >
            <IconBrandGoogle width={14} stroke={3} style={{ color: '#fff' }} />
            Continue with Google
         </Button>
         <hr className={'auth-form-break-line'} />
         <Input
            type={'email'}
            placeholder={'Email'}
            style={{
               textAlign: 'center',
               padding: '10px',
               width: '260px',
               height: '40px',
            }}
         />
         <Input
            type={'password'}
            placeholder={'Password'}
            style={{
               textAlign: 'center',
               padding: '10px',
               width: '260px',
               height: '40px',
            }}
         />
         <Button id={'password'} style={{ width: '260px', height: '40px' }}>
            Continue
         </Button>
      </form>
   )
}

export default AuthForm
