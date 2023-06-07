import { Outlet } from 'react-router-dom'
import Header from '../Components/ShereComponent/Header/Footer/Header'
import Footer from '../Components/ShereComponent/Header/Footer/Footer'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}

export default Main
