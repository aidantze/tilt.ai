import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('login');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="container mx-auto px-6 py-12 flex justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <div className="flex border-b mb-6">
                    <button onClick={ () => setActiveTab('login') } className={ `py-2 px-4 w-1/2 ${ activeTab === 'login' ? 'border-b-2 border-accent-cyan text-accent-cyan font-semibold' : 'text-gray-500' }` }>
                        Login
                    </button>
                    <button onClick={ () => setActiveTab('register') } className={ `py-2 px-4 w-1/2 ${ activeTab === 'register' ? 'border-b-2 border-accent-cyan text-accent-cyan font-semibold' : 'text-gray-500' }` }>
                        Register
                    </button>
                </div>

                { activeTab === 'login' ? (
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                            <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="you@example.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                            <input type="password" id="password" className="w-full p-2 border rounded-md" placeholder="••••••••" />
                            <button type="button" className="text-xs text-accent-cyan hover:underline mt-1 block text-right w-full">Forgot Password?</button>
                        </div>
                        <button type="submit" className="w-full bg-accent-cyan text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                            Login
                        </button>
                        <p className="text-center text-xs text-gray-500 my-4">or continue with</p>
                        <div className="flex justify-center space-x-4">
                            <button type="button" className="p-2 border rounded-md hover:bg-gray-100">Google</button>
                            <button type="button" className="p-2 border rounded-md hover:bg-gray-100">Apple</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={ handleSubmit }>
                        <div className="flex space-x-4 mb-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" className="w-full p-2 border rounded-md" />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" className="w-full p-2 border rounded-md" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="reg_email">Email</label>
                            <input type="email" id="reg_email" className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1" htmlFor="reg_password">Password</label>
                            <input type="password" id="reg_password" className="w-full p-2 border rounded-md" />
                        </div>
                        <button type="submit" className="w-full bg-accent-cyan text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                            Create Account
                        </button>
                    </form>
                ) }
            </div>
        </div>
    );
};

export default LoginPage;