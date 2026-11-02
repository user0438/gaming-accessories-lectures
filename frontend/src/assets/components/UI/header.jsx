import logoImg from '../assets/logo.png';
import Button from './UI/button'
 
function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src= {logoImg} alt="Gaming Accessories" />
            </div>
            <Button type="button" textOnly disabled>
                Warenkorb (0)
            </Button>
        </header>
    );
}
export default Header;
 