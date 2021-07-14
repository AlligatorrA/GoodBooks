import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
        <div>
            
                        <Link className="link" to="/Business" > Biotechnology </Link>
                  
                        <Link className="link" to="/Fiction" > sci-fi </Link>
                 
                        <Link className="link" to="/JavaScript" > Action/History </Link>
                        <hr />
                   
            
            
            
        </div>
    )
}

export default Nav
