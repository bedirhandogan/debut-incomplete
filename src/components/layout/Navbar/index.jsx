import './styles.css';
import Image from "../../../assets";

function Navbar() {
    return (
        <div className={"navbar"}>
            <div className={"navbar-left"}>
                Introduction
            </div>

            <div className={"navbar-right"}>
                <div className={"navbar-search"}>
                    <Image fileName={"search.svg"} alt={"search"} />
                    <input type={"text"} placeholder={"Search"} />
                </div>
                <div className={"navbar-themeSelector"}>
                    <div className={"theme-light active"}>
                        <Image fileName={"theme-light.svg"} alt={"theme light"} />
                    </div>
                    <div className={"theme-dark"}>
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