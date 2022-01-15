import '../leftSideBar/LeftSideBar.css';
import SidebarRow from '../sideBarRow/SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import Facebook from "../../assets/facebook.png"

const LeftSideBar = () => {
    return (
        <div className="sidebar">
            {/* src={user.photoURL} title={user.displayName}  */}
            <SidebarRow src={Facebook} title="Shola Quadri" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="See more" />

        </div>
    );
}



export default LeftSideBar;
