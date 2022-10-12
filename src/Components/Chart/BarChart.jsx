import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const bardata = [
  {name: "Google",
  frotend:65,
  backend: 25,
},
{name: "facebook",
  frotend:70,
  backend: 20,
},
{name: "TCS",
  frotend:50,
  backend: 28,
},
{name: "Appsdeployer",
  frotend:95,
  backend: 22,
},
{name: "HCL",
  frotend:75,
  backend: 19,
}


];
const BChart= () => {

  return (<>
  <div>
        <h1 className=" my-3 text-center">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={1}>
        <BarChart
          
           height={400}
          data={bardata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="frontend" fill="#8884d8" />
          <Bar dataKey="backend" fill="#82ca9d" />
          </BarChart>
          </ResponsiveContainer>
          </div>
      </>
       
    );
  
        }

export default BChart;