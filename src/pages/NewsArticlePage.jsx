import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const NewsArticlePage = () => {
    // This is placeholder data. In a real app, you'd fetch this based on the articleId from the URL.
    const article = {
        title: "Market Volatility Soars as New Regulations Announced",
        date: "2025-08-05",
        source: "CryptoNews Daily",
        coins: "MARKET, BTC",
        score: -0.75,
        sentiment: "Negative",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (add several paragraphs of placeholder text here)"
    };

    return (
        <div className="container mx-auto px-6 py-8 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
                <Link to="/news" className="flex items-center space-x-2 text-dark-text hover:text-accent-cyan">
                    <ArrowLeft size={ 20 } />
                    <span>Back to News</span>
                </Link>
                <button className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-dark-text py-2 px-4 rounded-md">
                    <Download size={ 16 } />
                    <span>Download</span>
                </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
                <h1 className="text-4xl font-extrabold text-dark-text">{ article.title }</h1>
                <div className="my-4 text-sm text-gray-500">
                    <span>{ article.date }</span> ·
                    <span> { article.source }</span> ·
                    <span className={ `ml-2 font-bold ${ article.sentiment === 'Positive' ? 'text-sentiment-positive' :
                            article.sentiment === 'Negative' ? 'text-sentiment-negative' : 'text-sentiment-neutral'
                        }` }>
                        { article.sentiment } ({ article.score })
                    </span>
                </div>
                <div className="prose max-w-none mt-6">
                    <p>{ article.content }</p>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. ...</p>
                </div>
            </div>
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-dark-text mb-4">Recommended Articles</h3>
                {/* Placeholder recommended articles */ }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow">Fake recommended article 1</div>
                    <div className="bg-white p-4 rounded-lg shadow">Fake recommended article 2</div>
                    <div className="bg-white p-4 rounded-lg shadow">Fake recommended article 3</div>
                </div>
            </div>
        </div>
    );
}

export default NewsArticlePage;