import React from "react";
import Hero from '../components/Hero';


export default class Contact extends React.Component {
  render() {
    console.log("hello from contact dot js");
    return (
      <div>
      <Hero />
      <section id="contactMe" class="container">
        <div class="container contactMeText"></div>
        <div class="col-1-2 social">
          <h3>Contact me via social media</h3>
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://twitter.com/stanleyyylau"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="https://www.facebook.com/stanleyyylau"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="Profilehttps://cn.linkedin.com/in/stanleyyylau"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="https://github.com/stanleyyylau"><i class="fa fa-github" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div class="col-1-2 contact-form">
          <form>
            <label>
              Name:
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              Email:
              <input type="email" name="name" placeholder="Your Email" required />
            </label>
            <label>
              Message:
              <textarea name="yourMessage" placeholder="Type your messeage here" required></textarea>
            </label>
            <button>Send Message</button>
          </form>
        </div>
      </section>
      </div>
    );
  }
}
