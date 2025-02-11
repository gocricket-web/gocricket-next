import Image from "next/image";

const NavbarIcons = () => (
  <div className="flex gap-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/Facebook-nav.svg"
        alt="Facebook"
        width={30}
        className="navbar-social-icon"
        height={30}
      />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/Instagram-nav.svg"
        alt="Instagram"
        width={30}
        height={30}
        className="navbar-social-icon"
      />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/Youtube-nav.svg"
        alt="YouTube"
        width={30}
        height={30}
        className="navbar-social-icon"
      />
    </a>
  </div>
);

export default NavbarIcons;
