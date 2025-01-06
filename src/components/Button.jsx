


export default function Button({children}) {
  return (
    <div className="button-cont">
      <ul>
        <li><button>{children}</button></li>
      </ul>
    </div>
  )
}
