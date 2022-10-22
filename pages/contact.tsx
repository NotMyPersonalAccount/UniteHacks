import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div>      
        <p className="text-contact0">Love to hear from you</p>
        <p className="text-contact0">Get in touch 👋</p>
        <form action="/send-data-here" method="post">
        <input className="text-contact1a" type="text" id="contactName" name="contactName" placeholder="Your Name"/>
        <input className="text-contact1b" type="text" id="contactEmail" name="contactEmail" placeholder="Your Email"/>
        <input className="text-contact2" type="text" id="contactMessage" name="contactMessage" placeholder="Message"/>
        <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
};

export default Contact;