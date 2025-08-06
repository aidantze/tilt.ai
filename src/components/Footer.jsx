import React from 'react';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-blue text-white/80 mt-16">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-white text-lg mb-2">TILT.ai</h3>
                        <p className="text-sm">Navigate Crypto with Clarity.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-2">Quick Links</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Products</a></li>
                            <li><a href="#" className="hover:text-white">News</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-2">Contact</h3>
                        <p className="text-sm">123 Blockchain St,<br />Sydney, NSW 2000, Australia</p>
                        <p className="text-sm mt-2">contact@tilt.ai</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white"><Twitter /></a>
                            <a href="#" className="hover:text-white"><Linkedin /></a>
                            <a href="#" className="hover:text-white"><Youtube /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm">
                    <p>© 2025 TILT.ai. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;