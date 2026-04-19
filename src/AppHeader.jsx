import logoHeader from '../dc-comics-1/img/dc-logo.png'
export default function AppHeader() {

    return (
        <header>
            <img src={logoHeader} alt="" />
            <nav>
                <a href="#">CHARACTERS</a>
                <a href="#" className="nav-link">COMICS</a>
                <a href="#">MOVIES</a>
                <a href="#">TV</a>
                <a href="#">GAMES</a>
                <a href="#">COLLECTIBLES</a>
                <a href="#">VIDEOS</a>
                <a href="#">FANS</a>
                <a href="#">NEWS</a>
                <a href="#">SHOP</a>
            </nav>
        </header>
    )
}