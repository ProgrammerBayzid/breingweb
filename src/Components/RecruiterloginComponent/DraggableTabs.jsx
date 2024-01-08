
import  { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Draggable from 'react-draggable';
import 'react-tabs/style/react-tabs.css';

const DraggableTabs = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="draggable-tabs-container p-4">
      <Tabs selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
        <TabList className="flex space-x-2">
          {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'].map((tab, index) => (
            <Draggable key={index}>
              <Tab className="px-4 py-2 cursor-pointer bg-white border border-gray-300 rounded-t-lg">
                {tab}
              </Tab>
            </Draggable>
          ))}
        </TabList>
        {['Content 1', 'Content 2', 'Content 3', 'Content 4', 'Content 5'].map((content, index) => (
          <TabPanel key={index} className="p-4 border border-gray-300 rounded-b-lg">
            {content}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default DraggableTabs;

