import '../storyUpdates/StoryUpdates.css';
import Story from '../story/Story';
import { storyData } from '../../data/data';

const StoryUpdates = () => {
    return (
        <div className="storyUpdates">
            <Story image={storyData.id[1].image} profilePic={storyData.id[1].profilePic} name={storyData.id[1].name} />
            {/* <Story image={storyData.image} profilePic={ } name={ } />
            <Story image={storyData.image} profilePic={ } name={ } />
            <Story image={storyData.image} profilePic={ } name={ } />
            <Story image={storyData.image} profilePic={ } name={ } /> */}

        </div>
    );
}

export default StoryUpdates;