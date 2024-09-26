import Card from "../CardsQuestions";
import CustomButton from "../CustomButton";
import "/src/components/Testimonials/style.css";

const TestimonialsCards = () => {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <p className="testi__name">Testimonials</p>
          <h3 className="title__testimonials">What My Clients Say</h3>
          <div className="under__block">
            <div className="block__review">
              <p className="total__title">Total Reviews</p>
              <span className="sum__num__review__title">323</span>
            </div>
            <CustomButton title="View All Testimonials ->" />
          </div>
          <div className="cards__testimonials">
            <Card
              title="Emily Johnson"
              location="USA, California"
              description="Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
            />
            <Card
              title="John Smith"
              location="USA, California"
              description="Damien has an incredible talent for making every event feel effortless, and the results speak for themselves."
            />
            <Card
              title="Samantha Davis"
              location="USA, California"
              description="I was blown away by Damien's ability to capture the essence of our wedding day. Hes photographs are our cherished memories."
            />
          </div>
          <h4 className="title__damien">DAMIEN</h4>
        </div>
      </section>
    </>
  );
};

export default TestimonialsCards;
