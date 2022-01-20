import '../feed/Feed.css';
import StoryUpdates from '../storyUpdates/StoryUpdates';
import PostUpdate from '../postupdate/PostUpdate';
import Post from '../post/Post';
import { useState, useEffect } from 'react';
import { db } from "../../firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore';



const Feed = () => {

    // keeps track of user posts
    const [posts, setPosts] = useState([]);

    // connects to firebase db collection in fb-clone db
    // then returns snapshot of data injected in db
    // const querySnapShot = await getDocs(collection(db, "fb-clone"));

    useEffect(async () => {
        const querySnapshot = await getDocs(collection(db, "fb-clone"));


        setPosts([querySnapshot].map((doc) => ({ key: doc.id, id: doc.id, data: doc.data })
        ));

    }, [])
    // console.log(`${doc.id} => ${doc.data()}`)


    // collection("fb-clone").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });

    // db.collection("fb-clone").onSnapShot(snapshot => {
    //     setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    // })

    return (
        <div className="feed">
            {/* StoryUpdates */}
            <StoryUpdates />
            <PostUpdate />
            {/* renders posts data from db */}
            {[posts].map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.profileImage}
                    message={post.message}
                    timeStamp={post.timeStamp}
                    username={post.userName}
                    image={post.image} />
            ))}

        </div>);
}



export default Feed;
