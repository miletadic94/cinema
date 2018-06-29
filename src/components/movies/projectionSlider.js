import React from 'react'
import AliceCarousel from 'react-alice-carousel'

class ProjectionsSlider extends React.Component {
    responsive = {
        1024: { items: 5}
      };
      
      galleryItems() {
        return (
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <a key={i} href="#" className="btn btn-projection">
                <h3>17:30</h3> 
                <h5>16/03</h5> 
                <span>
                    <hr/>
                    <h5>350 Rsd</h5>
                    <strong>Sala:</strong>{i}
                </span>
            </a>
          ))
        )
      };
      
      render() {
        const items = this.galleryItems();
    
        return (
          <AliceCarousel
            items={items}
            duration={400}
            fadeOutAnimation={true}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            responsive={this.responsive}
            autoPlayActionDisabled={true}
            dotsDisabled={true}
          />
        );
      }
}



export default ProjectionsSlider