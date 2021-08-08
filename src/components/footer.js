import React from 'react';
import "./css/footer.css";

function Footer() {
    return(
        <footer className="page-footer blue darken-4">
            <div className="container">
                <ul className="center-align flexLinks">
                    <li>
                        <a className="grey-text text-lighten-3" 
                        href="https://www.github.com/Adaspeaks/" target="_blank" rel="noreferrer"> 
                        <img src="images/icons/github.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="grey-text text-lighten-3" 
                        href="https://www.linkedin.com/in/johnny-brown-7106a0219/" target="_blank" rel="noreferrer">
                        <img src="images/icons/linkedin.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="grey-text text-lighten-3" href="mailto:adaspeaks@gmail.com" target="_blank" rel="noreferrer">
                        <img src="images/icons/email.png" alt=""/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer-copyright">
            <div className="container center-align">
            © 2021 Johnny Brown
            </div>
            </div>
      </footer>
    )

}

export default Footer;