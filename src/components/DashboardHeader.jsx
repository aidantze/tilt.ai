import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, Menu, X } from 'lucide-react';

const DashboardHeader = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
        navigate('/');
    };

    const closeAllMenus = () => {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
    };

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-accent-cyan' : 'text-white/80 hover:text-white transition-colors';

    const mobileNavLinkClass = ({ isActive }) =>
        isActive ? 'bg-white/10 text-accent-cyan block py-2 px-3 rounded' : 'block py-2 px-3 rounded hover:bg-white/10';

    return (
        <header className="bg-brand-blue text-white">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/dashboard" onClick={ closeAllMenus }>
                    <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1754459555/tilt.ai_logo_copy_milji0.png" alt="TILT.ai Logo" className="h-8" />
                </Link>

                <div className="hidden md:flex items-center space-x-6 font-medium">
                    <NavLink to="/dashboard" className={ navLinkClass }>Dashboard</NavLink>
                    <NavLink to="/prices" className={ navLinkClass }>Prices</NavLink>
                    <NavLink to="/strategies" className={ navLinkClass }>Strategies</NavLink>
                    <NavLink to="/dashboard/news" className={ navLinkClass }>News</NavLink>
                </div>

                <div className="hidden md:block relative">
                    <button onClick={ () => setDropdownOpen(!dropdownOpen) } className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600">
                        <User size={ 20 } />
                    </button>
                    { dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-dark-text">
                            <Link to="/settings" onClick={ closeAllMenus } className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                                <Settings size={ 16 } className="mr-2" /> Settings
                            </Link>
                            <button onClick={ handleLogout } className="w-full text-left flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                                <LogOut size={ 16 } className="mr-2" /> Logout
                            </button>
                        </div>
                    ) }
                </div>

                <div className="md:hidden">
                    <button onClick={ () => setMobileMenuOpen(!mobileMenuOpen) }>
                        { mobileMenuOpen ? <X size={ 24 } /> : <Menu size={ 24 } /> }
                    </button>
                </div>
            </nav>

            { mobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <NavLink to="/dashboard" className={ mobileNavLinkClass } onClick={ closeAllMenus }>Dashboard</NavLink>
                    <NavLink to="/prices" className={ mobileNavLinkClass } onClick={ closeAllMenus }>Prices</NavLink>
                    <NavLink to="/strategies" className={ mobileNavLinkClass } onClick={ closeAllMenus }>Strategies</NavLink>
                    <NavLink to="/dashboard/news" className={ mobileNavLinkClass } onClick={ closeAllMenus }>News</NavLink>
                    <div className="border-t border-white/20 pt-4 mt-2 space-y-2">
                        <Link to="/settings" onClick={ closeAllMenus } className="flex items-center py-2 px-3 rounded hover:bg-white/10">
                            <Settings size={ 16 } className="mr-2" /> Settings
                        </Link>
                        <button onClick={ handleLogout } className="w-full text-left flex items-center py-2 px-3 rounded hover:bg-white/10">
                            <LogOut size={ 16 } className="mr-2" /> Logout
                        </button>
                    </div>
                </div>
            ) }
        </header>
    );
};

export default DashboardHeader;