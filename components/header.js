import Link from "next/link";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo?      
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href='/'><a className="nav-link active" aria-current="page" href="#">
                Home
              </a></Link>
            </li>
            <li className="nav-item">
              <Link href='/Schedule'><a className="nav-link" href="#">
                Schedule
              </a></Link>
            </li>
            <li className="nav-item">
              <Link href='/Trance'><a className="nav-link" href="#">
                Trance
              </a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
