import React, { useState } from 'react';
import { ChartCard, TableCard, PageHeader, ImageModal } from './SharedComponents';
import { MessageSquare } from 'lucide-react';

const dashboardImages = [
    { title: "Average sentiment bar graph for all coins VS market", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445485/mean_sentiment_all_vs_market_giulql.png" },
    { title: "Fear-Greed bar graph for all coins VS market", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445477/fear_greed_bar_chart_gjjchv.png" },
    { title: "Fear-Greed Gauge for market sentiment", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445481/fear_greed_gauge_MARKET_ivzo9k.png" },
    { title: "Performance metrics radar chart", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445486/performance_metrics_radar_strategy_jwbobz.png" },
    { title: "Daily average sentiment line graph for top 5 coins", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445501/sentiment_daily_line_hllyws.png" },
    { title: "Cumulative returns for the top 5 coins", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445477/cumulative_returns_top5_coins_bvhgbr.png" },
    { title: "Strategy VS buy-hold for top 5 coins", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445501/strategy_vs_buyhold_top5_coins_mecenz.png" },
    { title: "Performance heat map for top 5 EW factors", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445486/performance_heatmap_top5_coins_dbpcr8.png" },
    { title: "Monthly return “candles” for top 5 EW factors", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445485/monthly_return_candles_top5_kpqzim.png" },
    { title: "Rolling Volatility for top 5 coins", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445488/rolling_volatility_top5_k8w3id.png" },
    { title: "Rolling Sharpe Ratio for top 5 coins", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445488/rolling_sharpe_ratio_top5_crhbuu.png" },
    { title: "Return Distribution for top 5 coins", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445487/return_distribution_top5_gyxud9.png" },
    { title: "Correlation matrix for top 5 coins", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445477/correlation_matrix_top5_ouhoxg.png" },
];

const dashboardTables = [
    { title: "Latest sentiment scores", url: "https://res.cloudinary.com/dg6nuqapw/raw/upload/v1754461708/latest_sentiment_scores_th9urd.txt" },
    { title: "Coin performance ranking", url: "https://res.cloudinary.com/dg6nuqapw/raw/upload/v1754450555/coin_performance_summary_qudq2a.txt" }
];

const OnboardingModal = ({ onClose }) => {
    // This is a simplified modal for demonstration
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4">Welcome to TILT.ai!</h2>
                <p className="mb-6">Let's personalize your experience.</p>
                <div className="space-y-4">
                    <p>Step 1: What would you like to use this platform for? (Placeholder)</p>
                    <p>Step 2: What are you interested in? (Placeholder)</p>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I accept the terms and conditions.</label>
                    </div>
                </div>
                <button onClick={ onClose } className="mt-6 w-full bg-accent-cyan text-white font-bold py-2 rounded-lg">
                    Get Started
                </button>
            </div>
        </div>
    )
}

const DashboardPage = () => {
    const [showModal, setShowModal] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imageUrl, title) => {
        setSelectedImage({ url: imageUrl, title: title });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            { showModal && <OnboardingModal onClose={ () => setShowModal(false) } /> }

            { selectedImage && (
                <ImageModal
                    imageUrl={ selectedImage.url }
                    title={ selectedImage.title }
                    onClose={ closeImageModal }
                />
            ) }

            <div className="container mx-auto px-6 py-8">
                <PageHeader title="Dashboard Overview" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    { dashboardTables.map(table => <TableCard key={ table.title } title={ table.title } url={ table.url } />) }
                    { dashboardImages.map(img => (
                        <ChartCard
                            key={ img.title }
                            title={ img.title }
                            imageUrl={ img.url }
                            description="Placeholder text describing the status and insights from this chart."
                            onImageClick={ openImageModal }
                        />
                    )) }
                </div>
                <button className="fixed bottom-8 right-8 w-14 h-14 bg-accent-cyan rounded-full text-white flex items-center justify-center shadow-lg">
                    <MessageSquare size={ 28 } />
                </button>
            </div>
        </>
    );
};

export default DashboardPage;