import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

function BsTabs (props) {
    return (
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
        </Tabs>
    )
}


export default BsTabs;