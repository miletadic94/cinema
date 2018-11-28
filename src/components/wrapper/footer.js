import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <hr className="light" />
                            <img src="" />
                            <p>
                                <i className="fa fa-phone mr-2" />
                                060/094-16-03
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-2" />
                                mile.tadic.94@gmail.com
                                </p>
                            <p>
                                <i className="fa fa-map-marker mr-2" />
                                Rumenacka 5
                                <br />
                                Novi Sad, Srbija, 21000
                                </p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light" />
                            <h5>Radno vreme:</h5>
                            <p>Radni dani: 08 - 22</p>
                            <p>Subota i nedelja: 08-24</p>
                        </div>
                        <div className="col-md-4 social padding">
                            <hr className="light" />
                            <h5>Social media</h5>
                            <a href="#"><i className="fab fa-facebook"/></a>
                            <a href="#"><i className="fab fa-twitter"/></a>
                            <a href="#"><i className="fab fa-google-plus-g"/></a>
                            <a href="#"><i className="fab fa-instagram"/></a>
                            <a href="#"><i className="fab fa-youtube"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;