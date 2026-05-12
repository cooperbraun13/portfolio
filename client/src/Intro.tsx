import cooperPhoto from "./assets/coopandeme.jpg";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-text">
        <h1>hi, im cooper!</h1>
        <p>
          im currently a rising senior at gonzaga university studying computer
          science. im interested in fullstack development, system design, and
          ai. im especially interested in how ai can help accelerate the
          progress of software development and help us build better tools,
          systems, and products for the betterment of the world.
        </p>
      </div>

      <img className="photo" src={cooperPhoto} alt="Cooper" />
    </section>
  );
}

export default Intro;
