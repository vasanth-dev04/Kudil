import React from "react";
import BottomNavbar from "./BottomNavbar";
import SearchBar from "../SearchBar";

// Hero section

function Hero() {
  return (
    <>
      <section className="hero-main">
        <div className="nav-main">
          <nav className="navbar">
            <div className="nav-logo">
              <img src="/nav-logo.png" alt="" />
            </div>
            <div className="nav-links">
              <ul>
                <li>Home</li>
                <li>Properties</li>
                <li>Loan</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="nav-btn">
              <button className="navbtn1">Log in</button>
              <button className="navbtn2">Join Now</button>
            </div>

            {/* Mobile nav button  */}
            {/* <div className="mobile-nav">
              <button>
                <img
                  src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000"
                  alt=""
                />
              </button>
            </div> */}
          </nav>
        </div>

        <div className="hero-title-parent">
          <div className="hero-title">
            <h1>
              Secure Your Future 
              <br />
              with the Right Property
            </h1>
            {/* <p>
              Take control of your financial future by diversifying your
              portfolio with secure and high-yield real estate properties.
            </p> */}
            {/* <div className="hero-btns">
              <button className="herobtn1">Browse Properties</button>
              <button className="herobtn2">Invest Now</button>
            </div> */}
          </div>
        </div>
        {/* <div className="hero-img">
          <img src="/hero-bg.png" alt="" />
        </div> */}
        <SearchBar />
      </section>
    </>
  );
}
// Search bar

// function SearchBar() {
//   return (
//     <>
//       <div className="search-bar-main">
//         <div className="search-bar-sub">
//           <div className="first-line">
//             <h1>Find The Perfect Place To Call <span>Home</span></h1>
//             <div className="property-type">
//               <button><p>Buy</p></button>
//               <button><p>Rent</p></button>
//               <button><p>New Launch</p></button>
//             </div>
//             <input type="search" placeholder="Search 'in Kovilpatti' "/>
//           </div>
//           <div className="second-line">
//             <div>
//             <div className="second-line-cont">
//               <h1>Looking For</h1>
//               <div className="filter-btn-parent">
//                 <div className="filter-btn">
//                   <img src="https://img.icons8.com/?size=100&id=D1pMftxwBIsv&format=png&color=000000" alt="" />
//                   <p>Select Property Type</p>
//                 </div>
//                 <button>
//                   <img src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000" alt="" />
//                 </button>
//               </div>
//             </div>
//             <div className="second-line-cont">
//               <h1>Price</h1>
//               <div className="filter-btn-parent">
//                 <div className="filter-btn">
//                   <img src="https://img.icons8.com/?size=100&id=44168&format=png&color=000000" alt="" />
//                   <p>Choose Price Range</p>
//                 </div>
//                 <button>
//                   <img src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000" alt="" />
//                 </button>
//               </div>
//             </div>
//             <div className="second-line-cont">
//               <h1>Location</h1>
//               <div className="filter-btn-parent">
//                 <div className="filter-btn">
//                   <img src="/location (1).png" alt="" />
//                   <p>Select a Location</p>
//                 </div>
//                 <button>
//                   <img src="https://img.icons8.com/?size=100&id=2760&format=png&color=000000" alt="" />
//                 </button>
//               </div>
//             </div>
//             </div>
//             <div className="search-btn">
//               <button>
//                 <img src="https://img.icons8.com/?size=100&id=132&format=png&color=ffffff" alt="" />
//                 <p>Search Properties</p>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// Counts details

function Count() {
  return (
    <>
      <div className="count-section-main">
        <div className="count-grp">
          <div className="count-cont">
            <h1>₹500M+</h1>
            <h3>TOTAL INVESTMENTS</h3>
          </div>
          <div className="count-cont">
            <h1>10K+</h1>
            <h3>PROPERTIES MANAGED</h3>
          </div>
          <div className="count-cont">
            <h1>100K+</h1>
            <h3>REGISTERED MEMBERS</h3>
          </div>
          <div className="count-cont">
            <h1>8-10%</h1>
            <h3>AVERAGE ANNUAL ROI</h3>
          </div>
        </div>
      </div>
    </>
  );
}

//Secondary section
function SecondarySection() {
  return (
    <>
      <section className="secondary-section-main">
        <div className="secondsection-parent">
          <div className="second-section-left">
            <h1>Unlock the numbers behind smart property investments</h1>
            <p>
              Find the best property fromthe market. We analyze all the
              properties and pickbest for you.
            </p>
            <button className="second-section-btn">
              Find the best for you
            </button>
          </div>
          <div className="second-section-right">
            <div class="div1">
              <div className="grid1-main">
                <div>
                  <img src="/public/nav-logo2.png" alt="" />
                </div>
                <h1>Ai Optimization</h1>
                <div className="grid-input">
                  <input type="text" />
                  <button className="grid-btn">Ask</button>
                </div>
              </div>
            </div>
            <div class="div2">
              <img src="/hot-air-balloon.png" alt="" />
              <div>
                <h1>95%</h1>
                <p>Investor Trust</p>
              </div>
            </div>
            <div class="div3">
              <div className="second-section-third-cont">
                <div className="third-cont">
                  <img
                    src="https://i.pinimg.com/736x/8b/24/97/8b24976eb71950ebf85df8df36e1645e.jpg"
                    alt=""
                  />
                </div>
                <div className="property-details">
                  <h1>Modern downtown villa</h1>
                  <div className="location-details">
                    <p>Autin,Texas</p>
                    <p>1200sq.ft | 2 Bed | 2 Bath</p>
                  </div>
                  <div className="price-details">
                    <h1>$4500(56%)</h1>
                    <button>Invest now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AdvantageSection() {
  return (
    <>
      <section className="adv-section-main">
        <div className="adv-section-title">
          <h1>Your real estate investment advantage </h1>
        </div>
        <div className="adv-grid-parent">
          <div className="grid-main">
            <div className="adv-grid">
              <div className="adv-grid-cont">
                <img src="/public/return-on-investment.png" alt="" />
                <div>
                  <h1>Steady Returns</h1>
                  <p>Earn reliable returns without day-to-day invlovement</p>
                </div>
              </div>
              <div className="adv-grid-cont">
                <img src="/investment.png" alt="" />
                <div>
                  <h1>Reliable growth</h1>
                  <p>
                    Backed by data and expert analysis for long-term success
                  </p>
                </div>
              </div>
              <div className="adv-grid-cont">
                <img src="/insight.png" alt="" />
                <div>
                  <h1>Clear insights</h1>
                  <p>track your investment with real-time insights</p>
                </div>
              </div>
              <div className="adv-grid-cont">
                <img src="/expertise.png" alt="" />
                <div>
                  <h1>Expert assistence</h1>
                  <p>Get expert help tailored to your financial goals</p>
                </div>
              </div>
              <div className="adv-grid-cont">
                <img src="/hourglass.png" alt="" />
                <div>
                  <h1>Long-term value</h1>
                  <p>Invest in appreciating assets with strong future values</p>
                </div>
              </div>
              <div className="adv-grid-cont">
                <img src="/home.png" alt="" />
                <div>
                  <h1>Stress-free investing</h1>
                  <p>we handle complexities while you enjoy the returns</p>
                </div>
              </div>
            </div>
          </div>
          <div className="adv-section-right">
            <p>
              From currated properties to end-to-end mangement,we simplify
              investing so you can focus on growing your wealth.
            </p>
            <button className="second-section-btn" style={{ width: "100%" }}>
              Find the best for you
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Property section

function PropertySection() {
  return (
    <>
      <section className="property-section-main">
        <div className="property-section-title-main">
          <div className="property-section-title">
            <h1>Discover our top investment properties</h1>
            <p>
              Explore handpicked real estate oppurtunities with high growth
              potential and strong returns.
            </p>
          </div>
        </div>
        <div className="property-row">
          <div>
            <div className="property-cont-img">
              <img
                src="https://i.pinimg.com/736x/8b/24/97/8b24976eb71950ebf85df8df36e1645e.jpg"
                alt=""
              />
            </div>
            <div className="property-details">
              <h1>Modern downtown villa</h1>
              <div className="location-details">
                <p>Autin,Texas</p>
                <p>1200sq.ft | 2 Bed | 2 Bath</p>
              </div>
              <div className="price-details">
                <h1>$4500(56%)</h1>
                <button>Invest now</button>
              </div>
            </div>
          </div>
          <div>
            <div className="property-cont-img">
              <img
                src="https://i.pinimg.com/736x/8b/24/97/8b24976eb71950ebf85df8df36e1645e.jpg"
                alt=""
              />
            </div>
            <div className="property-details">
              <h1>Modern downtown villa</h1>
              <div className="location-details">
                <p>Autin,Texas</p>
                <p>1200sq.ft | 2 Bed | 2 Bath</p>
              </div>
              <div className="price-details">
                <h1>$4500(56%)</h1>
                <button>Invest now</button>
              </div>
            </div>
          </div>
          <div>
            <div className="property-cont-img">
              <img
                src="https://i.pinimg.com/736x/8b/24/97/8b24976eb71950ebf85df8df36e1645e.jpg"
                alt=""
              />
            </div>
            <div className="property-details">
              <h1>Modern downtown villa</h1>
              <div className="location-details">
                <p>Autin,Texas</p>
                <p>1200sq.ft | 2 Bed | 2 Bath</p>
              </div>
              <div className="price-details">
                <h1>$4500(56%)</h1>
                <button>Invest now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StepsSection() {
  return (
    <>
      <section className="step-section">
        <div>
          <div className="step-section-title">
            <h1>Invest with confidence in just few steps</h1>
            <p>
              Follow our transperent,data-driven process and start building
              wealth thorugh real estate today{" "}
            </p>
          </div>
          <div className="step-details-row">
            <div className="step-details-cont">
              <h1>Discover properties</h1>
              <p>
                Browse a wide range of carefully curated real estate
                oppurtunities tailored to your investment goals
              </p>
            </div>
            <div className="step-details-cont">
              <h1>Invest with confidence</h1>
              <p>
                Review in-depth property insights,assess potential returns, and
                make secure investments with case{" "}
              </p>
            </div>
            <div className="step-details-cont">
              <h1>Earn & track</h1>
              <p>
                Start generating passive income keeping full control of pur
                investements with real-time perfomance tracking.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function TestimonialSection() {
  return (
    <>
      <section className="testimonial-section-main">
        <div className="property-section-title-main">
          <div className="property-section-title">
            <h1>Trusted by investors, proven by results </h1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="slide-cont-parent">
            <div className="slide-cont">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                earum fuga alias reiciendis tenetur exercitationem vel non
                sapiente eum repudiandae molestiae sunt cumque, voluptates
                officiis eaque provident cupiditate, beatae labore! Nulla, illum
                a unde voluptatibus deleniti accusantium mollitia, quidem eos
                aspernatur ad totam excepturi, enim ipsa veritatis pariatur
                quaerat voluptatum?
              </p>
              <div>
                <img src="" alt="" />
                <div className="user-name">
                  <h1>David Horrison</h1>
                  <p>Found of Swifthub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function FAQSection() {
  return (
    <>
      <section className="faq-section-main">
        <div className="question-section-row">
          <div className="question-section-left">
            <div className="inner-cont">
              <h1>Invest smarter with the right answers</h1>
              <div className="left-bottom-cont">
                <h1>Have any question in your mind?</h1>
                <button>Send message</button>
              </div>
            </div>
          </div>
          <div className="question-section-right">
            <div className="question-cont">
              <h1>1.What is real investment</h1>
            </div>
            <div className="question-cont">
              <h1>2.What is real investment</h1>
            </div>
            <div className="question-cont">
              <h1>3.What is real investment</h1>
            </div>
            <div className="question-cont">
              <h1>4.What is real investment</h1>
            </div>
            <div className="question-cont">
              <h1>5.What is real investment</h1>
            </div>
            <div className="question-cont">
              <h1>6.What is real investment</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function BannerSection() {
  return (
    <>
      <section className="banner-section">
        <div className="banner-title">
          <h1>Invest in real estate with confidence</h1>
          <button>Invest now</button>
        </div>
      </section>
    </>
  );
}
function FooterSection() {
  return (
    <>
      <section className="footer-section">
        {/* Left Contianer start */}
        <div className="footer-left-cont">
          <div className="left-container">
            <div className="f-left-cont-logo">
              <img src="/public/nav-logo-text.png" alt="" />
            </div>
            <div className="f-left-cont-title">
              <h1>
                WE'RE DEDICATED TO HELPING YOU TAKE CONTROL OF YOUR LUXURIOUS
                FUTURE.
              </h1>
            </div>
            <div className="left-cont-img-parent">
            <img src="footer-img.png" alt="" className="footer-img" />
            </div>
          </div>
        </div>

        {/* Left Contianer end */}

        {/* Right container start */}

        <div className="footer-right-cont">
          <div className="footer-first-row">
            <div className="footer-cont-1">
              <div className="f1">
                <img src="/public/footer-red-bg-removed.png" alt="" />
                <p>
                  Stay connected,explore oppurtunities, and invest with
                  confidence.Your real estate sucess starts here
                </p>
              </div>
            </div>
            <div className="footer-cont-2-parent">
              <div className="footer-cont-2">
                <ul>
                  <li>Home</li>
                  <li>Properties</li>
                  <li>Invest</li>
                  <li>Services</li>
                </ul>
              </div>
              <div className="footer-cont-2">
                <ul>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-second-row">
            <div className="footer-follow-cont">
              <div className=" footer-link-main">
                <h1>FOLLOW US</h1>
                <div className="footer-link-parent">
                  <div className="f-link-bar">
                    <div className="circle">
                      <img src="/public/instagram (4).png" alt="" />
                    </div>
                    <p>Instagram</p>
                  </div>
                  <div className="f-link-bar">
                    <div className="circle">
                      <img src="/public/facebook (3).png" alt="" />
                    </div>
                    <p>Facebook</p>
                  </div>
                  <div className="f-link-bar">
                    <div className="circle">
                      <img src="/public/linkedin (1).png" alt="" />
                    </div>
                    <p>Linked in</p>
                  </div>
                  <div className="f-link-bar">
                    <div className="circle">
                      <img src="/public/twitter.png" alt="" />
                    </div>
                    <p>X</p>
                  </div>
                </div>
              </div>
              <div className="f-mail">
                <h1>contactkudil@gmail.com</h1>
              </div>
            </div>
            <div className="footer-cont-2">
              <h1>CONTACT Us</h1>
              <p>123,4th St,</p>
              <p>Indira Nagar,</p>
              <p>Kovilpatti-628502</p>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <div>
              <p>All rights reserved © Kudil</p>
            </div>
            <div>
              <p>
                Developed by <b>Creative Tech Factory</b>
              </p>
            </div>
          </div>
        </div>

        {/* Right container ends */}
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Count />
      <PropertySection />
      {/* <SecondarySection /> */}
      <AdvantageSection />
      <StepsSection />
      <TestimonialSection />
      <FAQSection />
      <BannerSection />
      <FooterSection />
      <BottomNavbar />
    </>
  );
}
