import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';

const DashboardHeader = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setDropdownOpen(false);
        navigate('/');
    };

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-accent-cyan' : 'text-white/80 hover:text-white transition-colors';

    return (
        <header className="bg-brand-blue">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dg6nuqapw/image/upload/v1754459555/tilt.ai_logo_copy_milji0.png" alt="TILT.ai Logo" className="h-8" />
                </Link>
                <div className="hidden md:flex items-center space-x-6 font-medium">
                    <NavLink to="/dashboard" className={ navLinkClass }>Dashboard</NavLink>
                    <NavLink to="/prices" className={ navLinkClass }>Prices</NavLink>
                    <NavLink to="/strategies" className={ navLinkClass }>Strategies</NavLink>
                    <NavLink to="/news" className={ navLinkClass }>News</NavLink>
                </div>
                <div className="relative">
                    <button onClick={ () => setDropdownOpen(!dropdownOpen) } className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600">
                        <User size={ 20 } />
                    </button>
                    { dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <Link to="/settings" onClick={ () => setDropdownOpen(false) } className="flex items-center px-4 py-2 text-sm text-dark-text hover:bg-gray-100">
                                <User size={ 16 } className="mr-2" /> Account
                            </Link>
                            <Link to="/settings" onClick={ () => setDropdownOpen(false) } className="flex items-center px-4 py-2 text-sm text-dark-text hover:bg-gray-100">
                                <Settings size={ 16 } className="mr-2" /> Settings
                            </Link>
                            <button onClick={ handleLogout } className="w-full text-left flex items-center px-4 py-2 text-sm text-dark-text hover:bg-gray-100">
                                <LogOut size={ 16 } className="mr-2" /> Logout
                            </button>
                        </div>
                    ) }
                </div>
            </nav>
        </header>
    );
};

export default DashboardHeader;