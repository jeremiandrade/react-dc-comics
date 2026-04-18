
import imgFb from '../dc-comics-1/img/footer-facebook.png';
import imgScope from '../dc-comics-1/img/footer-periscope.png';
import imgYt from '../dc-comics-1/img/footer-youtube.png';
import imgP from '../dc-comics-1/img/footer-pinterest.png';
import imgTwitter from '../dc-comics-1/img/footer-twitter.png';




export default function AppFooter() {

    return (
        <footer>

            <div>
                <ul>
                    <h2>DC COMICS</h2>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>

                    <h2>SHOP</h2>
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC Collectibles</a></li>
                </ul>

                <ul>
                    <h2>DC</h2>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Privacy Policy (News)</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Advertising</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Talent Workshops</a></li>
                    <li><a href="#">CPSC Certificates</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Shop Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <ul>
                    <h2>SITES</h2>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">MAD Magazines</a></li>
                    <li><a href="#">DC Kids</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">DC Power Visa</a></li>
                </ul>


            </div>
            <div
                className='about'>
                <button>SIGN-UP-NOW</button>
            </div>

            <div className='social'>
                <h3>FOLLOW US</h3>
                <img src={imgFb} alt="Facebook" />
                <img src={imgTwitter} alt="Twitter" />
                <img src={imgYt} alt="YouTube" />
                <img src={imgP} alt="pinterest" />

            </div>


        </footer>
    )
}
