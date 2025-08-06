import React from 'react'
import DashboardTopCard from '../components/DashboardTopCard'
import { Graphs } from '../components/Graphs'
import { RightGraph } from '../components/RightGraph'
import RecentOrder from '../components/RecentOrder'

export default function page() {
  return (
    <div>
        <div className=" md:ml-[280px]">
              <DashboardTopCard></DashboardTopCard>
              <div className="grid grid-cols-1 lg:grid-cols-2 ml-5 mt-5 mr-5 gap-5 ">
                <div className=""><Graphs ></Graphs></div>
                <div className=""><RightGraph></RightGraph></div>
                
              </div>
              <div className="p-5"><RecentOrder></RecentOrder></div>
        
              
        
             
              
            </div>
      
    </div>
  )
}
