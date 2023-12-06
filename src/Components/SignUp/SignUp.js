import { useState } from 'react';
import styles from './SignUp.module.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [values, setValues] = useState({
        name: "", email: "", password: ""
    });
    // function for authentication
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Trim spaces in the email
        const email = values.email.trim();

        // Basic email validation
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
            alert("Please enter a valid email address.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, values.password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: values.name
            });

            console.log("User created and profile updated:", user);
        } catch (error) {
            console.error("Error creating user:", error.message);
            alert(error.message);
        }
    }
    return (
        <div className={`${styles.container} container-fluid `}>
            <div className={`${styles.loginWrapper}`}>
                <h1 className={`${styles.heading}`}>Sign Up</h1>

                <form className={`${styles.loginform} d-flex flex-column align-items-center`} onSubmit={handleSubmit}>
                    <label for="name" className={`${styles.label0}`}>Name</label>
                    <input
                        onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
                        id='name'
                        type='text'
                        placeholder='Enter Name' className={`${styles.input}`} required />
                    <label for="email" className={`${styles.label1}`}>Email</label>
                    <input
                        onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                        id='email'
                        type='email' placeholder='Enter email' className={`${styles.input}`} required />
                    <label for="password" className={`${styles.label2}`}>Password</label>
                    <input
                        onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
                        id='password'
                        type='password'
                        placeholder='Enter password' className={`${styles.input}`} required />
                    <button className={`${styles.btn}`}>Sign Up</button>
                </form>
                <p className={`text-end ${styles.signupLink}`}>or already have a account? <Link to='/signin' className={`${styles.signUp}`}>Sign In</Link></p>
            </div>
        </div>
    )
}
export default SignUp;