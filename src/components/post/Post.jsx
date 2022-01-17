import "../post/Post.css";
import { Avatar } from "@material-ui/core";
import { storyData } from "../../data/data";

const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className="post">

            {/* post info goes here */}
            <div className="post_top">

                <Avatar src={profilePic} className="profile_avatar" />

                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>time time father time</p>

                </div>

            </div>

            {/* post content goes here */}

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="Facebook post image" />
            </div>
        </div>
    );
}

export default Post;

