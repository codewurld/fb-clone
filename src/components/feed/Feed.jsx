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
            <Post profilePic="https://i.guim.co.uk/img/media/1667e050d3c1380577dba0006e009b1fa62a2eea/0_147_2096_1257/master/2096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=94c2b0a91b42a4ea9e8a4fcf43835014"
                message="wow"
                timeStamp="time is of the essence"
                username="sango"
                image="https://images.techopedia.com/images/uploads/istock-1173805290.jpeg?w=800&h=0&mode=max&quality=70&scale=both" />
            <Post profilePic="https://i.guim.co.uk/img/media/1667e050d3c1380577dba0006e009b1fa62a2eea/0_147_2096_1257/master/2096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=94c2b0a91b42a4ea9e8a4fcf43835014"
                message="wow"
                timeStamp="time is of the essence"
                username="sango"
                image="https://images.techopedia.com/images/uploads/istock-1173805290.jpeg?w=800&h=0&mode=max&quality=70&scale=both" />
            <Post profilePic="https://i.guim.co.uk/img/media/1667e050d3c1380577dba0006e009b1fa62a2eea/0_147_2096_1257/master/2096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=94c2b0a91b42a4ea9e8a4fcf43835014"
                message="wow"
                timeStamp="time is of the essence"
                username="sango"
                image="https://images.techopedia.com/images/uploads/istock-1173805290.jpeg?w=800&h=0&mode=max&quality=70&scale=both" />

        </div>);
}



export default Feed;
