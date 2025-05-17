import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <section id="Contact" className="contact section-padding">
            <div className="container border border-2">
                <div className="row">
                    <div className="col-md-12">
                    <div className="fs-2">
                <center className="m-3">
                    - CONTACT -
                </center>
            </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-md-12 p-0 pt-1 pb-4">
                            <form action="#" className="bg-light p-4 m-auto">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" required placeholder="Your full name.." />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" required placeholder="Your Email Here.." />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-1">
                                            <textarea rows="2" required className="form-control" placeholder="Your Query Here.."></textarea>
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                            <button className="btn btn-warning ms-4">Send Now</button>
                        </div>
                    </div>
                </div>
            </div><br />
        </section>
    );
};

export default Contact;
