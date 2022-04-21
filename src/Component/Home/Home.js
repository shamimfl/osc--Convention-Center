import React from 'react';
import Main from '../Main/Main';

const Home = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?size=626&ext=jpg&ga=GA1.1.32728771.1649750064" className="d-block w-100 h-[500px]" alt="..." />
                        <div className="carousel-caption  d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            <button  className='fw-bold btn btn-light text-dark'>Book Now</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?t=st=1649785147~exp=1649785747~hmac=975bf2c2f86cd7746394b512b0d1d727ce7a29d10f10fa27bf26e9c59285d62b&w=740" className="d-block w-100 h-[500px]" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                            <button  className='fw-bold btn btn-light text-dark'>Book Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img  src="https://img.freepik.com/free-photo/beautiful-sky-landscape-silhouette-moon_1203-4909.jpg?w=740" className="d-block  w-100 h-[500px]" alt="..." />
                        <div className="carousel-caption  d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            <button  className='fw-bold btn btn-light text-dark'>Book Now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Main></Main>
        </div>
    );
};

export default Home;