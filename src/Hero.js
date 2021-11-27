import './Hero.css'

function Hero({img, price, item, p, bg}) {
  return (
    <div className="hero" style={bg}>
        <div className="hero1">
      <p>
        {p}
      </p>
        </div>
        <div className="hero2">
            <h1>{item}</h1>
            <h2>From ${price}</h2>
            <div>
              <a href="">Learn More</a>
              <a href="">Order</a>
            </div>
            <img src={img} alt="" height="10px"/>
        </div>
    </div>
  );
}
export default Hero;
