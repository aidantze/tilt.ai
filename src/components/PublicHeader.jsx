import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const PublicHeader = () => {
    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-accent-cyan' : 'hover:text-accent-cyan transition-colors';

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1754459555/tilt.ai_logo_copy_milji0.png" alt="TILT.ai Logo" className="h-8" />
                </Link>
                <div className="hidden md:flex items-center space-x-6 text-dark-text font-medium">
                    <NavLink to="/about" className={ navLinkClass }>About Us</NavLink>
                    <NavLink to="/products" className={ navLinkClass }>Products</NavLink>
                    <NavLink to="/news" className={ navLinkClass }>News</NavLink>
                    <NavLink to="/contact" className={ navLinkClass }>Contact Us</NavLink>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/login" className="text-dark-text font-semibold hover:text-accent-cyan transition-colors">Login</Link>
                    <Link to="/login" className="bg-accent-cyan text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default PublicHeader;