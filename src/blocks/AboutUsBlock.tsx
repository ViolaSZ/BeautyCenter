import PageBlock from "../components/PageBlock";
import Slider from "../components/Slider";
import './AboutUsBlock.css';

function AboutUsBlock(){
    return (
        <PageBlock>
            <div className="AboutUsBlock">
                <Slider />

                <div className="body">
                    <h3 className="header">About us</h3>
                    <p className="text lead">Every day we open the doors of our beauty salon in order to give our clients the pleasure of being beautiful! Our mood can depend on how we look, so sometimes you want to completely transform. Whatever your desires, they can be realized in our beauty salon. We will not only be able to transform your appearance at will, but also create your unique appearance and improve your body. Modern equipment and high quality products will help us achieve the perfect result! You will be 100% satisfied with the quality of the services provided! Comfortable atmosphere, peace and coziness, friendly staff, high quality service are the hallmark of our salon, which will help you relax and forget about the bustle of the city and problems, and leave the salon completely transformed.</p>
                </div>
            </div>
        </PageBlock>
    );
}

export default AboutUsBlock;