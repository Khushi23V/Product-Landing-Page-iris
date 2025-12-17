import { useState } from "react";

function Body() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [frame, setFrame] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main>
      <div className="iris-banner">
        <img
          src="https://www.eurooptica.com/cdn/shop/articles/best-german-eyewear-brands-ic-berlin-frames-1682341283549.jpg"
          id="lens"
          alt="banner"
        />
        <div className="iris-tagline">Frame your story.</div>
      </div>

      <section id="features" className="iris-features">
        <h2>FEATURES</h2>
        <div className="container">
          <div>
            <h3>Great Quality</h3>
            <p>
              We use advanced robotic techniques ensuring lenses accurate to
              three decimal places.
            </p>
          </div>

          <div>
            <h3>Variety</h3>
            <p>
              From eyeglasses to contact lenses, we help you see better.
            </p>
          </div>

          <div>
            <h3>Value For Money</h3>
            <p>
              No middlemen. Premium eyewear at honest pricing.
            </p>
          </div>
        </div>
      </section>

<section className="frame-finder">
  <div className="container">
    <h3 className="finder-title">Find your perfect frame</h3>
    <p className="finder-subtitle">
      Answer one question and we’ll suggest a style
    </p>

    <div className="finder-buttons">
      <button onClick={() => setFrame("work")}>Work</button>
      <button onClick={() => setFrame("casual")}>Casual</button>
      <button onClick={() => setFrame("outdoor")}>Outdoor</button>
    </div>

    {frame && (
      <p className="finder-result">
        {frame === "work" && "Clean, lightweight rectangular frames suit professional settings best."}
        {frame === "casual" && "Round or soft-edged frames add personality to everyday looks."}
        {frame === "outdoor" && "Durable frames with UV-protected lenses are perfect for outdoors."}
      </p>
    )}
  </div>
</section>

      <section id="looks">
        <h2 className="iris-looks">LOOKS</h2>
        <div className="eye-looks">
          {[
            {
              img: "https://www.occhialando.eu/image/cache/data/luxottica_18/ray-ban-rx-6490d-2500-gold-8056597715393-1-800x800w.jpg",
              label: "Eyeglasses",
            },
            {
              img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/zmtKToLoS-0RBR0101S.jpeg",
              label: "Sunglasses",
            },
            {
              img: "https://t3.ftcdn.net/jpg/03/34/26/78/360_F_334267828_CfbXnotmqSc4qs2b3J4BcdKm3sIKGj8J.jpg",
              label: "Contact Lenses",
            },
          ].map((item, index) => (
            <div className="look" key={index}>
              <img src={item.img} alt={item.label} />
              <div className="look-text">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonial" className="iris-tm">
        <h2>CUSTOMER TESTIMONIAL</h2>
        <div className="container">
          <iframe
            src="https://www.youtube.com/embed/SQm3RxXRunw"
            title="Customer Testimonial"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="eye-test" className="iris-tests">
        <h2>NEED AN EYE TEST?</h2>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h3 className="book">
              {submitted
                ? "Thanks! We'll get back to you shortly 👀"
                : "Just enter your email and we'll respond back"}
            </h3>

            {!submitted && (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Eg. xyz@gmail.com"
                  required
                />
                <input type="submit" value="Book" />
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Body;
