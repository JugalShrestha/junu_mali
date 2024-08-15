import { Link } from "react-router-dom"

const Navbar = (() => {
  return(
    <div className="navbar">
      <div className="logo">
        @Junu_Mali
      </div>
      <Link to={'/'} className="home-btn">
        <img src='./home-icon.png'/>
      </Link>
    </div>
  )
})

Navbar.displayName = "Navbar"

export default Navbar