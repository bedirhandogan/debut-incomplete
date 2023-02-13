import styles from './styles.module.css';
import Image from "assets";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.area}>
                Introduction
            </div>
            <div className={styles.area}>
                <div className={styles.search}>
                    <Image fileName={"search.svg"} alt={"search"} />
                    <input type={"text"} placeholder={"Search"} />
                </div>
                <div className={styles.themeSelector}>
                    <div className={`${styles.themeSelect} ${styles.active}`}>
                        <Image fileName={"theme-light.svg"} alt={"theme light"} />
                    </div>
                    <div className={`${styles.themeSelect}`}>
                        <Image fileName={"theme-dark.svg"} alt={"theme dark"} />
                    </div>
                </div>
                <Image fileName={"bell.svg"} alt={"bell"} width={26} height={26} />
                <Image fileName={"settings.svg"} alt={"settings"} width={26} height={26} />
            </div>
        </div>
    );
}

export default Navbar;