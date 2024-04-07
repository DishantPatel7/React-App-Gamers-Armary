import "./gamelanding.css";
import iarc_18 from "../Images/iarc_18.webp";
import c1 from "../Images/COD/c1.avif";
import c2 from "../Images/COD/c2.avif";
import c3 from "../Images/COD/c3.avif";
import c4 from "../Images/COD/c4.webp";
function Gamelanding() {
  let gameData = [
    {
      img: c1,
      gName: "Call of Duty®: Warzone™",
      gPrice: "Free",
    },
    {
      img: c2,
      gName: "MWIII Cross-Gen",
      gPrice: "Rs 3,639",
      MRP: "Rs 5,599",
      discount: "Save 35%",
      timePerioad: " Offer ends soon..",
      li1: "Modern Warfare® III for PS4™/PS5®",
      li2: "Soap Operator Pack",
      li3: "Zombie Ghost Operator Skin",
    },
    {
      img: c3,
      gName: "MWIII Vault",
      gPrice: "Rs 7,999",
      li1: "Modern Warfare® III for PS4™/PS5®",
      li2: "Soap Operator Pack",
      li3: "Zombie Ghost Operator Skin",
      li4: "Soul Harvester Weapon Blueprint",
      li5: "Nemesis Operator Pack",
      li6: "30 additional Tier Skips",
    },
    {
      img: c4,
      gName: "MWII Cross-Gen",
      gPrice: "Rs 4,999",
      li1: "Modern Warfare® II for PS4™/PS5™",
      li2: "Warzone™",
    },
  ];
  return (
    <>
      <div id="Gamelanding">
        <div id="pro1">
          <div id="p-content">
            <div id="p-content-L">
              <h1>Call of Duty: Modern Warfare III</h1>
              <p id="p-content-L-p1">Activision</p>
              <p id="p-content-L-p2">
                4.04 <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-line"></i> 300.3K
              </p>
              <h2>
                Rs 3,639 <span> Rs 5,599</span>
              </h2>
              <p id="p-content-L-p3">
                Save 35% <span>Offer ends soon..</span>
              </p>
              <div id="p-content-L-btn">
                <button>Add to Cart</button>
                <button>
                  <i class="ri-heart-line"></i>
                </button>
              </div>
              <h3>Released 10/11/2023</h3>
              <div id="p-content-L-divP">
                <div>
                  <p>● PS Plus required for online play</p>
                  <p>● In-game purchases optional</p>
                  <p>● Supports up to 64 online players with PS Plus</p>
                  <p>● Online play optional</p>
                </div>
                <div>
                  <p>● 1 - 2 players</p>
                  <p>● Remote Play supported PS5 Version</p>
                  <p>● Vibration function and trigger effect supported</p>
                </div>
              </div>
            </div>
            <div id="p-content-R">
              <div id="p-content-R_cont">
                <div id="p-content-R_L">
                  <img src={iarc_18} alt="" />
                </div>
                <div id="p-content-R_R">
                  <p>Extreme Violence, Strong Language</p>
                  <hr />
                  <p>In-Game Purchases, Users Interact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pro2">
          <div id="pro2-content">
            <h1>
              Buy Call of Duty: Modern Warfare III on Gamer's Armary Store
            </h1>
            <h1>Editions:</h1>
            <div class="edition-div">
              {/* {gameData.map((data, index) => (
                <div class="edition" key={index}>
                  <div class="edition-img">
                    <img src={data.img} alt="" />
                  </div>
                  <div class="edition-tx">
                    <div class="edition-tx-details">
                      <p class="edition-tx-p1">{data.gName}</p>
                      <p class="edition-tx-p2">
                        <span>PS4</span> <span>PS5</span>
                      </p>
                      <div class="edition-des">
                        <ul>
                          <li>{data.li1}</li>
                          <li>{data.li2}</li>
                          <li>{data.li3}</li>
                          <li>{data.li4}</li>
                          <li>{data.li5}</li>
                          <li>{data.li6}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="edition-price">
                      <p class="edition-p1">
                        {data.gPrice}
                        <span> {data.MRP}</span>
                      </p>
                      <p class="edition-p2">
                        {data.discount}
                        <span>{data.timePerioad}</span>
                      </p>
                    </div>
                    <div class="edition-btn">
                      <button>Add to Cart</button>
                      <button>
                        <i class="ri-heart-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))} */}
              <div class="edition">
                <div class="edition-img">
                  <img src={c1} alt="" />
                </div>
                <div class="edition-tx">
                  <div class="edition-tx-details">
                    <p class="edition-tx-p1">Call of Duty®: Warzone™</p>
                    <p class="edition-tx-p2">
                      <span>PS4</span> <span>PS5</span>
                    </p>
                  </div>
                  <div class="edition-price">
                    <p class="edition-p1">Free</p>
                  </div>
                  <div class="edition-btn">
                    <button>Add to Library</button>
                    <button>
                      <i class="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="edition">
                <div class="edition-img">
                  <img src={c2} alt="" />
                </div>

                <div class="edition-tx">
                  <div class="edition-tx-details">
                    <p class="edition-tx-p1">MWIII Cross-Gen</p>
                    <p class="edition-tx-p2">
                      <span>PS4</span> <span>PS5</span>
                    </p>
                    <div class="edition-des">
                      <ul>
                        <li>Modern Warfare® III for PS4™/PS5®</li>
                        <li>Soap Operator Pack</li>
                        <li>Zombie Ghost Operator Skin</li>
                      </ul>
                    </div>
                  </div>
                  <div class="edition-price">
                    <p class="edition-p1">
                      Rs 3,639 <span> Rs 5,599</span>
                    </p>
                    <p class="edition-p2">
                      Save 35% <span>Offer ends soon..</span>
                    </p>
                  </div>
                  <div class="edition-btn">
                    <button>Add to Cart</button>
                    <button>
                      <i class="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="edition">
                <div class="edition-img">
                  <img src={c3} alt="" />
                </div>
                <div class="edition-tx">
                  <div class="edition-tx-details">
                    <p class="edition-tx-p1">MWIII Vault</p>
                    <p class="edition-tx-p2">
                      <span>PS4</span> <span>PS5</span>
                    </p>
                    <div class="edition-des">
                      <ul>
                        <li>Modern Warfare® III for PS4™/PS5®</li>
                        <li>Soap Operator Pack</li>
                        <li>Zombie Ghost Operator Skin</li>
                        <li>Soul Harvester Weapon Blueprint</li>
                        <li>Nemesis Operator Pack</li>
                        <li>30 additional Tier Skips</li>
                      </ul>
                    </div>
                  </div>
                  <div class="edition-price">
                    <p class="edition-p1">Rs 7,999</p>
                  </div>
                  <div class="edition-btn">
                    <button>Add to Cart</button>
                    <button>
                      <i class="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="edition">
                <div class="edition-img">
                  <img src={c4} alt="" />
                </div>
                <div class="edition-tx">
                  <div class="edition-tx-details">
                    <p class="edition-tx-p1">MWII Cross-Gen</p>
                    <p class="edition-tx-p2">
                      <span>PS4</span> <span>PS5</span>
                    </p>
                    <div class="edition-des">
                      <ul>
                        <li>Modern Warfare® II for PS4™/PS5™</li>
                        <li>Warzone™</li>
                      </ul>
                    </div>
                  </div>

                  <div class="edition-price">
                    <p class="edition-p1">Rs 4,999</p>
                  </div>
                  <div class="edition-btn">
                    <button>Add to Cart</button>
                    <button>
                      <i class="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pro3">
          <div id="pro3-content">
            <div id="pro3-content-L">
              <p>What is Call of Duty: Modern Warfare III?</p>
              <h1>The war has changed.</h1>
            </div>
            <div id="pro3-content-R">
              <p>
                Call of Duty returns with an all-new campaign, modernized
                versions of classic Multiplayer maps and an open-world PvE
                Zombies experience.
              </p>
              <p>
                The campaign, a direct sequel to the record-breaking Call of
                Duty: Modern Warfare II, sees Captain Price and Task Force 141
                face off against ultranationalist war criminal Vladimir Makarov
                as he extends his grasp across the world.
              </p>
              <p>
                In Multiplayer, the 16 maps that launched with Modern Warfare 2
                in 2009 return with upgraded graphics, new modes and innovative
                gameplay features.
              </p>
              <p>
                In Modern Warfare Zombies, team up with other squads for the
                first time ever as you work together to survive in the largest
                Zombies map yet.
              </p>
            </div>
          </div>
        </div>
        <div id="pro4">
          <div id="pro4-content">
            <div id="pro4-content-L">
              <p>Platform:</p>
              <p>PS4, PS5</p>
              <p>Release:</p>
              <p>2/11/2023</p>
              <p>Publisher:</p>
              <p>Activision Blizzard Int'l BV</p>
              <p>Genres:</p>
              <p>Action</p>
              <p>Voice</p>
              <p>
                English, French (France), German, Italian, Polish, Russian,
                Spanish
              </p>
              <p>Screen Languages:</p>
              <p>
                English, French (France), German, Italian, Polish, Russian,
                Spanish
              </p>
            </div>
            <div id="pro4-content-R">
              <p>
                To play this game on PS5, your system may need to be updated to
                the latest system software. Although this game is playable on
                PS5, some features available on PS4 may be absent. See
                PlayStation.com/bc for more details.
              </p>

              <p>
                Download of this product is subject to the PlayStation Network
                Terms of Service and our Software Usage Terms plus any specific
                additional conditions applying to this product. If you do not
                wish to accept these terms, do not download this product. See
                Terms of Service for more important information.
              </p>

              <p>
                You can download and play this content on the main PS5 console
                associated with your account (through the “Console Sharing and
                Offline Play” setting) and on any other PS5 consoles when you
                login with your same account.
              </p>

              <p>
                See Health Warnings for important health information before
                using this product.
              </p>

              <p>
                Library programs ©Sony Interactive Entertainment Inc.
                exclusively licensed to Sony Interactive Entertainment Europe.
                Software Usage Terms apply, See eu.playstation.com/legal for
                full usage rights.
              </p>
            </div>
          </div>
        </div>
        <div id="pro5">
          <div id="pro5-content">
            <p>
              *Call of Duty®: Modern Warfare® III, Call of Duty®: Modern
              Warfare® II or Call of Duty®: Warzone™ on PS4™ / PS5® required to
              redeem. Sold / downloaded separately. Must be redeemed by November
              10, 2024.
            </p>
            <p>For more information, please visit www.callofduty.com.</p>
            <p>
              © 2023-2024 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY,
              CALL OF DUTY WARZONE, and MODERN WARFARE are trademarks of
              Activision Publishing, Inc. All other trademarks and trade names
              are the property of their respective owners. This product contains
              software technology licensed from Id Software ('Id Technology').
              Id Technology © 1999-2024 Id Software, Inc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gamelanding;
