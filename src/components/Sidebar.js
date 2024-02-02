import './Sidebar.css';
import SidebarFilter from './SidebarFilter'
import SidebarFormsList from './SidebarFormsList'

export default function Sidebar() {
    return (
        <aside class="sidebar">
            <SidebarFilter />
            <SidebarFormsList />
        </aside>
    )
}