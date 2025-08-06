import React, { useState } from 'react';

const SettingsPage = () => {
    const [activeSection, setActiveSection] = useState('profile');

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-dark-text mb-8">Settings</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="md:w-1/4">
                    <nav className="space-y-1">
                        <button onClick={ () => setActiveSection('profile') } className={ `w-full text-left p-2 rounded ${ activeSection === 'profile' ? 'bg-accent-cyan/10 text-accent-cyan' : 'hover:bg-gray-100' }` }>Profile</button>
                        <button onClick={ () => setActiveSection('accessibility') } className={ `w-full text-left p-2 rounded ${ activeSection === 'accessibility' ? 'bg-accent-cyan/10 text-accent-cyan' : 'hover:bg-gray-100' }` }>Accessibility</button>
                        <button onClick={ () => setActiveSection('notifications') } className={ `w-full text-left p-2 rounded ${ activeSection === 'notifications' ? 'bg-accent-cyan/10 text-accent-cyan' : 'hover:bg-gray-100' }` }>Notifications</button>
                        <button onClick={ () => setActiveSection('api') } className={ `w-full text-left p-2 rounded ${ activeSection === 'api' ? 'bg-accent-cyan/10 text-accent-cyan' : 'hover:bg-gray-100' }` }>API Key</button>
                    </nav>
                </aside>
                <section className="flex-1 bg-white p-8 rounded-lg shadow">
                    { activeSection === 'profile' && <div>
                        <h2 className="text-2xl font-bold mb-6">Profile</h2>
                        {/* Placeholder Content */ }
                        <p>First Name: John (Placeholder)</p>
                        <p>Last Name: Doe (Placeholder)</p>
                        <p>Email: john.doe@example.com (Placeholder)</p>
                        <button className="mt-4 text-sentiment-negative hover:underline">Delete Account</button>
                    </div> }
                    { activeSection === 'accessibility' && <div>
                        <h2 className="text-2xl font-bold mb-6">Accessibility</h2>
                        <p>Theme: Light / Dark / System (Placeholder)</p>
                        <p>Grayscale Toggle (Placeholder)</p>
                    </div> }
                    { activeSection === 'notifications' && <div>
                        <h2 className="text-2xl font-bold mb-6">Notifications</h2>
                        <p>Notify by Email (Checkbox Placeholder)</p>
                        <p>Notify by SMS (Checkbox Placeholder)</p>
                    </div> }
                    { activeSection === 'api' && <div>
                        <h2 className="text-2xl font-bold mb-6">API Key</h2>
                        <button className="bg-gray-200 p-2 rounded">Copy API Key (Placeholder)</button>
                    </div> }
                </section>
            </div>
        </div>
    );
};

export default SettingsPage;