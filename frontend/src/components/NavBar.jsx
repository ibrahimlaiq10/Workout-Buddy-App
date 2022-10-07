import { Link } from "react-router-dom";
import React from 'react'

function NavBar() {
    return (
        <header>
          <div className="container">
            <Link to="/">
              <h1>Workout Buddy</h1>
            </Link>
          </div>
        </header>
      )
}

export default NavBar