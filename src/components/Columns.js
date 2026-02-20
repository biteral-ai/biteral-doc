import React from 'react';
import clsx from 'clsx';
import './columns.css';

export default function Columns({ children }) {
  return (
    <div className="columns">
        {React.Children.map(children, (child) => (
          <div className={clsx('column')}>
            {child}
          </div>
        ))}
    </div>
  );
}