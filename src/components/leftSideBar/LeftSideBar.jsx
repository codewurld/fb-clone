import '../leftSideBar/LeftSideBar.css';
import SidebarRow from '../sideBarRow/SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import Facebook from "../../assets/facebook.png";
import { useStateValue } from '../../ContextProvider';
import myProf from '../../assets/profPortrait.png';

const LeftSideBar = () => {
    // gets user login detail
    const [{ user }, dispatch] = useStateValue();


    return (

        <div className="sidebar">
            {/* dummy data */}
            <SidebarRow src={myProf} title="Shola Quadri" />
            {/* implement later --> dynamic property from db */}
            {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
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
