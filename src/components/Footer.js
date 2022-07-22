import CartWidget from "./CartWidget"
import Nav from "./Nav"


const Footer = () => {
    return(
        <footer id="footer">
            <a href="#">Contacto</a>
            <CartWidget/>
            <Nav type="footer"/>
        </footer>
    )
}

export default Footer