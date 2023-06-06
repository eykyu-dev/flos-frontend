import NavBar from './components/navbar'
import HomeBlock from './components/homeblock'
import './App.css'
import BestSellers from './components/bestsellers'
import AboutUs from './components/aboutus'


function App() {

  return (
    <div className='home-page' >
      <NavBar></NavBar>
      <HomeBlock></HomeBlock>
      <hr></hr>
      <BestSellers></BestSellers>
      <hr></hr>
      <AboutUs></AboutUs>
    </div>
  )
}

export default App
