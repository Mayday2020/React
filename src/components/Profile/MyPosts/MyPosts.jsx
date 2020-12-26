import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
const MyPosts = (props) => {
    let postsElement = props.posts.map( p => <Post message={p.post} likeCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} cols="100" rows="3" value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )

}

export default MyPosts;