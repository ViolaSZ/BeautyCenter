import { Carousel } from "react-bootstrap";
import './PromotionsBlock.css';
import sertificate from './sertificate.png';
import coloring from './coloring.jpg';
import booking from './booking.png';

function PromotionsBlock(){
    return (
        <div className="PromotionsBlock">
            <div className="carousel">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img"
                        src={sertificate}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text">Sertificate</h3>
                        <p className="text">We offer a certificate for the provision of services of our salon for a certain amount.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img"
                        src={coloring}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3 className="text2">Haircut ans coloring</h3>
                        <p className="text2">10% discount for haircut and color services.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 img"
                        src={booking}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 className="text">Booking</h3>
                        <p className="text">Booking in advance 5% discount.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <h2>Promotions:</h2>
                <li className="text lead">Sertificate - 20 BYN</li>
                <li className="text lead">Sertificate - 30 BYN</li>
                <li className="text lead">Sertificate - 50 BYN</li>
                <li className="text lead">Booking - 5% discount provided that booking was made no earlier than 2 weeks ago</li>
            </div>
        </div>
    );
}

export default PromotionsBlock;