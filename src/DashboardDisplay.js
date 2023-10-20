import React from 'react'
import { Typography } from '@mui/material';
import "./DashboardDisplay.css"
import BasicTable from './BasicTable';


function DashboardDisplay({ data, category }) {
  return (
    <div className='dashboard__display'>
        
        <h3>Top {category}</h3>
        <BasicTable data={data.slice(0,5)} category={category}></BasicTable>
    </div>
  )
}

export default DashboardDisplay