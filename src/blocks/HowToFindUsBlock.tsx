import PageBlock from "../components/PageBlock";
import './HowToFindUsBlock.css';

function HowToFindUsBlock(){
    return (
        <PageBlock>
            <div className="HowToFindUsBlock">
                <div className="body">
                    <h3 className="header">How to find us</h3>
                    <h5>Adress</h5>
                    <p className="text lead">Karpovicha street, 28</p>
                    <h5>Transport</h5>
                    <li className="text lead">16 bus - Railway station</li>
                    <li className="text lead">15 bus - Railway station</li>
                    <li className="text lead">20 bus - Railway station</li>
                    <li className="text lead">21 trolleybus - Railway station</li>
                    <li className="text lead">16 trolleybus - Railway station</li>
                    <li className="text lead">19 trolleybus - Railway station</li>
                </div>

                <div className="map">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1ZUMOkRw1nNvsgNJ9TLPNloHCTgFhUxGO&hl=ru&ehbc=2E312F" width="640" height="480"></iframe>
                </div>                
            </div>
        </PageBlock>
    );
}

export default HowToFindUsBlock;