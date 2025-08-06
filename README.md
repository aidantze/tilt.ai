# TILT.ai — Crypto Market News Portfolio Optimisation Investment Product

This project is a cryptocurrency portfolio optimisation service, designed to rebalance holdings in response to abnormal sentiment shifts detected in crypto-related news. It retrieves OHLCV and news data from the CryptoCompare (CoinDesk) API, processes the data through a feature engineering and text pipeline, and performs VADER sentiment analysis and data aggregation to recommend optimal portfolio weights for a user's Crypto portfolio, before returning the results for visualisation in a simple web frontend.

The project is divided into four stages based on the Data Factory Floor for financial market data analytics:
1. Stage 1: data collection, retrieval and preprocessing
2. Stage 2: feature engineering and text processing/cleaning
3. Stage 3: model design and analytics
4. Stage 4: implementation

---

## Data Design and Analysis — Stage 4

This repository takes the results from stage 3 and visualises them in a working frontend prototype.

Note: This is simply just a prototype service, not designed to be fully functional. Most text are placeholders.

### Preparation

Firstly, ensure you create a fork of the repository and clone it.

Also ensure you have `npm` installed.

Then run the following commannds

`npm install`

And then run 

`npm start`

to run a local version of the frontend.

### Page Overview

The project consists of the following pages
- Landing page
- Login/Register page
- Dashboard - dashboard full of tables and relevant metrics as an overview, plus market sentiment info
- Prices - dashboard full of metrics related to a particular coin (e.g. BTC)
- Strategies - dashboard full of tables and metrics related to different portfolio optimisation strategies
- News - list of relevant crypto news articles and sentiment score for each
- Settings - change profile, notifications, and accessibility settings

## Authors & Acknowledgements

This project was developed as part of an academic FinTech project course at UNSW, FINS3645. Inspired by techniques in financial NLP, signal processing, and econometrics, all crypto feature engineering using hybrid market and news data was written by myself but various parts taken from or inspired by Dr Alex Dickerson, lecturer in charge and developer of the python for portfolio optimisation library. 

### License

MIT License — feel free to use and adapt for educational or research purposes.