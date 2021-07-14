import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
        <div>
            
                        <Link className="link" to="/Business" > Business </Link>
                  
                        <Link className="link" to="/Fiction" > Fiction </Link>
                 
                        <Link className="link" to="/JavaScript" > JavaScript </Link>
                        <hr />
                   
            
            
            
        </div>
    )
}

export default Nav
