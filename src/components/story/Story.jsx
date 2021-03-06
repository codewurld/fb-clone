import '../story/Story.css';
import { Avatar } from '@material-ui/core';
import { storyData } from '../../data/data';

// props passed from StoryUpdates
const Story = ({ image, profilePic, name }) => {
    return (
        // story image and info
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar src={profilePic} className="story_avatar" />
            <h4>{name}</h4>
        </div>
    );
}

export default Story;