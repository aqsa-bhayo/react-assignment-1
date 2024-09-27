import React from 'react'
import heroImg from './../../assets/heroImg.png'

const heroSection = () => {
    return (
        <div>
            <section>
                <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between mt-5">
                  
                    <div className="text-center text-lg-start mb-lg-0" style={{marginTop:'200px'}}>
                        <h1 className="fw-normal fs-md-2 fs-lg-1" style={{ color: '#364547', fontSize: '49px' }}>
                            Fair price ride
                        </h1>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <h1 className="fw-bold me-3 fs-md-2 fs-lg-1" style={{ color: '#364547', fontSize: '65px' }}>
                                Rent Our
                            </h1>
                            <h1 className="fw-bold fs-md-2 fs-lg-1" style={{ color: '#ef8d21', fontSize: '65px' }}>
                                Scooter
                            </h1>
                        </div>
                        <div>
                            <div className="responsive-text">
                                <p className="fs-6 fs-md-5 fs-lg-4">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    <span className="d-block"> 1500s, when an unknown printer took a galley of type and scrambled it to</span>
                                    <span className="d-block"> make a type specimen book.</span>
                                </p>
                            </div>

                        </div>





                    </div>

                    
                    <div className="text-center">
                        <img src={heroImg} alt="Scooter Ride" className="img-fluid" />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default heroSection
