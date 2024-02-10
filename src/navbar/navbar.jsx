import "./navbar.scss";

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
      {/* sidebar */}

      <div className="wrapper">
        <span className="navbar-brand">SAJJAN DEV</span>

        <div className="socials">
          {socialLinks.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
