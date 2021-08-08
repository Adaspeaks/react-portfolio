import React, { useState } from 'react';
import Header from "./header"
import Footer from "./footer"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"

function Nav(){
    const [currentPage, setCurrentPage] = useState("About");


    const renderPage = () => {
        if (currentPage === "About") {
            return <About/>
        }
        if (currentPage === "Portfolio") {
            return <Portfolio/>
        }
        if (currentPage === "Contact") {
            return <Contact/>
        }  
    }
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main>
                {renderPage()}
            </main>
            <Footer />
            </>
    );
}

export default Nav;