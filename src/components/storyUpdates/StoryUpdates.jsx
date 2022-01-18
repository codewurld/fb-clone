import '../storyUpdates/StoryUpdates.css';
import Story from '../story/Story';
import { storyData } from '../../data/data';

const StoryUpdates = () => {

    return (
        <div className="storyUpdates">
            <div className="storyUpdatesList">
                
                {storyData.map((data) => (
                    // props passed in story component
                    <Story key={data.id} image={data.image} profilePic={data.profilePic} name={data.name} />
                ))}
            </div>

        </div>
    );
}

export default StoryUpdates;