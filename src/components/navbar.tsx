import './navbar.css'

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='logo'>flos</div>
      <div className='header-buttons'>
        <button>Home</button>
        <button>Products</button>
        <button>Contacts</button>
      </div>
      <button className='cart-button'>Cart</button>
    </div>
  )
}

export default NavBar
