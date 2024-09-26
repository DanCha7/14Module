import { useRef } from "react";
import Slider from "react-slick";
import CustomButton from "../CustomButton";
import SwitchButtons from "../SwitchButtons";
import WorkItem from "./workitems";
import "/src/components/ExploreWork/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreWork = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <section className="explore__work">
        <div className="container">
          <div className="work__block">
            <p className="title__portfolio">Portfolio</p>
            <div className="block__on__works">
              <h3 className="title__name__works">
                EXPLORE MY PHOTOGRAPHY WORK.
              </h3>
              <div className="see__block__works">
                <SwitchButtons onNext={nextSlide} onPrev={prevSlide} />
                <CustomButton title="View All Works→" />
              </div>
            </div>
          </div>
          <div>
            <Slider ref={sliderRef} {...settings}>
              <WorkItem
                imageUrl="/src/assets/images/FirstCard.png"
                description="Faces of Resilience"
                link="March 2022"
              />
              <WorkItem
                imageUrl="/src/assets/images/SecondCard.png"
                description="Product Elegance"
                link="January 2020"
              />
              <WorkItem
                imageUrl="/src/assets/images/ThirdCard.png"
                description="A Wedding Tale"
                link="January 2020"
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreWork;
