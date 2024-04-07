import "./games.css";
import g1 from "../Images/Games/g1.webp";
import g2 from "../Images/Games/g2.webp";
import g3 from "../Images/Games/g3.webp";
import g4 from "../Images/Games/g4.webp";
import g5 from "../Images/Games/g5.webp";
import g6 from "../Images/Games/g6.webp";
import g7 from "../Images/Games/g7.webp";
import g8 from "../Images/Games/g8.webp";
import g9 from "../Images/Games/g9.webp";
import g10 from "../Images/Games/g10.webp";
import g11 from "../Images/Games/g11.webp";
import g12 from "../Images/Games/g12.webp";
import { Link } from "react-router-dom";

function Games() {
  const gameset = [
    {
      img: g1,
      name: "Helldivers™",
    },
    {
      img: g2,
      name: "Rise of the Ronin",
    },
    {
      img: g3,
      name: "The Last of Us Part II Remastered",
    },
    {
      img: g4,
      name: "Tekken 8",
    },
    {
      img: g5,
      name: "EA SPORTS™ FC 24",
    },
    {
      img: g6,
      name: "Dragon's Dogma 2",
    },
    {
      img: g7,
      name: "Final Fantasy XVI",
    },
    {
      img: g8,
      name: "Marvel's Spider-Man 2",
    },
    {
      img: g9,
      name: "Call of Duty: Modern Warfare III",
      url:"/gamelanding"
    },
    {
      img: g10,
      name: "God of War Ragnarök",
    },
    {
      img: g11,
      name: "Final Fantasy VII Rebirth",
    },
    {
      img: g12,
      name: "LEGO Fortnite",
    },
  ];
  return (
    <>
      <div id="games-div">
        <h1>Great Action & Fun games out now or coming soon</h1>
        <div class="btn-switch">
          <div>
            <button>New releases</button>
            <button>Coming soon</button>
          </div>
        </div>
        <div class="games">
          {gameset.map((test, index) => (
            <div class="gs1" key={index}>
              <Link to={test.url}>
              <img src={test.img} alt="" /> <p>{test.name}</p>
              </Link>
            </div>
          ))}

          {/* <div class="gs1">
            <img src={g1} alt="" /> <p>Helldivers™ 2</p>
          </div>
          <div class="gs1">
            <img src={g2} alt="" /> <p>Rise of the Ronin</p>
          </div>
          <div class="gs1">
            <img src={g3} alt="" /> <p>The Last of Us Part II Remastered</p>
          </div>
          <div class="gs1">
            <img src={g4} alt="" /> <p>Tekken 8</p>
          </div>
          <div class="gs1">
            <img src={g5} alt="" /> <p>EA SPORTS™ FC 24</p>
          </div>
          <div class="gs1">
            <img src={g6} alt="" /> <p>Dragon's Dogma 2</p>
          </div>
          <div class="gs1">
            <img src={g7} alt="" /> <p>Final Fantasy XVI</p>
          </div>
          <div class="gs1">
            <img src={g8} alt="" /> <p>Marvel's Spider-Man 2</p>
          </div>
          <div class="gs1">
            <img src={g9} alt="" /> <p>Call of Duty: Modern Warfare III</p>
          </div>
          <div class="gs1">
            <img src={g10} alt="" /> <p>God of War Ragnarök</p>
          </div>
          <div class="gs1">
            <img src={g11} alt="" /> <p>Final Fantasy VII Rebirth</p>
          </div>
          <div class="gs1">
            <img src={g12} alt="" /> <p>LEGO Fortnite</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Games;
