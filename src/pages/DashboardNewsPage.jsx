import React from 'react';
import { Link } from 'react-router-dom';

const placeholderNews = [
    { id: 1, title: "Market Volatility Soars as New Regulations Announced", snippet: "In a surprising turn of events, regulators have announced a new framework...", date: "2025-08-05", source: "CryptoNews Daily", coins: "MARKET, BTC", score: -0.75, sentiment: "Negative" },
    { id: 2, title: "Ethereum's Next Upgrade 'Prism' Shows Promising Testnet Results", snippet: "Developers are celebrating the successful deployment of the Prism upgrade on the Sepolia testnet...", date: "2025-08-05", source: "ETH Insights", coins: "ETH", score: 0.82, sentiment: "Positive" },
    // ... add 5-8 more placeholder articles
];

const DashboardNewsPage = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-dark-text mb-6">Crypto News Feed</h1>
            <div className="space-y-6">
                { placeholderNews.map(article => (
                    <Link to={ `/dashboard/news/${ article.id }` } key={ article.id } className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-dark-text">{ article.title }</h2>
                        <p className="text-dark-text/70 mt-2">{ article.snippet }</p>
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                            <span>{ article.date } · { article.source }</span>
                            <span className={ `font-bold ${ article.sentiment === 'Positive' ? 'text-sentiment-positive' :
                                article.sentiment === 'Negative' ? 'text-sentiment-negative' : 'text-sentiment-neutral'
                                }` }>
                                { article.sentiment } ({ article.score })
                            </span>
                        </div>
                    </Link>
                )) }
            </div>
        </div>
    );
}

export default DashboardNewsPage;