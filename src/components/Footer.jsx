import React from "react";

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            <p> CopyrightÂ© {currentYear} </p>
        </footer>
    );
}

export default Footer;
