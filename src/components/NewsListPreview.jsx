import React from 'react';
import { Link } from 'react-router-dom';

const NewsListPreview = ({ title, articles }) => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-dark-text mb-4">{ title }</h2>
            <div className="space-y-4">
                { articles.map(article => (
                    <Link
                        to={ `/dashboard/news/${ article.id }` }
                        key={ article.id }
                        className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-semibold text-dark-text">{ article.title }</h3>
                        <p className="text-sm text-dark-text/70 mt-1">{ article.snippet }</p>
                        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
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
};

export default NewsListPreview;