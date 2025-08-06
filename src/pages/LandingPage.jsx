import React from 'react';
import { Zap, Activity, Shield } from 'lucide-react';

const Feature = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent-cyan/10 text-accent-cyan">
            { icon }
        </div>
        <h3 className="mb-2 font-bold text-dark-text">{ title }</h3>
        <p className="text-dark-text/70 text-sm">{ children }</p>
    </div>
);

const LandingPage = () => {
    return (
        <div>
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={ { backgroundImage: 'url("https://res.cloudinary.com/dg6nuqapw/image/upload/v1754459887/The_link_between_cryptocurrency_coding_and_market_behavior_txeox0.jpg")' } }
            >
                {/* Semi-transparent overlay */ }
                <div className="absolute inset-0 bg-brand-blue/70"></div>

                {/* Text Content */ }
                <div className="relative container mx-auto px-6 py-28 text-center text-white">
                    <h1 className="text-5xl font-extrabold md:text-6xl">
                        Navigate Crypto with Clarity.
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                        TILT.ai blends advanced market analytics with real-time news sentiment to provide data-driven portfolio strategies. Cut through the noise and invest smarter.
                    </p>
                    <div className="mt-8">
                        <a href="/login" className="bg-accent-cyan text-white font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Feature icon={ <Zap size={ 24 } /> } title="Real-Time Sentiment Analysis">
                            Leverage the power of AI to understand market sentiment as it happens. We analyze thousands of news articles to give you an edge.
                        </Feature>
                        <Feature icon={ <Activity size={ 24 } /> } title="Optimized Strategies">
                            Our platform runs multiple quantitative models, from OLS to Gradient Boosting, to find the optimal portfolio allocation for your goals.
                        </Feature>
                        <Feature icon={ <Shield size={ 24 } /> } title="Data-Driven Decisions">
                            Move beyond hype and speculation. Make investment decisions based on robust, backtested data and comprehensive performance metrics.
                        </Feature>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;