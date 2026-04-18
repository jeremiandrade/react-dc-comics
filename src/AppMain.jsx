

import logoDigiComics from '../dc-comics-1/img/buy-comics-digital-comics.png';
import logoMerchandise from '../dc-comics-1/img/buy-comics-merchandise.png';
import logoShop from '../dc-comics-1/img/buy-comics-shop-locator.png';
import logoSub from '../dc-comics-1/img/buy-comics-subscriptions.png';
import logoVisa from '../dc-comics-1/img/buy-dc-power-visa.svg';

export default function AppMain() {

    return (
        <main>
            <p>Content goes here </p>
            <div className='img'>
                <div>
                    <img src={logoDigiComics} alt="loghi" />
                    <h4 className='info'>DIGITAL COMICS</h4>
                </div>
                <div><img src={logoMerchandise} alt="loghi" />
                    <h4 className='info'>DC MERCHANDISE</h4>
                </div>
                <div>
                    <img src={logoSub} alt="loghi" />
                    <h4 className='info'>SUBSCRIPTION</h4>
                </div>

                <div>
                    <img src={logoShop} alt="loghi" />
                    <h4 className='info'>COMIC SHOP LOCATOR</h4>
                </div>
                <div>
                    <img src={logoVisa} alt="loghi" />
                    <h4 className='info'>DC POWER VISA</h4>
                </div>
            </div>

        </main>
    )
}
