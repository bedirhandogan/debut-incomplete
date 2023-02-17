import Layouts from 'components/layouts'
import Modal from 'components/shared/Modal'

function Home() {
   const { Navbar } = Layouts.Home

   return (
      <div>
         <Navbar />
         <Modal size={{ width: 350, height: 450 }}>sadds</Modal>
      </div>
   )
}

export default Home
