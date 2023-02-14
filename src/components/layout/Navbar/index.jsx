import styles from './styles.module.css';
import { change } from "store/reducer/theme";
import {useDispatch, useSelector} from "react-redux";
import {IconSearch, IconSun, IconMoon, IconBell, IconSettings} from "@tabler/icons-react";
import logo from "../../../assets/images/logo.svg";

function Navbar() {
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={styles.navbar}>
            <div className={styles.area}>
                <img src={logo} alt={"profile"} />
                Introduction
            </div>
            <div className={styles.area}>
                <div className={styles.search}>
                    <IconSearch stroke={1.3} width={20} height={20} style={{ color: "var(--icon-color-primary)"}} />
                    <input type={"text"} placeholder={"Search"} />
                </div>
                <div className={styles.themeSelector} onClick={() => dispatch(change())}>
                    <div className={`${styles.themeSelect} ${theme === "light" && styles.active}`}>
                        <IconSun stroke={1.3} width={20} height={20} style={{ color: "var(--icon-color-primary)"}} />
                    </div>
                    <div className={`${styles.themeSelect} ${theme === "dark" && styles.active}`}>
                        <IconMoon stroke={1.3} width={20} height={20} style={{ color: "var(--icon-color-primary)"}} />
                    </div>
                </div>
                <div className={styles.notification}>
                    <IconBell stroke={1.3} style={{ color: "var(--icon-color-primary)"}} />
                </div>
                <div className={styles.settings}>
                    <IconSettings stroke={1.3} style={{ color: "var(--icon-color-primary)"}} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;