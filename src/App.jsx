import Navbar from './components/Navbar'
import Home from './components/Home'
import Mission from './components/Mission'
import Empower from './components/Empower'
import Ourteam from './components/Ourteam'
import Ourvision from './components/Ourvision'
import DonationImpact from './components/DonationImpact'
import DonateSection from './components/DonateSection'
import Footer from './components/Footer'

function App() {

  return (
    <div className='mx-8'>
      <Navbar />
      <Home />
      <Mission />
      <Empower />
      <Ourteam />
      <Ourvision />
      <DonationImpact />
      <DonateSection />
      <Footer /> 
    </div>
  )
}

export default App
