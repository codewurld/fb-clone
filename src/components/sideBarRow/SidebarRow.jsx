import '../sideBarRow/SidebarRow.css'
import { Avatar, Icon } from '@material-ui/core';


const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sideBarRow">
            {/* if image exists render Avatar with image */}
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;