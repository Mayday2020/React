import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    debugger;
    let postsElement = props.posts.map( p => <Post message={p.post} likeCount={p.likesCount}/>);
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea name="" id="" cols="100" rows="3"></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )

}

export default MyPosts;