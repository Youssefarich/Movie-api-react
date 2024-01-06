import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nave.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    
     <nav id="nav">
       
       <form onSubmit={handleSubmit}>
      <span className="pp4">Search for a movie :</span>  <input 
     type="text"
     placeholder="Search for a movie"
     onChange={(e) => setSearch(e.target.value)}
     value={search} className="aaa"
   />
         
       </form>
     </nav>
  );
};

export default Navbar;
