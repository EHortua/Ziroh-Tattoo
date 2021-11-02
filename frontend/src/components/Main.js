import Menu from "./Menu";

export default function Main() {
    
    return (
      <main>
        <Menu list={listItems} />
        
      </main>
    );
}

const listItems = ["reserva tu turno", "tienda", "portafolio", "contacto"];