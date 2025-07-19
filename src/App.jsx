import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div>
      <nav id="nav">
        <span className="material-symbols-outlined icon">eco</span>
        <a id="title"><i>Greenify</i></a>
        <span className="material-symbols-outlined icon home">home</span>
        <a id="home" href="#main" className="navElements">Home</a>
        <span className="material-symbols-outlined icon">info</span>
        <a id="about" href="#aboutUs" className="navElements">About Us</a>
        <span className="material-symbols-outlined icon">mail</span>
        <a id="contact" href="#contact-us" className="navElements">Contact</a>
        <button id="clearbtn" className="firstbtn">Sign In</button>

        {/* Profile Dropdown */}
        <div className="profile-dropdown">
          <button id="clearbtn" onClick={toggleProfileMenu}>Profile</button>
          {showProfileMenu && (
            <div className="dropdown-menu">
              <p><b>Coins:</b> 150</p>
              <p><b>Recycled Items:</b> 25</p>
              <p><b>Trophies:</b> 3</p>
            </div>
          )}
        </div>
      </nav>

      <section id="main">
        <h1><b>EXPLORE<br />RECYCLE<br />REWARD</b></h1>
        <p id="description">
          Greenify introduces Recycoin — a reward system for smart recycling.<br />
          Drop off waste, collect coins, exchange for goods, and unlock eco-trophies.<br />
          It’s more than cleanup — it’s a <b>next Gen</b> green revolution.
        </p>

        <button id="book">RECYCLE NOW</button>

        {/* Recycle Category Boxes */}
        <div id="recycle-boxes">
          <div className="recycle-box">
            <h3>♳ Recyclable Plastics</h3>
            <p>Drop bottles, containers, wrappers.</p>
          </div>
          <div className="recycle-box">
            <h3>⚡ E-Waste</h3>
            <p>Recycle chargers, phones, cables.</p>
          </div>
          <div className="recycle-box">
            <h3>📄 Used Paper</h3>
            <p>Old books, newspapers, printed sheets.</p>
          </div>
        </div>

        <section id="links">
          <div id="line"></div>
          <a href="https://www.linkedin.com/in/sakib-mukhtar-793869322" target="_blank" className="socialLink" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill socialIcon"></i>
          </a>
          <a href="https://github.com/Sakib70e" className="socialLink" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill socialIcon"></i>
          </a>
          <a href="https://www.instagram.com/sakib_mukhtar/" target="_blank" className="socialLink" rel="noopener noreferrer">
            <i className="ri-instagram-fill socialIcon"></i>
          </a>
        </section>
      </section>

      <section id="aboutUs">
        <h1><b>ABOUT US</b></h1>
        <div id="para">
          <p className="p1">
  We are <strong>S.R.S Enterprise</strong> — a youth-led innovation hub,
</p>
<p className="p1">
  <strong>Greenify</strong> is our flagship mission — a revolutionary smart waste management platform that transforms everyday waste into value by rewarding users with eco-coins, achievements, and real-world impact.
</p>
<p className="p1">
  This project is being built from the ground up — with passion, purpose, and a belief that small actions, when powered by technology and community, can change the world.
</p>

        </div>
      </section>

      <section id="team">
        <h1>OUR<br />TEAM</h1>
        <div id="t1">
          <div id="sakib">
            <h2>Sakib Mukhtar</h2>
            Sakib is responsible <br />for...
            <div id="ceo">CEO</div>
          </div>
        </div>
        <div id="t1">
          <div id="sakib">
            <h2>Subhajit Mukherjee</h2>
             Subhajit is responsible <br />for...
            <div id="ceo">Founder</div>
          </div>
        </div>
        <div id="t1">
          <div id="sakib">
            <h2>Ranadeep Bhowmik</h2>
            Ranadeep is responsible <br />for...
            <div id="ceo">CFO</div>
          </div>
        </div>
      </section>

     <section id="gameStructure">
  <h1>OUR PROGRESS</h1>
  <div className="game-levels">
    <div className="level-box">
      <i className="ri-flag-fill level-icon"></i>
      <h3>Level 1</h3>
      <p>Start by recycling your first item.<br/>
      (Bronze Trophy)
      </p>
    </div>

    <div className="connector">
      <span className="dot-line"></span>
    </div>

    <div className="level-box">
      <i className="ri-flag-fill level-icon"></i>
      <h3>Level 2</h3>
      <p>Complete 10 items and unlock rewards.
        <br/>(Silver Trophy)
      </p>
    </div>

    <div className="connector">
      <span className="dot-line"></span>
    </div>

    <div className="level-box coming-soon">
      <i className="ri-flag-fill level-icon"></i>
      <h3>More Levels</h3>
      <p>Coming soon with bigger challenges!</p>
    </div>
  </div>
</section>



      <section id="contact-us">
        <h1>CONTACT US</h1>
        <form id="contact-form" onSubmit={(e) => {
          e.preventDefault();
          document.getElementById("response-msg").style.display = "block";
          document.getElementById("response-msg").textContent = "Thank you for your message!";
        }}>
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <textarea id="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p id="response-msg" style={{ display: "none", color: "lightgreen", marginTop: "15px" }}></p>
      </section>
    </div>
  );
}
