import React from "react";
import Bg from "./Bg.jpg";
import Image1 from "./Image1.jpg";
import Image2 from "./Image2.jpg";
import Image3 from "./Image3.jpg";
import Image4 from "./Image4.jpg";
import Image5 from "./Image5.jpg";
import Image6 from "./Image6.jpg";


function Home() {
    return (
        <div>
            <div
                className=" main bg-light h-5 mt-3"
                style={{
                    backgroundImage: `url(${Bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                }}
            >
                <h1 style={{
                    marginLeft: '160px',
                    paddingTop: '480px'
                }} className=" text-white">-EPICTURE</h1>
                <p className="text-light" style={{
                    marginLeft: '160px'
                }}>A WORLD OF BENEFITS DESIGNED TO INDULGE </p>
            </div>

            {/* Ambiance */}

            <div className="fs-2">
                <center className="m-3">
                    - AMBIANCE -
                </center>
            </div>
            <div className=" container-fluid row">
                {/* Card 1 */}
                <div className="col-sm-4">
                    <div className="card">
                        <img
                            src={Image1}
                            className="card-img-top"
                            width="100%"
                            alt=""
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-secondary">- COMPLIMENTARY ONE NIGHT STAY</h5>
                            <p className="card-text">
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-sm-4">
                    <div className="card">
                        <img
                            src={Image2}
                            className="card-img-top"
                            width="100%"
                            alt=""
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-secondary">- COMPLIMENTARY SET MEAL FOR TWO</h5>
                            <p className="card-text">
                               
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-sm-4">
                    <div className="card">
                        <img
                            src={Image3}
                            className="card-img-top"
                            width="100%"
                            alt=""
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-secondary">- 25% SAVINGS ON FOOD & BEVERAGE</h5>
                            <p className="card-text">
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fs-2">
                <center className="m-3">
                    - FOOD -
                </center>
            </div>

            {/* Food */}

            <div className=" container-fluid row">
                {/* Card 1 */}
                <div className="col-sm-4">
                    <div className="card">
                        <img
                            src={Image4}
                            className="card-img-top"
                            width="100%"
                            alt=""
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-secondary">- 25% SAVINGS ON QMIN</h5>
                            <p className="card-text">
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-sm-4">
                    <div className="card">
                        <img
                            src={Image5}
                            className="card-img-top"
                            width="100%"
                            alt=""
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-secondary">- ACCESS TO POOL WITH SET LUNCH & WINE AT SPECIAL PRICE</h5>
                            <p className="card-text">
                               
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-sm-4">
                    <div className="card">
                        <img
                            src={Image6}
                            className="card-img-top"
                            width="100%"
                            alt=""
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-secondary">- ADD-ON CARD FOR DOUBLE BENEFITS</h5>
                            <p className="card-text">
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
