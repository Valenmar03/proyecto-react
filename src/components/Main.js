const Main = (props) => {
    console.log(props)
    return(
        <main id="main">
            <p>Nombre: {props.nombre}</p>
            <p>Edad: {props.edad}</p>
            <p>Nacionalidad: {props.nacionalidad}</p>
        </main>
    )
}
export default Main;