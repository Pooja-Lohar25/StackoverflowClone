import React,{useState} from 'react'
import logo from '../../assets/stack-overflow.svg'
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
  return (
    <section className='auth-section'>
        <div className='auth-container'>
            { !isSignup && <img src={logo} alt='stack overflow' height='200px' className='login-logo' /> }
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
                    <div>
                        <h4>Password</h4>
                        {!isSignup && <h4>Forgot Password?</h4>}
                    </div>
                    <input type='password' name='password' id='password'></input>
                </label>
                <button type='submit' className='auth-btn'  >{ isSignup ? 'Signup' : 'Login'}</button>
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
