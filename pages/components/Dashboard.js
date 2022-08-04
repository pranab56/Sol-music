import React from 'react';
import Body from './Body';
import Right from './Right';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <Body/>
            <Right/>
        </div>
    );
};

export default Dashboard;