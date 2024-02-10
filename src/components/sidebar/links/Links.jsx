import { motion } from "framer-motion";

export default function Links() {
  const links = ["Home", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links">
      {links.map((link) => (
        <a href={`#${link}`} key={link}>
          {link}
        </a>
      ))}
    </motion.div>
  );
}
