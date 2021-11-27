import Nav from "./Nav";
import Hero from "./Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero
        p={
          "Shop now at the Apple Store online with many great ways to buy. Get free, no-contact delivery, Specialist help and more."
        }
        img={
          "https://maplestore.in/wp-content/uploads/2020/10/iPhone-12-Pro.jpg"
        }
        price={"999"}
        item={"iPhone 12"}
        // bg={{backgroundColor:"red"}}
      />
      <Hero
        img={
          "https://maplestore.in/wp-content/uploads/2020/10/iPhone-12-Pro.jpg"
        }
        price={"99"}
        item={"iPhone 10"}
        bg={{backgroundColor:"black"}}
      />
      <Hero
        img={
          "https://maplestore.in/wp-content/uploads/2020/10/iPhone-12-Pro.jpg"
        }
        price={"9999999"}
        item={"iPhone 1018493"}
        bg={{backgroundColor:"white"}}
      />
    </div>
  );
}

export default App;
