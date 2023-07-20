import { useEffect } from "react";
import "./App.scss";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  useEffect(() => {
    const contentElements = document.querySelectorAll('.content');
    const handleScroll = () => {
      contentElements.forEach((element) => {
        const offset = parseFloat(element.dataset.offset) || 0;
        if(window.scrollY >= window.innerHeight * (0.6 + offset)) {
          element.classList.add('show');
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className="div btn">
        <section>
          <Button />
        </section>
      </div>
      <div className="div">
        <section className="content" data-offset="0">
          <div>
            <figure className="figure">
              <figcaption className="fig_caption">
                PARC VALLÈS GIVEAWAY
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
      <div className="div">
        <section className="content" data-offset="1">
          <div>
            <figure className="figure">
              <figcaption className="fig_caption">
                PARC VALLÈS GIVEAWAY
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
      <div className="div p3">
        <section className="content p3_child" data-offset="2">
          <div className="cards">
            <Card url={require("./assets/image.png")} name={'vesfd'} />
            <Card url={require("./assets/image.png")} name={'wrewc'} />
            <Card url={require("./assets/image.png")} name={'bevfd'} />
            <Card url={require("./assets/image.png")} name={'bsfdbsfdb'} />
            <Card url={require("./assets/image.png")} name={'vfdsetb'} />
            <Card url={require("./assets/image.png")} name={'bsefvs'} />
            <Card url={require("./assets/image.png")} name={'beb'} />
            <Card url={require("./assets/image.png")} name={'vdsfbsbsgb'} />
            <Card url={require("./assets/image.png")} name={'btnyrnyrdbn'} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
