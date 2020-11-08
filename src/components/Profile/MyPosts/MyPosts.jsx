import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea name="" id="" cols="100" rows="3"></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post className={s.post} message="Hi! How are you?" likeCount="3"/>
                <Post message="It's my first post." likeCount="15"/>
            </div>
        </div>
    )

}

export default MyPosts;