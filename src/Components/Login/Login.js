import { Link } from 'react-router-dom';
import styles from './Login.module.css';


const Login = () => {
    const handleSubmit = ()=>{

    }
    return (
        <div className={`${styles.container} container-fluid `}>
               <div className={`${styles.loginWrapper}`}>
               <h1 className={`${styles.heading}`}>Login</h1>
               
                <form className={`${styles.loginform} d-flex flex-column align-items-center`} onSubmit={handleSubmit}>
                    <label for="email" className={`${styles.label1}`}>Email</label>
                    <input id='email' type='email' placeholder='Enter email' className={`${styles.input}`}/>
                    <label for="password"  className={`${styles.label2}`}>Password</label>
                    <input id='password' type='password' placeholder='Enter password' className={`${styles.input}`}/>
                    <button className={`${styles.btn}`}>Login</button>
                </form>
                <p className={`text-end ${styles.signupLink}`}>or Sign-Up Instead? <Link to='/signup' className={`${styles.signUp}`}>Sign Up</Link></p>
               </div>
        </div>
    )
}
export default Login;

