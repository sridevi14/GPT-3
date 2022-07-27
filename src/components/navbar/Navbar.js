import React,{useState} from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';



const Menu = () => (
<>
<p><a href="#home">Home</a></p>
          <p><a href="#whatGPT-3">What  is GPT-3</a></p>
          <p><a href="#possibility">OpenAi</a></p>
          <p><a href="#features">case Studies</a></p>
          <p><a href="#blog">Library</a></p></>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (

    <div className='Navbar'>
      <div className='Navbar_links'>
        <div className='Navbar_links_logo'>
          <img src={logo} alt="img_logo"></img>
        </div>
        <div className="Navbar_links_container">
          <Menu/>
        </div>
        </div>
        <div className='Navbar_sign'>
          <p>Sign in</p>
          <button type="button">Sign Up</button>
        </div>

        <div className='Navbar_menu'>
          {
            toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/>
              :<RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='Navbar_menu_container scale-up-center'>
              <div className='Navbar_menu_container_links'>
                <Menu />
                <div className='Navbar_menu_container_links_sign'>
          <p>Sign in</p>
          <button type="button">Sign Up</button>
        </div>
              </div>
            </div>
          )}
        </div>
      
</div>


  )
}
 
export default Navbar;