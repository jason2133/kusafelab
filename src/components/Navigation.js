import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navigation () {
    const [showMenu, setShowMenu] = useState(false)

    let menu

    if (showMenu) {
        menu =
        <div>
            The menu
            <a href="/"><br/>김대중</a>
            <br/>노무현
            <br/>이명박
        </div>
    }

    return (
        <nav>
            <FontAwesomeIcon 
              icon={faBars} 
              style={{color: "#FFF" }}
              onClick={() => setShowMenu(!showMenu)}
            />

            { menu }
        </nav>
    )
}

export default Navigation
