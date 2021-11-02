import logo from "../assets/img/Ziroh-Tattoo-Logo.png";

function showMenu () {
  const menu_cont = document.querySelector(".menu-cont");
  if (menu_cont.classList.contains("slidein")) {
    document.querySelector(".menu-cont").classList.remove("slidein");
    document.querySelector(".menu-cont").classList.add("slideout");
  } else if (menu_cont.classList.contains("slideout")) {
    document.querySelector(".menu-cont").classList.remove("slideout");
    document.querySelector(".menu-cont").classList.add("slidein");
  } else {
    document.querySelector(".menu-cont").classList.add("slideout");
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