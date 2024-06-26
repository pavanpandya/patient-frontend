import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full">
            <p>&copy; {new Date().getFullYear()} Medilink. All rights reserved.</p>
        </footer>
    );
}

export default Footer;