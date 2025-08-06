import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PublicHeader from './components/PublicHeader';
import DashboardHeader from './components/DashboardHeader';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CoinPricesPage from './pages/CoinPricesPage';
import StrategiesPage from './pages/StrategiesPage';
import NewsListPage from './pages/NewsListPage';
import NewsArticlePage from './pages/NewsArticlePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const location = useLocation();
  const isPublicPage = [
    '/', '/login', '/news', '/about', '/products', '/contact'
  ].includes(location.pathname) || location.pathname.startsWith('/news/');

  return (
    <div className="flex flex-col min-h-screen bg-background-grey">
      { isPublicPage ? <PublicHeader /> : <DashboardHeader /> }
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/dashboard" element={ <DashboardPage /> } />
          <Route path="/prices" element={ <CoinPricesPage /> } />
          <Route path="/strategies" element={ <StrategiesPage /> } />
          <Route path="/news" element={ <NewsListPage /> } />
          <Route path="/news/:articleId" element={ <NewsArticlePage /> } />
          <Route path="/settings" element={ <SettingsPage /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;