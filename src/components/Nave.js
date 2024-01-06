import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Nave = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <span className="aa">Movies</span><span className="aa2">Flix</span>
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
      <Link to="/" className="ppp">
          populare
        </Link>
      <Link to="teatre" className="ppp">
          teatre
        </Link>
        <Link to="kids" className="ppp">
        kids
        </Link>
        <Link to="drama" className="ppp">
        Drama
        </Link>
        <Link to="comedie" className="ppp">
        Comedie
        </Link>
        <Link to="sear" className="pp">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        
      </form>
    </nav>
    // <nav id="navbar">
    //   <h2>
    //     <Link to="/">
    //       <span className="aa">Movies</span><span className="aa2">Flix</span>
    //     </Link>
    //   </h2>
    //   <form onSubmit={handleSubmit}>
    //   <Link to="teatre">
    //       teatre
    //     </Link>
        // <input
        //   type="text"
        //   placeholder="Busque um filme"
        //   onChange={(e) => setSearch(e.target.value)}
        //   value={search}
        // />
    //     <button type="submit">
    //     <FontAwesomeIcon icon={faMagnifyingGlass} />
    //     </button>
    //   </form>
    // </nav>
  );
};

export default Nave;
