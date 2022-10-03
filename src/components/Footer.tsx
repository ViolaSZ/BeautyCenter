import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <span>Connect us: <span className='highlighted'>+375(29)1920367</span>  or <span className='highlighted'>23-87-09</span></span>
            <span className='followus'>Follow us:</span>
            <a href="https://www.facebook.com/groups/528871028224409/?ref=share" className="fa fa-facebook"></a>
            <a href="https://twitter.com/salon_magazine" className="fa fa-twitter"></a>
            <a href="https://instagram.com/fiji.gomel?igshid=YmMyMTA2M2Y=" className="fa fa-instagram"></a>
        </div>
    );
}

export default Footer;