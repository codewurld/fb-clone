import '../feed/Feed.css';
import StoryUpdates from '../storyUpdates/StoryUpdates';
import PostUpdate from '../postupdate/PostUpdate';
import Post from '../post/Post';



const Feed = () => {
    return (
        <div className="feed">
            {/* StoryUpdates */}
            <StoryUpdates />
            <PostUpdate />
            <Post />
        </div>);
}



export default Feed;
