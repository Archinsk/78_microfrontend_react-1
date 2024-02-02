import './Nav.css';
import NavLink from './NavLink';
export default function Nav() {
    return (
        <nav class="nav">
            <NavLink format="svg" path="icons/" name="circle" />
            <NavLink />
            <NavLink format="svg" path="icons/" name="ui-checks-grid" />
            <NavLink format="svg" path="icons/" name="circle" />
            <NavLink />
        </nav>
    )
}