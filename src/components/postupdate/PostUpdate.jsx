import "../postupdate/PostUpdate.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useState } from "react";
import { useStateValue } from "../../ContextProvider";

const PostUpdate = () => {
    // gets user login detail
    const [{ user }, dispatch] = useStateValue();

    // state change for user input
    const [input, setInput] = useState("")
    // state change for image upload
    const [image, setImage] = useState("")

    // post update function when user submits post
    const handleSubmit = (e) => {
        e.preventDefault();

        setInput("");
        setImage("");
    }

    return (
        <div className="postUpdate">
            <div className="postUpdate_top">
                <Avatar />
                <form>
                    {/* user status input */}
                    <input
                        value={input} onChange={(e) => setInput(e.target.value)}
                        className="postUpdate_sender" placeholder={"What's on your mind?"} />
                    {/* user image upload */}
                    <input
                        value={image} onChange={(e) => setImage(e.target.value)}
                        placeholder="Image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit" className="postUpdate_button">
                        Post
                    </button>
                </form>
            </div>

            <div className="postUpdate_bottom">
                {/* user media updates - photo, video, emojis */}
                <div className="postUpdate_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h2>Live Video</h2>
                </div>

                <div className="postUpdate_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h2>Photo/Video</h2>
                </div>

                <div className="postUpdate_option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h2>Feeling/Activity</h2>
                </div>


            </div>
        </div>
    );
}

export default PostUpdate;