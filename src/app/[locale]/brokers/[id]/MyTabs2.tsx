"use client"

import React from 'react';
import { Tab, Nav, Navbar } from 'react-bootstrap';
import  './myTabs.css'

export default function MyTabs2() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="custom-navbar">
                <Navbar.Brand>Custom styling</Navbar.Brand>
            </Navbar>
            <Tab.Container id="navbar-tab"
                           defaultActiveKey="tab1"
                           className="custom-tab-container">
                <Nav fill variant="tabs">
                    <Nav.Item className='m-2'>
                        <Nav.Link className='nav-link'
                                  eventKey="tab1">
                            Tab 1
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='m-2'>
                        <Nav.Link className='nav-link mr-12'
                                  eventKey="tab2">
                            Tab 2
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='m-2'>
                        <Nav.Link className='nav-link mr-12'
                                  eventKey="tab3">
                            Tab 3
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="tab1"
                              className='content'>
                        This is Tab 1
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab2"
                              className='content'>
                        This is Tab 2
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab3"
                              className='content'>
                        This is Tab 3
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}
