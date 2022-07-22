import CartWidget from "./CartWidget"
import Nav from "./Nav"

//Para pasar props que no sean string se usan {}
//Ej.: <Nav test={true} o <Nav number={2}
const Header = () => {
    return (
        <header id="header">
            <CartWidget/>
            <Nav type="header" />
        </header>
    )
}

export default Header