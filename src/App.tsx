import NavBar from './components/navbar'
import HomeBlock from './components/homeblock'
import './App.css'
import ItemShowcase from './components/itemshowcase'
import BestSellers from './components/bestsellers'


function App() {

  return (
    <div className='home-page' >
      <NavBar></NavBar>
      <HomeBlock></HomeBlock>
      <hr></hr>
      <BestSellers></BestSellers>
    </div>
  )
}

export default App
