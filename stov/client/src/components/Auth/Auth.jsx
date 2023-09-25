import React,{useState} from 'react'
import logo from '../../assets/stack-overflow-icon.png'
import AboutAuth from './AboutAuth'
import "./Auth.css"


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
  return (
    <section className='auth-section'>
        {
            isSignup && <AboutAuth/>
        }
        <div className='auth-container-2'>
            { !isSignup && <img src={logo} alt='stack overflow' height='50px' className='login-logo' /> }
            <form>
                {
                    isSignup && (
                        <label htmlFor='name'> 
                            <h4>Display Name</h4>
                            <input type='text' id='name' name='name'></input>
                        </label>
                    )
                }
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type='email' name='email'></input>
                </label>
                <label htmlFor='password'>
                    <div style={{display : "flex", justifyContent : 'space-between'}}>
                        <h4>Password</h4>
                        {!isSignup && <p style={{fontSize:"13px", color:"#007ac6"}}>Forgot Password?</p>}
                    </div>
                    <input type='password' name='password' id='password'></input>
                    {isSignup && 
                        <p style={{color:"#666767",fontSize:"13px"}}>
                        Password must contain at least eight <br/> 
                        characters, including at least 1 letter and 1 <br/> 
                        number</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                            <input type='checkbox' id='check'></input>
                            <p>Opt-in to recieve occasional, <br/> 
                            product updates, user research invitations, <br/> 
                            copany announcements and digests. </p>
                        </label>
                    )
                }
                <button type='submit' className='auth-btn'  >{ isSignup ? 'Signup' : 'Login'}</button>
                {
                    isSignup && (
                        <p style={{color:"#666767",fontSize:"13px"}}>
                            By clicking signup, you agree to our <br/>
                            <span style={{color:"#007ac6"}}>terms of service</span>, 
                            <span style={{color:"#007ac6"}}>privacy policy</span> and 
                            <span style={{color:"#007ac6"}}>cookie policy</span>
                        </p>
                    )
                }
            </form>
            <p>
                {isSignup ? 'Already have an account' : "don't have an account?"}
                <button type='button' className='handle-switch-btn' onClick={()=>{setIsSignup(!isSignup)}} >{ isSignup ? 'Login' : 'Signup'}</button>
            </p>
        </div>
          
    </section>
  )
}

export default Auth
