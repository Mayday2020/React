import classes from'./Navbar.module.css';

const Navbar = () => {
    return <nav className={classes.nav}>
        <ul className={classes.sidebar}>
            <li className={classes.item}><a href="/profile" className={classes.active}>Profile</a></li>
            <li className={classes.item}><a href="/dialogs">Messages</a></li>
            <li className={classes.item}><a href="/music">Music</a></li>
            <li className={classes.item}><a href="/news">News</a></li>
            <li className={classes.item}><a href="/settings">Settings</a></li>
        </ul>
    </nav>
}

export default Navbar;