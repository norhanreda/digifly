"use client";
import logo from "../../app/images/logo.webp";
import Image from "next/image";
import "./header.css";
import Link from "next/link";
import english from "../../app/images/english.png";
import arabic from "../../app/images/Flag_of_Egypt.svg.webp";
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { changeLanguage } from "../../store/action";
import { usePathname } from 'next/navigation'
import { State } from "../../store/types";

const Header: React.FC = () => {
  const language: string = useAppSelector((state: State) => state.language);
  const dispatch = useAppDispatch();
  const currentPath = usePathname();
  const switchLang = () => {
    if (language === "ar") {
      dispatch(changeLanguage("en"));
    } else {
      dispatch(changeLanguage("ar"));
    }
  };
  return (
    <>
      {language === "en" && (
        <header className="header">
          <div className="container">
            <div className="header-row">
              <div className="header-brand">
                <div className="logo">
                  <Image
                    aria-hidden
                    src={logo}
                    alt="logo"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="header-actions">
                  <div className="header-actions-btns">
                    <Link href="/home" className={currentPath === "/home" ? "active":""} >Home</Link>
                    <Link href="/categories" className={currentPath === "/categories" ? "active":""}>Categories</Link>
                    <Link href="/contactUs" className={currentPath === "/contactUs" ? "active":""}>Contact&nbsp;us</Link>
                    <Link href="/About" className={currentPath === "/About" ? "active":""}>About</Link>
                  </div>
                  <div className="lang">
                    <button onClick={switchLang}>
                      <Image
                        aria-hidden
                        src={arabic}
                        alt="lang-eng"
                        width={30}
                        height={30}
                        style={{ borderRadius: "50%", display: "inline" }}
                      />{" "}
                      <label>العربية</label>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      {language === "ar" && (
        <header className="header">
          <div className="container">
            <div className="header-row">
              <div className="header-brand arabic">
                <div className="logo">
                  <Image
                    aria-hidden
                    src={logo}
                    alt="logo"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="header-actions-ar arabic">
                  <div className="header-actions-btns-ar arabic" lang="ar">
                    <Link href="/home" className={currentPath === "/home" ? "active":""}>الرئسية</Link>
                    <Link href="/categories" className={currentPath === "/categories" ? "active":""}>الأقسام</Link>
                    <Link href="/contactUs" className={currentPath === "/contactUs" ? "active":""}>تواصل&nbsp;معنا</Link>
                    <Link href="/About" className={currentPath === "/About" ? "active":""}>من&nbsp;نحن</Link>
                  </div>

                  <div className="lang">
                    <button onClick={switchLang}>
                      <Image
                        aria-hidden
                        src={english}
                        alt="lang-eng"
                        width={30}
                        height={30}
                        style={{ display: "inline" }}
                      />{" "}
                      <label>EN</label>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
export default Header;
