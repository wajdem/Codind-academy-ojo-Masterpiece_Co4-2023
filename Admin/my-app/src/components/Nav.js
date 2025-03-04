import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from '../img/logo-no-background.png';


const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          {user && (
            <div>
              <span style={{ marginRight: "25px" }}>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Nav;
