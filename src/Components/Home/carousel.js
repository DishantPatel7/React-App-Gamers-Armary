import "./carousel.css";
import s1 from "../Images/Slider/s1.jpeg";
import s2 from "../Images/Slider/s2.webp";
import s3 from "../Images/Games/gMain/gM2.png";
import s4 from "../Images/Slider/s4.jpeg";
import s5 from "../Images/Slider/s5.jpeg";
import s6 from "../Images/Games/gMain/gM5.png";
import s7 from "../Images/Slider/s7.webp";
import s8 from "../Images/Slider/s8.png";
import { Link } from "react-router-dom";
// import "../Javascript/landing";

function Carousel() {
  const item = [
    {
      id: "/games/3",
      img: s1,
      topic: "COD : Modern Warfare III",
      des: "Call of Duty returns with an all-new campaign, modernized versions of classic Multiplayer maps and an open-world PvE Zombies experience.",
    },
    {
      id: "/games/9",
      img: s8,
      topic: "Marvel's Spider-Man 2",
      des: "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’sSpider-Man franchise for PS5.",
    },
    {
      id: "/games/2",
      img: s3,
      topic: "Rise of the Ronin",
      des: "Embark on an epic journey across war-torn 19th-century Japan in this combat-focused open-world action RPG from Team NINJA, the veteran studio behind Nioh and NINJA GAIDEN.",
    },
    {
      id: "/games/5",
      img: s4,
      topic: "Tekken 8",
      des: "Tekken 8 picks up after the gruesome battle that ended in Heihachi Mishima’s defeat in Tekken 7, focusing on a new rivalry, pitting father against son as Jin Kazama stands in defiance against Kazuya Mishima in a city-shattering face-to-face showdown.",
    },
    {
      id: "/games/1",
      img: s5,
      topic: "Helldivers™ 2",
      des: "Helldivers 2 features Arrowhead's best cooperative gameplay yet. Collaboration will be vital: Teams will synergize on loadouts, strategize their approach for each mission and complete objectives together.1",
    },
    {
      id: "/games/6",
      img: s6,
      topic: "EA SPORTS™ FC 24",
      des: "EA SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.",
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
                  <button>
                    <Link to={item.id}>BUY NOW</Link>
                  </button>
                  {/* <button>ADD TO CART</button> */}
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
          <Link to="/games/9">
            <div class="item">
              <img src={s8} alt="" />
              <div class="content">
                <div class="title">Marvel's Spider-Man 2</div>
                {/* <div class="des">Description</div> */}
              </div>
            </div>
          </Link>
          {/* <Thumbnail sc={s8} title="sp2" lk="/games/9" /> */}
          <Link to="/games/2">
            <div class="item">
              <img src={s3} alt="" />
              <div class="content">
                <div class="title">Rise of the Ronin</div>
                {/* <!-- <div class="des">Description</div> --> */}
              </div>
            </div>
          </Link>
          <Link to="/games/5">
            <div class="item">
              <img src={s4} alt="" />
              <div class="content">
                <div class="title">Tekken 8</div>
                {/* <!-- <div class="des">Description</div> --> */}
              </div>
            </div>
          </Link>
          <Link to="/games/1">
            <div class="item">
              <img src={s5} alt="" />
              <div class="content">
                <div class="title">Helldivers™ 2</div>
                {/* <!-- <div class="des">Description</div> --> */}
              </div>
            </div>
          </Link>
          <Link to="/games/6">
            <div class="item">
              <img src={s6} alt="" />
              <div class="content">
                <div class="title">EA SPORTS™ FC 24</div>
                {/* <!-- <div class="des">Description</div> --> */}
              </div>
            </div>
          </Link>
          <Link to="/games/3">
            <div class="item">
              <img src={s1} alt="" />
              <div class="content">
                <div class="title">Modern Warfare III</div>
                {/* <!-- <div class="des">Description</div> --> */}
              </div>
            </div>
          </Link>
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

// function Thumbnail(props) {
//   return (
//     <Link to="/games/9">
//       <div class="item">
//         <img src={props.sc} alt="" />
//         <div class="content">
//           <div class="title">{props.t}</div>
//           {/* <!-- <div class="des">Description</div> --> */}
//         </div>
//       </div>
//     </Link>
//   );
// }
