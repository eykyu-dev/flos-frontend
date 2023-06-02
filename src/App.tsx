import NavBar from './components/navbar'
import HomeBlock from './components/homeblock'
import './App.css'
import ItemShowcase from './components/itemshowcase'


function App() {

  return (
    <div className='home-page' >
      <NavBar></NavBar>
      <HomeBlock></HomeBlock>
      <hr></hr>
      <ItemShowcase></ItemShowcase>
    </div>
  )
}

export default App
