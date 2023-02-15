import Introduction from './App/Introduction'
import Navbar from './App/Navbar'
import Sidebar from './App/Sidebar'

const Layouts = {
   App: {
      Introduction: () => <Introduction />,
      Navbar: () => <Navbar />,
      Sidebar: () => <Sidebar />,
   },
}

export default Layouts
