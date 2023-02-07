import React from 'react';

export function TabContent({ children, activeTab }) {
  return <div>{children[activeTab]}</div>;
}