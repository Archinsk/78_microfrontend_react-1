import './NavLink.css';
import Icon from './Icon'
export default function NavLink(props) {
    if (props.format) {
        return (
            <a class="nav-link" href="#">
                <Icon {...props} />
                <span>NavLink</span>
            </a>
        )
    } else {
        return (
            <a class="nav-link" href="#">
                <span>NavLink</span>
            </a>
        )
    }
}
