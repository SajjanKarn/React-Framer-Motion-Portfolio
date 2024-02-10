import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
  const socialLinks = [
    {
      name: "facebook",
      url: "https://www.facebook.com/",
      icon: "/facebook.png",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/",
      icon: "/instagram.png",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/",
      icon: "/youtube.png",
    },
    {
      name: "dribbble",
      url: "https://www.dribbble.com/",
      icon: "/dribbble.png",
    },
  ];

  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="navbar-brand"
        >
          SAJJAN DEV
        </motion.span>

        <div className="socials">
          {socialLinks.map((social) => (
            <motion.a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={social.icon} alt={social.name} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
