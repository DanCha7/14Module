import ButtonArrow from "../ButtonArrow";
import CustomButton from "../CustomButton";
import SwitchButtons from "../SwitchButtons";
import "./style.css";
import "/src/assets/images/threesecimg.png";

const Sectithree = () => {
  const tasks = [
    "Coverage for weddings, parties, corporate functions, and more.",
    "Skilled photographers who know how to seize the moment.",
    "A mix of candid and posed shots for a comprehensive story.",
    "Quick turnaround for you to relive the day's highlights.",
  ];

  return (
    <section className="sec__three__item container">
      <div className="photo__sec__item">
        <p className="title__name">SERVICES</p>
        <div className="block__on__services">
          <p className="name__my__photo">MY PHOTOGRAPHY SERVICES</p>
          <div className="right__segment">
            <SwitchButtons />
            <CustomButton title="View All Services→" />
          </div>
        </div>
      </div>
      <div className="event__sec_item">
        <div className="left__segment">
          <div className="event__block">
            <p className="event__title">EVENTS</p>
            <ButtonArrow />
          </div>
          <p className="text__title">
            Our event photography service is dedicated to capturing the magic of
            your special occasions. Whether it's a wedding, corporate event, or
            milestone celebration, we're there to document every heartfelt
            moment. We blend into the background, ensuring natural and candid
            shots that reflect the emotions of the day.
          </p>
          <div>
            <p className="hightlights__title">Service Highlights</p>
            <ul className="list__services">
              {tasks.map((task, index) => (
                <li key={index} className="task-item">
                  <img
                    src="src/assets/images/star_testi.svg"
                    alt="Task"
                    className="task-image"
                  />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          className="sing__song__concert__img"
          src="/src/assets/images/threesecimg.png"
          alt="Service"
        />
      </div>
    </section>
  );
};

export default Sectithree;
