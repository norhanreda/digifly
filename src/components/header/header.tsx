import logo from "../../app/images/logo.webp"
import Image from "next/image";
import "./header.css"
export default function Header () {
    return (
        <header>
        <div className="header"> 
       
            <Image
            aria-hidden
            src={logo}
            alt="logo"
            width={80}
            height={80}
          />
          <div>Home</div>
          <div>
            categories</div>
          <div>Contact Us</div>
          <div>About</div>

        
        </div>
        </header>
   


    );
  }