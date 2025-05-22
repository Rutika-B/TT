import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Holdings from './components/Holdings.jsx'
import Position from './components/GetPosition.jsx'
import ReportMeta from './components/ReportMetadata.jsx'
import FundMargin from './components/FundMargin.jsx'
import Borkerage from './components/BorkerageDetail.jsx'
import OrderBook from './components/OrderBook.jsx'
import Historical from './components/HistoricalData.jsx'
import Profitloss from './components/profitLoss.jsx'
import Login from './components/Login.jsx'
import MarketQot from './components/marketQuote.jsx'
import Intra from './components/OHLC.jsx'
import OHLCqot from './components/OHLC.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Holdings/> */}
    {/* <Position/> */}
    {/* <ReportMeta/> */}
    {/* <Profitloss/> */}
    {/* <Login/> */}
    {/* <FundMargin/> */}
    {/* <Borkerage/> */}
    {/* <OrderBook/> */}
    {/* <Historical/> */}
    <MarketQot/>
    {/* <OHLCqot/> */}
  </React.StrictMode>,
)
