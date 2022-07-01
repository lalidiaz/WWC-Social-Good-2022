import Button from "./Button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className='header'>
     <Link to='/'><img src='/logo.svg' alt='logo' className='logo' /></Link> 

      {location.pathname === "/" 
        /* ||location.pathname === "/sign-in" ||
        location.pathname === "/sign-up")*/ ? (
          <div className='right-container'>
            <Button text='Register' to='/sign-up' />
            <Button text='Login' white to='/sign-in' />
          </div>
        ) : location.pathname !== "/sign-in" && location.pathname !== "/sign-up" ? (
          <div>
            <div className='right-container'>
              <Link to='/history'>History</Link>
              <Link to='/my-account'>My account</Link>
            </div>
          </div>
        ):""}
    </header>
  );
}
