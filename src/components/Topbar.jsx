import React from 'react';
import './topbar/topbar.css';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarContainer">
            <div className="topbarNav">
                <ol className="topbarList">
                    <li className="topbarListItem">Home</li>
                    <li className="topbarListItem">Blog</li>
                    <li className="topbarListItem">Finance</li>
                    <li className="topbarListItem">History</li>
                </ol>
            </div>
            
        </div>      
    </div>
  )
}
