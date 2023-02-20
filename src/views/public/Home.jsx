import Layouts from 'components/layouts'
import Modal from 'components/shared/Modal'
import Input from 'components/shared/Input'
import Button from 'components/shared/Button'
import logo from 'assets/images/logo.svg'
import { IconBrandGoogle } from '@tabler/icons-react'
import { Auth, AuthGoogle } from 'api'
import { useNavigate } from 'react-router-dom'

function ModalWrapper() {
   const navigate = useNavigate()

   const handleSubmit = (event) => {
      event.preventDefault()

      const [email, password] = [event.target[1].value, event.target[2].value]

      if (email.length !== 0 && password.length !== 0) {
         Auth(email, password, navigate)
         return
      }

      AuthGoogle()
   }

   return (
      <Modal style={{ width: '350px', height: 'max-content' }}>
         <form className={'auth'} onSubmit={handleSubmit}>
            <img src={logo} alt={'logo'} />
            <p>Login with email or google account</p>
            <Button
               color={'red'}
               style={{
                  color: '#fff',
                  border: 'none',
                  width: '260px',
                  height: '40px',
               }}
            >
               <IconBrandGoogle
                  width={14}
                  stroke={3}
                  style={{ color: '#fff' }}
               />
               Continue with Google
            </Button>
            <hr />
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
            <Button style={{ width: '260px', height: '40px' }}>Continue</Button>
         </form>
      </Modal>
   )
}

function Home() {
   const { Navbar } = Layouts.Home

   return (
      <div>
         <Navbar />
         <ModalWrapper />
      </div>
   )
}

export default Home
