import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hotel = ({hotel}) => {
    const {id, name,img,p}=hotel
    const navigate=useNavigate()

    const details =id =>{
        navigate(`/service/${id}`)
    }

    return (
        <div>
            <div className='p-5 shadow-2xl bg-white mt-5'>
                <img className='w-full ' src={img} alt="" />
                <p className='fw-bold text-center text-xl mt-5'>{name}</p>
                <p className='fw-bold mt-3'>{p}</p>
                <button onClick={()=> details (id)} className='fw-bold text-center bg-black px-3 py-1 rounded-tr-full mt-2 text-white'>See Details</button>
            </div>
        </div>
    );
};

export default Hotel;