import './MainContent.css';
import MainContentFormDetails from './MainContentFormDetails'

export default function MainContent(props) {
    return (
        <main class="main-content">
            <MainContentFormDetails {...props} />
        </main>
    )
}