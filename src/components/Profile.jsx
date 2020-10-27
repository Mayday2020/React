import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
        <div className={classes.content_img}></div>
        <div className="avatar-img">
            avatar + description
    </div>
        <div className="post">
            my post
      <div>
                new post
      </div>
            <div>
                posts
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
        </div>
    </div>
}

export default Profile;