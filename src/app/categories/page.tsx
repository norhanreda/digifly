
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


export default function Categories () {
  return (
    <>
    <Header/>
    <div className="container fill">
        <h1 style={{color:'var(--purple1)',fontWeight:'bold'}}>Categories</h1>
        <ul>
            <li> Web Development</li>
            <li>App Development</li>
            <li>ERP Systems</li>
            <li>UI/UX Design</li>
            <li>Search Engine Optimization</li>
            <li>Google Ads & PPC</li>
            <li>Social Media Marketing</li>
            <li>Branding</li>
            
        </ul>

    </div>
    <Footer/>
    </>

  );
}
