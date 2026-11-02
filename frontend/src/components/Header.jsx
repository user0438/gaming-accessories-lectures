import Button from "./UI/button";
import logoIMG from "../assets/logo.png";

function Header({}) {
    return(
        <header id='main-header'>

            <div id='title'>
                <img src={logoIMG} alt="Gaming Accessoirs" />
                <h1>Gaming Accessoirss</h1>
            </div>

            <nav aria-label='Hauptnavigation'>
                <Button type='button' textOnly disabled>
                    Warenkorb (0)
                </Button>
            </nav>

        </header>
    );
}

export default Header;