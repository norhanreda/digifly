import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="container fill">
        <h1 style={{color:'var(--purple1)',fontWeight:'bold'}}>About Digifly</h1>
        <p style={{color:'var(--purple2)'}}>&quot;SHAPING DIGITAL STRATEGIES INTO SUCCESS STORIES.&quot;</p>
        <p style={{color:'var(--purple2)'}}>
          Fly with our circle of 360° clients and explore new heights of
          innovation and creativity
        </p>
        <p>
          Are you feeling the heat of the competition? If you’re searching for a
          reliable and top-tier digital marketing agency to give your business
          the edge, look no further than Digifly. We’re here to ensure you don’t
          miss out on valuable opportunities Digifly is a leading full-service
          digital marketing agency. We specialize in branding, App Development,
          Web Development, search engine optimization (SEO), UI/UX, PPC, social
          media marketing, and digital marketing strategy. Our journey began in
          Egypt, and over time, we’ve honed the skills and expertise that
          position us as game changers for numerous businesses in Egypt and the
          Middle East.
        </p>
      </div>

      <Footer />
    </>
  );
}
