import React from 'react';

//Images
import OrTech from "./Images/OrTech.png"
import banner from "./Images/banner.png"
import blacktech from "./Images/blacktech.jpg"
import black2tech from "./Images/black2tech.jpeg"
import blckwmn from "./Images/blckwmn.jpeg"
import woman from "./Images/woman.jpeg"
import woman2 from "./Images/woman2.jpeg"
import woman3 from "./Images/woman3.jpeg"
import updatedLogo from "./Images/updatedLogo.png"
import OrTech2 from "./Images/OrTech2.png"

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
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={woman} className=" d-block w-100 mx-auto .img-thumbnail" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={blckwmn} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                
                            </div>
                        </div>
                        <div className="carousel-item caro-imgs">
                            <img src={OrTech2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
        
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
                <div className='image-box d-flex flex-row'>
                    <div className='child-box'>
                        <div className="card ">
                            <img className="card-img-top" src={black2tech} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card ">
                            <img className="card-img-top" src={blacktech} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card ">
                            <img className="card-img-top" src={woman2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card ">
                            <img className="card-img-top" src={woman3} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>



                    </div>
                    {/* ^ Closes Child Container  */}

                </div>

            </div>


        </div>
    );
}

export default Home;
