import '../story/Story.css';
import { Avatar } from '@material-ui/core';
import { storyData } from '../../data/data';


const Story = ({ image, profilePic, name }) => {
    return (
        <div className="story">
            <Avatar src={profilePic} />
            <h4>{name}</h4>
        </div>
    );
}

export default Story;