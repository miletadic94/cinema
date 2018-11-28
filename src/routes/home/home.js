import React from 'react'
import SlideShow from '../../components/slideShow';
import threeD from '../../assets/img/threeD.jpg'
import snacks from '../../assets/img/snacks.jpg'
import retro from '../../assets/img/retro.png';
import PromoCard from '../../components/cards/promoCard';

class Home extends React.Component {

    handleDropdown = () => {
    }


    render() {
        return (
            <div>
                <SlideShow />
                <div className="card-group m-4">
                    <PromoCard picture={threeD} />
                    <PromoCard picture={snacks} />
                    <PromoCard picture={retro}/>
                </div>
            </div>
        )
    }
}


export default Home