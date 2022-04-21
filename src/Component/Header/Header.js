import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] =useAuthState(auth);
    console.log(user)

    const handleSingout =()=>{
        signOut(auth)
    }
    // const handlereset =()=>{
    //     // useSendPasswordResetEmail(auth)
    // }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='navbar-brand fw-bold' to='/single'>History</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navbar-brand fw-bold' to='fmaly'>About</Link>
                            </li>
                        </ul>
                        <div>
                            {/* log in modal----------------------------------------------- */}
                           {
                               user?   <button onClick={handleSingout} className='navbar-brand fw-bold border-bottom'>Log Out</button> : <Link className='navbar-brand fw-bold border-bottom' to='/login'>Log In</Link>
                           }
                             
                            <Link className='navbar-brand fw-bold border-bottom' to='/singup'>Sing Up</Link>
                           
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;