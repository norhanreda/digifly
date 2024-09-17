
import Part1en from "../../components/part1en/part1en"
import Part2en from "../../components/part2en/part2en";
import Part3en from "../../components/part3en/part3en";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
// const Part1en = dynamic(() => import("../../components/part1en/part1en"), { ssr: false });
// const Part2en = dynamic(() => import("../../components/part2en/part2en"), { ssr: false });
// const Part3en = dynamic(() => import("../../components/part3en/part3en"), { ssr: false });
// const Header = dynamic(() => import("../../components/header/header"), { ssr: false });
// const Footer = dynamic(() => import("../../components/footer/footer"), { ssr: false });


export default function Home () {
  return (
    <>
    <Header/>
    <Part1en/>
    <Part2en/>
    <Part3en/>
    <Footer/>
    </>

  );
}
