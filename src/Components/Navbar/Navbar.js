import styles from './Navbar.module.css';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Navbar = () => {
 const [user,setUser] = useState(null);

  const handdleLogin = ()=>{
    
  }
  
    return (
        <nav className={`navbar navbar-expand-lg  ${styles.nav}`}>
            <div className={`container d-flex justify-content-between`}>
                <a className={`navbar-brand ${styles.navbarBrand}`} href="#">Navbar</a>
                {user ? "" :<form className={`d-flex justify-content-end mt-2 nav-item`} role="search">
                  <Link to='/signin'>  <button onClick={handdleLogin} className={`btn ${styles.btn}`} type="submit">Login</button></Link>
                </form>}
                
            </div>
        </nav>
    )
}
export default Navbar;