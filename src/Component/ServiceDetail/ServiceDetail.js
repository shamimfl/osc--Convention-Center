import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {did} =useParams()
    return (
        <div>
            <h1>Room : {did}</h1>
            <Link to='/chakout'>
                <button className='mx-auto btn border-rose-500'> Chak out</button>
                 </Link>
        </div>
    );
};

export default ServiceDetail;