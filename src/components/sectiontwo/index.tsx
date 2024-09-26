import ButtonArrow from "../ButtonArrow";
import "./style.css";

function DamienLetsSection() {
  return (
    <>
      <section className="Damien__Banner__images">
        <div className="container section__two__test">
          <div className="left__item">
            <p className="tittle__stun__fr">STUNNING PHOTOGRAPHY BY</p>
            <h1 className="dam__braun">DAMIEN BRAUN</h1>
          </div>
          <div className="right__item">
            <div className="flex__work__title">
              <h2 className="tittle__lets__work">LETS </h2>
              <ButtonArrow />
            </div>
            <h2 className="tittle__lets__work">WORK TOGETHER</h2>
          </div>
        </div>
        <div className="banner__photography" />

        <div className="container damen__io">
          <img
            className="photo__banner"
            src="/src/assets/images/Images Container.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default DamienLetsSection;
