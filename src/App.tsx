import React from 'react';

import './App.scss';
import { TabsList } from './components/TabsList';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  handleTabChange = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <TabsList
          ourTabs={tabs}
          selectedTab={selectedTab}
          onTabChange={this.handleTabChange}
        />
      </div>
    );
  }
}

export default App;
