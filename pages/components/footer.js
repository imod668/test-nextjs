import React from 'react';

function Footer () {
    return (
        <div id="footer">
            <div className="container">
                <div className="copyright">Copyright © {new Date().getFullYear()} | 
                    <a href="https://twitter.com/th6688" target="_blank" rel="noreferrer"> By Mrthuan</a> 
                    <span style={{color: '#f52828'}}> &#10084;</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;