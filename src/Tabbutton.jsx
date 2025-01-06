import "./Tabbutton.css"


function Tabbutton({children, onSelect, isClicked}) {
    return (
        <li>
          <button className={isClicked ? "active" : null} onClick={onSelect}>{children}</button>  
        </li>
    )
}

export default Tabbutton;