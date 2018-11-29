import React from 'react';
import slika from "../../assets/img/batman.jpg"

class SlideShow extends React.Component {

    state = {
        current: 0,
    }

    slike = [
        1, 2, 3
    ]

    componentDidMount = () => {
        setInterval(() => {
            const { current } = this.state
            this.showSlide(current + 1)
        }, 10000)
    }

    showSlide = (index) => {
        if (index > this.slike.length - 1) {
            index = 0
        } else if (index < 0) {
            index = this.slike.length - 1
        }
        this.setState({
            current: index
        })
    }

    handleMoveSlider = (value) => {
        const { current } = this.state
        this.showSlide(current + value)
    }

    render() {
        const { current } = this.state
        return (
            <div className="carousel slide m-4">
                <ul className="carousel-indicators">
                    {
                        this.slike.map((item, index) =>
                            <li
                                key={index}
                                className={index === current ? "active" : ""}
                                onClick={this.showSlide.bind(this, index)}
                            />
                        )
                    }
                </ul>
                <div className="carousel-inner fluid">
                    {
                        this.slike.map((item, index) =>
                            <div key={index} className={`carousel-item ${index === current ? "active" : ""}`}>
                                <img src={slika} className="img-fluid" />
                                <div className="carousel-caption">
                                    <button type="button" className="btn btn-outline-light btn-md">
                                        Find more
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    <a onClick={this.handleMoveSlider.bind(this, -1)} className="carousel-control-prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a onClick={this.handleMoveSlider.bind(this, 1)} className="carousel-control-next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default SlideShow;