import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';

const Main = () => {
    const [hotel, setHotel] = useState([]);
    useEffect(() => {
        fetch('fakeHotel.json')
            .then(res => res.json())
            .then(data => setHotel(data))
    }, [])
    // console.log(hotel.name)
    return (
        <div >
            <h1 className='text-center text-black text-3xl mt-10'>Our Service</h1>
            <div className='md:grid grid-cols-3 gap-10 bg-slate-300'>
              {
                  hotel.map(hotel=> <Hotel key={hotel.id} hotel={hotel}></Hotel>)
              }
            </div>
        </div>
    );
};

export default Main;