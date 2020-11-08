import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        {id: 1, post: "Hi! How are you?", likesCount: 3},
        {id: 2, post: "It's my first post.", likesCount: 15},
        {id: 3, post: "sub pls!", likesCount: 22},
        {id: 4, post: "Mad world", likesCount: 8},
        {id: 5, post: "Hello space!", likesCount: 209}
    ]
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea name="" id="" cols="100" rows="3"></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].post} likeCount={postData[0].likesCount}/>
                <Post message={postData[1].post} likeCount={postData[1].likesCount}/>
                <Post message={postData[2].post} likeCount={postData[2].likesCount}/>
                <Post message={postData[3].post} likeCount={postData[3].likesCount}/>
                <Post message={postData[4].post} likeCount={postData[4].likesCount}/>
            </div>
        </div>
    )

}

export default MyPosts;