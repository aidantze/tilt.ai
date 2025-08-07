import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const PublicHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-accent-cyan' : 'hover:text-accent-cyan transition-colors';

    const mobileNavLinkClass = ({ isActive }) =>
        isActive ? 'bg-accent-cyan/10 text-accent-cyan block py-2 px-3 rounded' : 'block py-2 px-3 rounded hover:bg-gray-100';

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2" onClick={ () => setIsOpen(false) }>
                    <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1754529036/tilt.ai_logo_transparent_jodeqx.png" alt="TILT.ai Logo" className="h-8" />
                </Link>

                <div className="hidden md:flex items-center space-x-6 text-dark-text font-medium">
                    <NavLink to="/about" className={ navLinkClass }>About Us</NavLink>
                    <NavLink to="/products" className={ navLinkClass }>Products</NavLink>
                    <NavLink to="/news" className={ navLinkClass }>News</NavLink>
                    <NavLink to="/contact" className={ navLinkClass }>Contact Us</NavLink>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/login" className="text-dark-text font-semibold hover:text-accent-cyan transition-colors">Login</Link>
                    <Link to="/login" className="bg-accent-cyan text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                        Register
                    </Link>
                </div>

                <div className="md:hidden">
                    <button onClick={ () => setIsOpen(!isOpen) }>
                        { isOpen ? <X size={ 24 } /> : <Menu size={ 24 } /> }
                    </button>
                </div>
            </nav>

            { isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <NavLink to="/about" className={ mobileNavLinkClass } onClick={ () => setIsOpen(false) }>About Us</NavLink>
                    <NavLink to="/products" className={ mobileNavLinkClass } onClick={ () => setIsOpen(false) }>Products</NavLink>
                    <NavLink to="/news" className={ mobileNavLinkClass } onClick={ () => setIsOpen(false) }>News</NavLink>
                    <NavLink to="/contact" className={ mobileNavLinkClass } onClick={ () => setIsOpen(false) }>Contact Us</NavLink>
                    <div className="border-t pt-4 space-y-2">
                        <Link to="/login" onClick={ () => setIsOpen(false) } className="block text-center w-full bg-gray-100 text-dark-text font-bold py-2 px-4 rounded-lg">
                            Login
                        </Link>
                        <Link to="/login" onClick={ () => setIsOpen(false) } className="block text-center w-full bg-accent-cyan text-white font-bold py-2 px-4 rounded-lg">
                            Register
                        </Link>
                    </div>
                </div>
            ) }
        </header>
    );
};

export default PublicHeader;