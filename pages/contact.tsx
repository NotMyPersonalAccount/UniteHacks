import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <p className="text-contact0">Love to hear from you</p>
        <p className="text-contact0">Get in touch 👋</p>
        <form action="/send-data-here" method="post">
          <p>
            <input
              className="text-contact1a"
              type="text"
              id="contactName"
              name="contactName"
              placeholder="Your Name"
            />
          </p>
          <p>
            <input
              className="text-contact1b"
              type="text"
              id="contactEmail"
              name="contactEmail"
              placeholder="Your Email"
            />
          </p>
          <p>
            <input
              className="text-contact2"
              type="text"
              id="contactMessage"
              name="contactMessage"
              placeholder="Message"
            />
          </p>
        </form>
        <Link href="/">
          <button
            className="text-white font-bold px-8 lg:px-12 py-3 rounded-md"
            style={{ backgroundColor: "#66A473", marginTop: "1rem" }}
            type="submit"
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
