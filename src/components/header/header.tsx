"use client";
import logo from "../../app/images/logo.webp";
import Image from "next/image";
import "./header.css";
import Link from "next/link";
import english from "../../app/images/english.png";
import arabic from "../../app/images/Flag_of_Egypt.svg.webp";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../store/action";
interface User {
  id: number;
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
}

interface State {
  users: User[];
  language: string;
  error: string | null;
}
export default function Header() {
  const language: string = useSelector((state: State) => state.language);
  const dispatch = useDispatch();
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
                    <Link href="/home">Home</Link>
                    <Link href="/categories">Categories</Link>
                    <Link href="/contactUs">Contact Us</Link>
                    <Link href="/About">About</Link>
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
                <div className="header-actions arabic">
                  <div className="header-actions-btns arabic">
                    <Link href="/home">الرئسية</Link>
                    <Link href="/categories">الأقسام</Link>
                    <Link href="/contactUs">تواصل معنا</Link>
                    <Link href="/About">من نحن</Link>
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
}
