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

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img src={facebook} alt="Facebook logo" />
            </div>
            {/* search bar */}
            <div className="header_input">
                <SearchIcon />
                <input type="text" />
            </div>

            {/* center  */}
            <div className="header_middle">
                <div className="header_option">
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
                <div className="header_info">
                    <Avatar />
                    <h4>profile name</h4>
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
