import React from "react";
import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer,
    } from 'recharts';

const areadata = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
   
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
   
  },
  
];
const AChart= () => {

    return (<>
    <div>
        <h1 className=" my-3 text-center">Area Chart</h1>
        <ResponsiveContainer width="100%" aspect={1}>
          <AreaChart
            
             height={400}
            data={areadata}
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
            <Area
            type="monotone"
              dataKey="uv"
              stroke="red"
              
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="green"
              
            />
            </AreaChart>
            </ResponsiveContainer>
            </div>
        </>
         
      );
    
          }
  
  export default AChart;