import React, { useState } from 'react';
import { ChartCard, PageHeader, ImageModal } from './SharedComponents';

const btcImages = [
    { title: "Daily average sentiment line graph for BTC", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445491/sentiment_daily_line_BTC_acfga2.png" },
    { title: "Fear-Greed Gauge for BTC sentiment", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445479/fear_greed_gauge_BTC_xujy7q.png" },
    { title: "Fear-Greed bar graph for BTC VS market", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754452890/fear_greed_bar_chart_btc_vs_market_y7n6lc.png" },
    { title: "Cumulative returns for BTC", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754452891/cumulative_return_btc_aw6jjp.png" },
    { title: "Strategy VS buy-hold for BTC", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754452891/strategy_vs_buyhold_btc_xt0iw7.png" },
    { title: "Rolling Volatility for BTC", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754452891/rolling_volatility_btc_szuluq.png" },
    { title: "Rolling Sharpe Ratio for BTC", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754452891/rolling_sharpe_ratio_btc_gfhr6m.png" },
    { title: "Return Distribution for BTC", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754452891/return_distribution_btc_wvxi2h.png" },
];

const CoinPricesPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imageUrl, title) => {
        setSelectedImage({ url: imageUrl, title: title });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            { selectedImage && (
                <ImageModal
                    imageUrl={ selectedImage.url }
                    title={ selectedImage.title }
                    onClose={ closeImageModal }
                />
            ) }

            <div className="container mx-auto px-6 py-8">
                <PageHeader title="Coin Analysis: Bitcoin (BTC)" />
                <div className="mb-6">
                    <input type="text" placeholder="Search for a coin (e.g., Ethereum ETH)" className="w-full max-w-sm p-2 border rounded-md" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { btcImages.map(img => (
                        <ChartCard
                            key={ img.title }
                            title={ img.title }
                            imageUrl={ img.url }
                            description="Placeholder insights for this BTC chart."
                            onImageClick={ openImageModal }
                        />
                    )) }
                </div>
            </div>
        </>
    );
};

export default CoinPricesPage;