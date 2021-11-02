export default function Menu (props) {
    const listLinks = props.list.map((link, index) => 
        <li key={index}>
            {link}
        </li>
    );
    return (
        <div className="menu-cont">
            <nav>
                <ul>
                    {listLinks}
                </ul>
            </nav>
        </div>
    );
}