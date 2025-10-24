import { Link,NavLink } from "react-router"
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="py-4">
      <div className="container mx-auto px-2 items-center">
        <div className="flex justify-between">       
          <h1 className="text-lg font-bold italic"><Link to="/">Draflty</Link></h1>
          <nav>
            <ul className="flex gap-30">
              <li><NavLink to="/" className="text-lg hover:text-blue-600">Home</NavLink></li>
              <li><NavLink to="/blogs" className="text-lg hover:text-blue-600 ">Blogs</NavLink></li>
              <li><NavLink to="/profile" className="text-lg hover:text-blue-600">Profile</NavLink></li>
            </ul>
          </nav>
          <div className="flex gap-2">
            <button className="bg-blue-600 hover:bg-blue-400 hover:cursor-pointer transition-colors text-white px-4 py-1 rounded-full text-base" onClick={() => navigate("/login")}>Login</button>
            <button className="bg-neutral-200 hover:bg-neutral-300 hover:cursor-pointer transition-colors text-black px-4 py-1 rounded-full text-base" onClick={() => navigate("/signup")}>Register</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
