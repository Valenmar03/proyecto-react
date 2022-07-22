const Nav = (tipo) => {
    console.log(tipo.type)
    if(tipo.type == "header"){
        return (
            <nav id="navbar-header">
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Carrito</a>
                <a href="#">Contacto</a>
            </nav>
        )
    }else if(tipo.type == "footer"){
        return(
            <nav id="navbar-footer">
                <a href="#">Inicio</a>
            </nav>
        )
    }
}

export default Nav