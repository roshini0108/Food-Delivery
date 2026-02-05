import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState('Login')

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>

                {/* Title + Close Button */}
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt='close'
                        className='close-icon'
                    />
                </div>

                {/* Input Fields */}
                <div className="login-popup-inputs">
                    {currState === 'Sign Up' && (
                        <input type='text' placeholder='Your name' required />
                    )}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>

                {/* Terms & Conditions only for Sign Up */}
                {currState === 'Sign Up' && (
                    <label className="login-popup-condition">
                        <input type='checkbox' required />
                        <span>By ordering, I accept the chef’s rules</span>
                    </label>
                )}

                {/* Action Button */}
                <button type="submit" className="login-popup-btn">
                    {currState === 'Sign Up' ? 'Add me to the menu' : 'Back on the menu'}
                </button>

                {/* Toggle Between Login & Signup */}
                <div className="login-popup-toggle">
                    {currState === 'Login' ? (
                        <p>Not in the menu yet? <span onClick={() => setCurrState('Sign Up')}>Join now</span></p>
                    ) : (
                        <p>Already in the menu? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                    )}
                </div>

            </form>
        </div>
    )
}

export default LoginPopup
