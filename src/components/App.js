import Header from './NavBar';
import Main from './Main'
import Footer from './Footer'


const App = () => {
    return (
    <>
        <Header/>
        <Main nombre="Valentin" edad="18" nacionalidad="Argentina"/>
        <Footer/>
    </>
)}

export default App;