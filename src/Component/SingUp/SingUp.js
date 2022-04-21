import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SingUp = () => {
    const navigate=useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);





if(user){
    navigate('/')
}



    const emailref =useRef('')
    const passwordref =useRef('')
    const userref =useRef('')

    const handleSubmit =e =>{
        e.preventDefault()
        const userName =userref.current.value;
        const email =emailref.current.value;
        const password =passwordref.current.value;
        createUserWithEmailAndPassword(email , password)
    }











    return (
        <div className="md:w-80 mt-10 shadow-lg mx-auto">
            <p className='font-bold p-2 font-mono '>Please Sing Up</p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Email">
                        User Name
                    </label>
                    <input ref={userref} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username" />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                       Email
                    </label>
                    <input ref={emailref} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>


                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input ref={passwordref} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <input type="submit" value="Sing Up" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                </div>
            </form>
        </div>
    );
};

export default SingUp;