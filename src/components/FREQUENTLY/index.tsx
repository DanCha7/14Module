import { useState } from "react";
import "/src/components/FREQUENTLY/style.css";

const FrequentlyQuestions = () => {
  const questions = [
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "How can I book a photography session with you?",
      description:
        "You can book a session by contacting me through my website or social media.",
    },
    {
      title: "What equipment do you use for your photography?",
      description:
        "I use a variety of cameras and lenses, including [list your equipment].",
    },
    {
      title: "What is your pricing structure?",
      description:
        "My pricing varies based on the type of session and duration. Please contact me for a quote.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "How can I book a photography session with you?",
      description:
        "You can book a session by contacting me through my website or social media.",
    },
    {
      title: "What equipment do you use for your photography?",
      description:
        "I use a variety of cameras and lenses, including [list your equipment].",
    },
    {
      title: "What is your pricing structure?",
      description:
        "My pricing varies based on the type of session and duration. Please contact me for a quote.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="questions">
      <div className="container">
        <p className="faq__title">FAQ’s</p>
        <h3 className="title__questions">Frequently Asked Questions</h3>
        <div className="faq__container">
          {questions.map((item, index) => (
            <div className="faq__item" key={index}>
              <div className="faq__title" onClick={() => toggleDropdown(index)}>
                <h4 className="title__block__style">{item.title}</h4>
                <div className={`icon ${openIndex === index ? "open" : ""}`}>
                  {openIndex === index ? (
                    <img src="/src/assets/images/arrowun.svg" alt="" />
                  ) : (
                    <img src="/src/assets/images/arrows.svg" alt="/" />
                  )}{" "}
                </div>
              </div>
              {openIndex === index && (
                <div className="faq__description">
                  <p className="description__title">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
