import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { carrousel, pStyle } from './style/Home';
import Icon from './Icon';

class Home extends Component {
    render() {
        return (
            <>
             <div className='mobile-home'>
                <Icon/>
                 <h2>Homey</h2>
             </div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carrousel.img1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carrousel.img2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carrousel.img3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <p style={pStyle}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </>
        )
    }
}

export default Home;