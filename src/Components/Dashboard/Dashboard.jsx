import React from 'react';
import "./dashboard.css";
import BChart from '../Chart/BarChart';
import LChart from '../Chart/LineChart';
import AChart from '../Chart/AreaChart';
import Rchart from '../Chart/PieChart';
const  Dashboard= ()=> {
  return (
     <>
    <div className="row">
     <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bar_bg h-100">
            <div className="card-body">
            <BChart/>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white line_bg h-100">
            <div className="card-body">
             <LChart/>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white area_bg h-100">
            <div className="card-body">
             <AChart/>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white rar_bg h-100">
            <div className="card-body">
             <Rchart/>
              </div>
            </div>
          </div>
          </div>
     
    
    </>
  );
  // style={{marginLeft:"20%"}}
}

export default Dashboard;
