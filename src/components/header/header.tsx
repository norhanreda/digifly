import logo from "../../app/images/logo.webp";
import Image from "next/image";
import "./header.css";
import Link from "next/link";
import english from "../../app/images/english.png"
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-brand">
            <div className="logo">
              <Image aria-hidden src={logo} alt="logo" width={80} height={80} />
            </div>
            <div className="header-actions">
              <div className="header-actions-btns">
                <Link href="/home">Home</Link>
                <Link href="/categories">Categories</Link>
                <Link href="/contactUs">Contact Us</Link>
                <Link href="/About">About</Link>
              </div>
              <div className="lang">
                <button><Image aria-hidden src={english} alt="lang-eng" width={30} height={30} />   </button>EN
              </div>
              
            </div>
           
          </div>
        </div>
      </div>
    </header>
  );
}
