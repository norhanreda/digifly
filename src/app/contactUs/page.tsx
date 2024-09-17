
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


export default function ContactUs () {
  return (
    <>
    <Header/>
    <div className="container fill">
        <h1 style={{color:'var(--purple1)',fontWeight:'bold'}}>E-mail</h1>
        <p>hello@digiflyeg.com</p>
        <h1 style={{color:'var(--purple1)',fontWeight:'bold'}}>Call us</h1>
        <p>Sales Consultant : (+20) 1063312120</p>
        <p>Sales Consultant : (+20) 1116359670</p>
        <p>Customer Care : (+20) 1023155959</p>

    </div>
    <Footer/>
    </>

  );
}
