import React, { useState } from 'react';
import { ChartCard, TableCard, PageHeader, ImageModal } from './SharedComponents';

const strategyImages = [
    { title: "Cumulative returns for each strategy VS buy-hold (EW)", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445501/strategy_vs_buyhold_all_h7yi8v.png" },
    { title: "Performance heat map for each strategy", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445486/performance_heatmap_strategies_anqlej.png" },
    { title: "Performance metrics radar chart", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445486/performance_metrics_radar_strategy_jwbobz.png" },
    { title: "Rolling Volatility for each portfolio strategy", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445488/rolling_volatility_strategies_x2yscm.png" },
    { title: "Rolling Sharpe Ratio for each portfolio strategy", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445487/rolling_sharpe_ratio_strategies_hrgvml.png" },
    { title: "Return Distribution for each strategy", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445487/return_distribution_all_strategies_vzf1s6.png" },
    { title: "Correlation matrix for each strategy", url: "https://res.cloudinary.com/dg6nuqapw/image/upload/v1754445477/correlation_matrix_all_strategies_oxmqob.png" },
];

const strategyTables = [
    { title: "Strategy performance summary", url: "https://res.cloudinary.com/dg6nuqapw/raw/upload/v1754461708/strategy_performance_summary_od3oi0.txt" },
    { title: "Current strategy signals", url: "https://res.cloudinary.com/dg6nuqapw/raw/upload/v1754450554/current_strategy_signals_mhykkf.txt" },
];

const StrategiesPage = () => {
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
                <PageHeader title="Strategy Analysis" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { strategyTables.map(table => <TableCard key={ table.title } title={ table.title } url={ table.url } />) }
                    { strategyImages.map(img => (
                        <ChartCard
                            key={ img.title }
                            title={ img.title }
                            imageUrl={ img.url }
                            description="Placeholder insights for this strategy chart."
                            onImageClick={ openImageModal }
                        />
                    )) }
                </div>
            </div>
        </>
    );
};

export default StrategiesPage;