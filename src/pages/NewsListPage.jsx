import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const placeholderNews = [
    { id: 1, title: "Market Volatility Soars as New Regulations Announced", snippet: "In a surprising turn of events, regulators have announced a new framework targeting DeFi lending platforms, causing a market-wide selloff.", date: "2025-08-07", source: "CryptoNews Daily", coins: "MARKET, BTC", score: -0.75, sentiment: "Negative" },
    { id: 2, title: "Ethereum's Next Upgrade 'Prism' Shows Promising Testnet Results", snippet: "Developers are celebrating the successful deployment of the Prism upgrade on the Sepolia testnet, promising lower gas fees.", date: "2025-08-07", source: "ETH Insights", coins: "ETH", score: 0.82, sentiment: "Positive" },
    { id: 3, title: "Solana's 'Firedancer' Update Promises 10x Throughput Increase", snippet: "The upcoming Firedancer client for Solana is showing impressive results in simulations, aiming to significantly boost network capacity.", date: "2025-08-06", source: "Chain Weekly", coins: "SOL", score: 0.71, sentiment: "Positive" },
    { id: 4, title: "US Treasury Signals Stricter Rules for Unhosted Wallets", snippet: "A new report from the Treasury department suggests enhanced KYC/AML requirements for transactions involving private crypto wallets.", date: "2025-08-06", source: "Policy Watch", coins: "MARKET", score: -0.55, sentiment: "Negative" },
    { id: 5, title: "Avalanche Rush Program Phase 3 Attracts New Wave of Developers", snippet: "The Avalanche Foundation has committed another $50 million to its developer incentive program, focusing on gaming and enterprise apps.", date: "2025-08-05", source: "DeFi Pulse", coins: "AVAX", score: 0.68, sentiment: "Positive" },
    { id: 6, title: "NFT Market Shows Signs of Cooling as Trading Volume Dips 30%", snippet: "Data from major marketplaces indicates a significant slowdown in NFT trading volume, suggesting a potential bear market for digital collectibles.", date: "2025-08-05", source: "The NFT Times", coins: "ETH, MARKET", score: -0.35, sentiment: "Negative" },
    { id: 7, title: "Cardano's Voltaire Era: A Deep Dive into On-Chain Governance", snippet: "With the final pieces of the Voltaire era falling into place, the Cardano community prepares for a new decentralized governance model.", date: "2025-08-04", source: "IOHK Press", coins: "ADA", score: 0.25, sentiment: "Neutral" },
    { id: 8, title: "Ripple (XRP) Gains Ground in Asia-Pacific Remittance Market", snippet: "A new partnership with a major South Korean bank will see XRP utilized for real-time cross-border payments, boosting its utility case.", date: "2025-08-04", source: "Fintech Forward", coins: "XRP", score: 0.75, sentiment: "Positive" }
];

const NewsListPage = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold text-dark-text">Crypto News Feed</h1>
                <div className="relative">
                    <Search size={ 18 } className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search articles..." className="w-full md:w-72 p-2 pl-10 border rounded-md bg-white" />
                </div>
            </div>

            <div className="space-y-6">
                { placeholderNews.map(article => (
                    <Link to={ `/news/${ article.id }` } key={ article.id } className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
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

export default NewsListPage;