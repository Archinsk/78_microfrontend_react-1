import './Header.css';
import NavBar from './universal/NavBar'

export default function Header() {
    return (
        <header class="header">
            <div class="container-fluid">
                <NavBar />
            </div>
        </header>
    )
}