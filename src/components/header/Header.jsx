import '../header/Header.css'
import facebook from '../../assets/facebook.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../../ContextProvider';
import myProf from '../../assets/profPortrait.png';

const Header = () => {
    // gets user login detail
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">

            {/* logo goes here */}
            <div className="header_left">
                <img src={facebook} alt="Facebook logo" />
            </div>
            {/* search bar */}
            <div className="header_input">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text" />
            </div>

            {/* center with app options  */}
            <div className="header_middle">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            {/* right sidebar widgets */}
            <div className="header_right">
                <div className="header_profile">

                    <Avatar src={myProf} />
                    <h4>Shola Quadri</h4>

                    {/* props from user login - implement later*/}

                    {/* <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4> */}
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    );
}

export default Header;
