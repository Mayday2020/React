//import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className="post">
            my post
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                posts
                <Post message="Hi! How are you?" likeCount="3"/>
                <Post message="It's my first post." likeCount="15"/>
                
            </div>
        </div>
    )

}

export default MyPosts;