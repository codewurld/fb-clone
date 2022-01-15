import '../sideBarRow/SidebarRow.css'
import { Avatar } from '@material-ui/core';


const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sideBarRow">
            {src && <Avatar src={src} />}
            <h2>{title}</h2>
        </div>
    );
}

export default SidebarRow;