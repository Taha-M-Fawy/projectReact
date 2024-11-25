/* eslint-disable no-undef */
import React from 'react';
import './footer.css';

export const Footer = () => {
  // Define footer data
  const footer = [
    {
      title: "Layoouts",
      text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
      title: "All SECTIONS",
      text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testmonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
        title: "Company",
        text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Chanegelog" }],
      },
  ];

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do you Have a Question?</h1>
              <p>We’ll help you grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="Logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts straight to your inbox every month.
              </p>
              <form className="input flex">
                <input
                  type="text"
                  placeholder="Email address"
                  aria-label="Enter your email address"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li >{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>
            2024 RentUp. Design by HackHiglander Team.
        </span>
      </div>
    </>
  );
};

export default Footer;
