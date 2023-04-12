import React, { version } from 'react'
import PropTypes from 'prop-types'  /// short hand (impt)

export default function Navbar({navbar, version}) {
    return (
        <nav className="navbar">
            <div className="container-fluid">
            <p class="fa fa-cloud-sun"></p>

                <span className="navbar-brand mb-0 h1"><h2>{navbar}</h2></span>
                <span className="navbar-brand mb-0 h1">Version &nbsp;&nbsp;&nbsp;&nbsp;{version}</span>

            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    Name : "I Am Default Name",
    version : 7.3
}

Navbar.propTypes = {
    Name : PropTypes.string,
    version : PropTypes.number
}