import NavBar from '../ShortComponents/NavBar';
import Footer from '../ShortComponents/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <header>
                {/* Navbar */}
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            {/* Main Section */}
            <main>
                <Outlet></Outlet>
            </main>
            {/* Footer Section */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;