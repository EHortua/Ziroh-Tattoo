import logo from "../assets/img/Ziroh-Tattoo-Logo.png";

function showMenu () {
  const menu_cont = document.querySelector(".menu-cont");
  const header = document.querySelector("header");
  if (menu_cont.classList.contains("slidein")) {
    document.querySelector(".menu-cont").classList.remove("slidein");
    document.querySelector(".menu-cont").classList.add("slideout");
    header.classList.remove("header-dark");
  } else if (menu_cont.classList.contains("slideout")) {
    document.querySelector(".menu-cont").classList.remove("slideout");
    document.querySelector(".menu-cont").classList.add("slidein");
    header.classList.add("header-dark");
  } else {
    document.querySelector(".menu-cont").classList.add("slidein");
    header.classList.add("header-dark");
    header.classList.add("header-dark");
  }
  
}

export default function Header(){
    
    return (
      <header className="row">
        <div className="logo-cont row">
          <span>Ziroh</span>
          <div className="img-cont row" id="logo-cont">
            <img src={logo} alt="logo" />
          </div>
          <span>Tattoo</span>
        </div>
        <span className="material-icons" id="menu-icon" onClick={showMenu}>
          menu
        </span>
      </header>
    );
}