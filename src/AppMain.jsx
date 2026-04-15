

import logoDigiComics from '../dc-comics-1/img/buy-comics-digital-comics.png';
import logoMerchandise from '../dc-comics-1/img/buy-comics-merchandise.png';
import logoShop from '../dc-comics-1/img/buy-comics-shop-locator.png';
import logoSub from '../dc-comics-1/img/buy-comics-subscriptions.png';
import logoVisa from '../dc-comics-1/img/buy-dc-power-visa.svg';

export default function AppMain() {

    return (
        <main>
            <p> Content goes here </p>
            <div>
                <img src={logoDigiComics} alt="loghi" />
                <img src={logoMerchandise} alt="loghi" />
                <img src={logoSub} alt="loghi" />
                <img src={logoShop} alt="loghi" />
                <img src={logoVisa} alt="loghi" />
            </div>
        </main>
    )
}