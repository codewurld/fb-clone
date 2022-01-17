import '../feed/Feed.css';
import StoryUpdates from '../storyUpdates/StoryUpdates';
import PostUpdate from '../postupdate/PostUpdate';



const Feed = () => {
    return (
        <div className="feed">
            {/* StoryUpdates */}
            <StoryUpdates />
            <PostUpdate />
            {/* StatusUpdate */}
        </div>);
}



export default Feed;
