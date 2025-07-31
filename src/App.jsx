import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <h1>ABC Shop</h1>
        <ul>
          <li>
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
          </li>
          <li>
            <Link to="shop" style={{textDecoration: 'none', color: 'black'}}>Shop</Link>
          </li>
        </ul>
      </nav>
      <div className='hero'>
        <h1>Unlock your style today!</h1>
        <h2>Unlock your style today!</h2>
      </div>
      <img className='hero-img' src="./src/assets/hero-image-2.png" alt="" />
      <img className='hero-img' src="./src/assets/hero-image-2.png" alt="" />
    </>
  )
}

export default App
