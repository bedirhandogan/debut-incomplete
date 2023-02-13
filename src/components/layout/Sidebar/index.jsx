import styles from './styles.module.css';
import {Link} from "react-router-dom";
import Image from "assets";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <Image fileName={"logo.svg"} alt={"logo"} />
                Debut
            </div>
            <div className={styles.body}>
                <Link to={"/app"}>
                    <Image fileName={"home.svg"} alt={"introduction"} />
                    Introduction
                </Link>
                <Link to={"tasks"}>
                    <Image fileName={"tasks.svg"} alt={"tasks"} />
                    Task
                </Link>
                <Link to={"notes"}>
                    <Image fileName={"note.svg"} alt={"notes"} />
                    Note
                </Link>
                <Link to={"bookmarks"}>
                    <Image fileName={"bookmark.svg"} alt={"bookmark"} />
                    Bookmark
                </Link>
            </div>

            <div className={styles.footer}>
                <Image fileName={"logo.svg"} alt={"picture"} />
                {"username"}
                <Image fileName={"logout.svg"} alt={"bookmark"} />
            </div>
        </div>
    );
}

export default Sidebar;