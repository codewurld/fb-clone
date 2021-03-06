import "../post/Post.css";
import { Avatar } from "@material-ui/core";
import { storyData } from "../../data/data";
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import { AccountCircle, ChatBubbleOutline, NearMe } from "@material-ui/icons";
import ExpandMore from "@material-ui/icons/ExpandMore";

// props passed from feed component
const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className="post">

            {/* post info goes here */}
            <div className="post_top">

                <Avatar src={profilePic} className="profile_avatar" />

                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>

                </div>

            </div>

            {/* post content goes here */}

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="Facebook post image" />
            </div>

            <div className="post_options">
                <div className="post_option"><ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option"><ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircle />
                    <ExpandMore />
                </div>
            </div>
        </div>
    );
}

export default Post;

