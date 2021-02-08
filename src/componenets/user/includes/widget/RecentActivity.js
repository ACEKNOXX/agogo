import React from 'react'
import LatestActivityCard from './LatestActivityCard'

export default function RecentActivity() {
    return (
        <div>
            <div className="row latest-activity">
                <LatestActivityCard />
                <LatestActivityCard />
                <LatestActivityCard />
            </div>
        </div>
    )
}
