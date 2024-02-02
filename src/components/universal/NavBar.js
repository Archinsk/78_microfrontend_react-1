import './NavBar.css';
import NavBarBrand from './NavBarBrand'
import Nav from './Nav'

export default function NavBar() {
    return (
        <nav class="navbar" data-bs-theme="dark" >
            <NavBarBrand />
            <Nav />
        </nav>
    )
}