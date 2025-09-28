import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => {
  const onClickLogout = () => {
    alert('Logout functionality yet to be developed')
  }

  const onChangeLanguage = event => {
    const selectedLanguage = event.target.value
    alert(
      `Language switched to: ${selectedLanguage} (functionality coming soon)`,
    )
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img className="website-logo" src="" alt="Dementia Detector Logo" />
          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <img className="website-logo" src="" alt="Dementia Detector Logo" />
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/tests" className="nav-link">
                Tests
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/reports" className="nav-link">
                Reports
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-menu-item">
              <select className="language-dropdown" onChange={onChangeLanguage}>
                <option value="">Language</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
                <option value="Tamil">Tamil</option>
                <option value="Malayalam">Malayalam</option>
              </select>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              Tests
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/reports" className="nav-link">
              Reports
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <select className="language-dropdown" onChange={onChangeLanguage}>
              <option value="">Language</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
              <option value="Malayalam">Malayalam</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
