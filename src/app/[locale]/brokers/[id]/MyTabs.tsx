"use client"

import { Tabs, Tab, Button } from 'react-bootstrap';
import  './myTabs.css'

export default function MyTabs() {


    const handleTabSelection = (selectedTabKey: string) => {
        console.log(`Tab clicked: ${selectedTabKey}`);
        // Add your custom logic here
      };

    return (
        <Tabs
          defaultActiveKey="profile"
          id="controlled-tab-example"
          className="broker-tabs"
         
        >
          <Tab eventKey="home" title={<span className="tab-button">Home1</span>} onClick={() => handleTabSelection('home')}>
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title={<span className="tab-button">Profile</span>} onClick={() => handleTabSelection('profile')}>
            Tab content for Profile
          </Tab>
          <Tab eventKey="longer-tab" title="Loooonger Tab">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
      );
}