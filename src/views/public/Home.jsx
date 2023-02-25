import Layouts from 'components/layouts'
import Modal from 'components/shared/Modal'
import AuthForm from 'components/layouts/App/Auth'

function ModalWrapper() {
   return (
      <Modal style={{ width: '350px', height: 'max-content' }}>
         <AuthForm />
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
