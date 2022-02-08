import React from 'react';

//Images
import OrTech from "./Images/OrTech.png"
import banner from "./Images/banner.png"
import blacktech from "./Images/blacktech.jpg"
import black2tech from "./Images/black2tech.jpeg"
import blckwmn from "./Images/blckwmn.jpeg"
import woman3 from "./Images/woman3.jpeg"
import updatedLogo from "./Images/updatedLogo.png"
import OrTech2 from "./Images/OrTech2.png"
import homeBanner from "./Images/homeBanner.png"
import homeBanner2 from "./Images/homeBanner2.png"
import homeBanner3 from "./Images/homeBanner3.png"

//CSS
import "./styles.css"

const Home = () => {
    return (
        <div className='parent'>
            <div className='container'>

                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>


                    <div className='carousel-container'>
                    {/* Carousel Image 1 */}
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={homeBanner} className="img-fluid d-block w-100 caro-imgs" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>


                        {/* Carousel Image 2 */}
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={homeBanner2} className="img-fluid d-block w-100 caro-imgs" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>


                        {/* Carousel Image 3 */}
                        <div className="carousel-item" data-bs-interval="2000"> 
                            <img src={homeBanner3} className="img-fluid d-block w-100 caro-imgs" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
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
                


                {/* Bootstrap Card boxes */}
                <div className='image-box'>
                    <div className='child-box'>

               
                        <div className="card info-cards border-primary">
                            <img className="card-img-top card-image" src={black2tech} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Website Packages</h5>
                                <p className="card-text">We offer various website packages for both big and small companies.</p>
                                <a href="#" className="btn btn-primary">View Packages</a>
                            </div>
                        </div>

                        <div className="card info-cards border-primary">
                            <img className="card-img-top card-image" src={blacktech} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Careers at OrTech</h5>
                                <p className="card-text"> Here at OrTech we are always looking for innovative minds to help us create a more inclusive and successful company.</p>
                                <a href="#" className="btn btn-primary">View Careers</a>
                            </div>
                        </div>

                        <div className="card info-cards border-primary">
                            <img className="card-img-top card-image" src={woman3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Our Mission</h5>
                                <p className="card-text">Our mission at OrTech is to help businesses create innovative user friendly websites that assist in achieving their goals.</p>
                                <a href="#" className="btn btn-primary">View Our Mission</a>
                            </div>
                        </div>
                    
                        <div className="card info-cards border-primary">
                            <img className="card-img-top card-image" src={OrTech2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Contact Us</h5>
                                <p className="card-text">We are an online based tech company that is accessible by both email and phone. </p>
                                <a href="#" className="btn btn-primary">Contact Us</a>
                            </div>
                        </div>


                  
                    

                </div>

            </div>
            </div>
        </div>
    );
}

export default Home;
