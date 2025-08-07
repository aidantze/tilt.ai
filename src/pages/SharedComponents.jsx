import React from 'react';
import useFetchTableData from '../hooks/useFetchTableData';
import { Download, Plus, Search, X } from 'lucide-react';

export const ChartCard = ({ title, imageUrl, description, onImageClick }) => (
    <div
        className="bg-white rounded-lg shadow p-4 flex flex-col cursor-pointer hover:shadow-xl transition-shadow"
        onClick={ () => onImageClick(imageUrl, title) }
    >
        <h3 className="font-bold text-dark-text mb-2">{ title }</h3>
        <p className="text-sm text-dark-text/70 mb-4">{ description }</p>
        <div className="flex-grow flex items-center justify-center mb-4 bg-gray-100 rounded min-h-[150px]">
            <img src={ imageUrl } alt={ title } className="max-w-full max-h-full object-contain rounded" />
        </div>
        <button className="self-start mt-auto text-sm bg-gray-200 hover:bg-gray-300 text-dark-text py-1 px-3 rounded-md flex items-center space-x-2" onClick={ (e) => e.stopPropagation() }>
            <Download size={ 14 } />
            <span>Download</span>
        </button>
    </div>
);


export const TableCard = ({ title, url }) => {
    const { data, loading, error } = useFetchTableData(url);

    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col col-span-1 md:col-span-2">
            <h3 className="font-bold text-dark-text mb-2">{ title }</h3>
            <div className="flex-grow overflow-auto">
                { loading && <p>Loading data...</p> }
                { error && <p className="text-sentiment-negative">Failed to load data.</p> }
                { !loading && !error && (
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                { data.headers.map(header => <th key={ header } className="p-2 font-semibold">{ header }</th>) }
                            </tr>
                        </thead>
                        <tbody>
                            { data.rows.map((row, index) => (
                                <tr key={ index } className="border-b border-gray-200">
                                    { row.map((cell, cellIndex) => <td key={ cellIndex } className="p-2">{ cell }</td>) }
                                </tr>
                            )) }
                        </tbody>
                    </table>
                ) }
            </div>
        </div>
    );
};

export const PageHeader = ({ title }) => (
    <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-dark-text">{ title }</h1>
        <div className="flex items-center space-x-2">
            <div className="relative">
                <Search size={ 18 } className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search..." className="w-full md:w-64 p-2 pl-10 border rounded-md bg-white shadow-sm" />
            </div>
            <button className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-100"><Plus size={ 20 } /></button>
        </div>
    </div>
);

export const ImageModal = ({ imageUrl, title, onClose }) => {
    const handleContentClick = (e) => e.stopPropagation();

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={ onClose }
        >
            <div
                className="bg-white p-4 rounded-lg shadow-2xl relative max-w-5xl w-full"
                onClick={ handleContentClick }
            >
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg text-dark-text">{ title }</h3>
                    <button onClick={ onClose } className="p-1 rounded-full hover:bg-gray-200">
                        <X size={ 24 } />
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src={ imageUrl }
                        alt={ title }
                        className="max-w-full max-h-[80vh] object-contain rounded"
                    />
                </div>
            </div>
        </div>
    )
}