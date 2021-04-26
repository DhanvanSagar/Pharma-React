import React from 'react';
import './Topbar.css'
import {useHistory} from 'react-router-dom'

const Topbar = (props) => {
    const history = useHistory()
    const Logout = () => {
        history.push("/")
    }

    return ( 
        <header className="top-bar">
            <div className="left-part">
                <div className="logo">
                    <img src="https://www.clipartkey.com/mpngs/m/261-2616407_pharmacy-logo-transparent-clipart-png-download-pharmacy-logo.png" width='50' height='50'></img>
                    <h2>Top Pharma</h2>
                    
                </div>
            </div>
            <button className="button" onClick={Logout} > Log Out </button>
        </header>
    );
}
 
export default Topbar;