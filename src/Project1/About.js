import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image7 from "./Image7.jpg";

const About = () => {
    return (
        <section id="About" className="bg-light">
            <div className="fs-2">
                <center className="m-3">
                    - ABOUT -
                </center>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <img
                        src={Image7}
                        width="100%"
                        alt=""
                        style={{
                            marginLeft:"150px"
                        }}
                    />
                </div>
                <div className='col-sm-8' style={{
                    width:"50%",
                    marginLeft:"150px",
                    marginTop:"20px"
                }}>
                    <p>Taj, India’s Strongest Brand across industries and sectors*, is an iconic hospitality brand from the Indian Hotels Company Limited. The brand continues to be one of the most revered and loved hospitality brands with a legacy of over 116 years of impeccable service and genuine warmth. Embodying the spirit of “Tajness”, authentic original palaces, landmark hotels, idyllic resorts and natural safari lodges interpret the tradition of hospitality in a refreshingly modern way to create unique experiences and lifelong memories.</p>

                   <center> <button className='btn btn-warning mt-4'>Know More</button></center>
                </div>
            </div><br />

        </section>
    );
};

export default About;
