import React from 'react';

export function TabNavigation({ tabs, activeTab, handleClick }) {
    return (
      <div className="tabs is-centered is-toggle is-toggle-rounded">
        <ul>
          {tabs.map((tab, index) => (
            <li key={tab} className={activeTab === index ? 'is-active' : ''}>
              <a onClick={() => handleClick(index)}>{tab}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  