import "./carousel.css";
import s1 from "../Images/Slider/s1.jpeg";
import s2 from "../Images/Slider/s2.webp";
import s3 from "../Images/Slider/s3.webp";
import s4 from "../Images/Slider/s4.jpeg";
import s5 from "../Images/Slider/s5.jpeg";
import s6 from "../Images/Slider/s6.webp";
import s7 from "../Images/Slider/s7.webp";
import s8 from "../Images/Slider/s8.png";
// import './landing';


function Carousel() {
  const item = [
    {
      img: s1,
      topic: "COD : Modern Warfare III",
      des: "Call of Duty returns with an all-new campaign, modernized versions of classic Multiplayer maps and an open-world PvE Zombies experience.",
    },
    {
      img: s8,
      topic: "Marvel's Spider-Man 2",
      des: "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’sSpider-Man franchise for PS5.",
    },
    {
      img: s3,
      topic: "Fortnite Battle Royale",
      des: "Create, play and battle with friends for free in Fortnite Battle Royale. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival and more.",
    },
    {
      img: s4,
      topic: "Tekken 8",
      des: "Tekken 8 picks up after the gruesome battle that ended in Heihachi Mishima’s defeat in Tekken 7, focusing on a new rivalry, pitting father against son as Jin Kazama stands in defiance against Kazuya Mishima in a city-shattering face-to-face showdown.",
    },
    {
      img: s5,
      topic: "Helldivers™ 2",
      des: "Helldivers 2 features Arrowhead's best cooperative gameplay yet. Collaboration will be vital: Teams will synergize on loadouts, strategize their approach for each mission and complete objectives together.1",
    },
    {
      img: s6,
      topic: "Hi-Fi Rush",
      des: "Considered a defect by an evil tech megacorp due to his heart being fused to a music player, Chai fights his way to freedom by getting into the groove.",
    },
  ];
  return (
    <>
      <div class="carousel">
        {/* <!-- list item --> */}
        <div class="list">
          {item.map((item, index) => (
            <div class="item" key={index}>
              <img src={item.img} alt="" />
              <div class="content">
                {/* <!-- <div class="author">Author</div> --> */}
                {/* <div class="title">Title</div> */}
                <div class="topic">{item.topic}</div>
                <div class="des">{item.des}</div>
                <div class="buttons">
                  <button>BUY NOW</button>
                  <button>ADD TO CART</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- thumbnail --> */}
        {/* <div class="thumbnail">
          {item.map((item, index) => (
            <div class="item" key={index}>
              <img src={item.img} alt={item.topic} />
              <div class="content">
                <div class="title">{item.topic}</div>
                <div class="des">{item.des}</div>
              </div>
            </div>
          ))}
        </div> */}

        <div class="thumbnail">
          <div class="item">
            <img src={s8} alt="" />
            <div class="content">
              <div class="title">Marvel's Spider-Man 2</div>
              {/* <!-- <div class="des">Description</div> --> */}
            </div>
          </div>
          <div class="item">
            <img src={s3} alt="" />
            <div class="content">
              <div class="title">Fortnite Battle Royale</div>
              {/* <!-- <div class="des">Description</div> --> */}
            </div>
          </div>
          <div class="item">
            <img src={s4} alt="" />
            <div class="content">
              <div class="title">Tekken 8</div>
              {/* <!-- <div class="des">Description</div> --> */}
            </div>
          </div>
          <div class="item">
            <img src={s5} alt="" />
            <div class="content">
              <div class="title">Helldivers™ 2</div>
              {/* <!-- <div class="des">Description</div> --> */}
            </div>
          </div>
          <div class="item">
            <img src={s6} alt="" />
            <div class="content">
              <div class="title">Hi-Fi Rush</div>
              {/* <!-- <div class="des">Description</div> --> */}
            </div>
          </div>
          <div class="item">
            <img src={s1} alt="" />
            <div class="content">
              <div class="title">Modern Warfare III</div>
              {/* <!-- <div class="des">Description</div> --> */}
            </div>
          </div>
        </div>
        {/* <!-- arrows --> */}
        <div class="arrows">
          <button id="prev">
            <i class="ri-arrow-left-s-line"></i>
          </button>
          <button id="next">
            <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
        <div class="time"></div>
      </div>
    </>
  );
}
export default Carousel;
