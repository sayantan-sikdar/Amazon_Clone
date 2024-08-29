import React from 'react';
import './Panel.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Panel() {
  return (
    <div className="panel">
        <div className="panel_all panelBorder">
            <MenuOutlinedIcon/> All
        </div>
        <div className="panel_options">
            <p className="panelBorder"> Amazon miniTV </p>
            <p className="panelBorder"> Sell </p>
            <p className="panelBorder"> Best Sellers </p>
            <p className="panelBorder"> Today's Deals </p>
            <p className="panelBorder"> New Releases </p>
            <p className="panelBorder"> Customer Service </p>
            <p className="panelBorder"> Prime </p>
            <p className="panelBorder"> Electronics </p>
            <p className="panelBorder"> Home & Kitchen </p>
            <p className="panelBorder"> Computers </p>
            <p className="panelBorder"> Amazon Pay </p>
            <p className="panelBorder"> Gift Ideas </p>
        </div>
        <div className="panel_deals panelBorder">
            New Launches from Mobiles, Electronics & more | Shop Now
        </div>
    </div>
  )
}

export default Panel;

