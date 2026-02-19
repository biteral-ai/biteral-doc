import React, { Suspense, useMemo } from 'react';
import './icon.css';

export default function Icon({ name, size = 20, className, ...props }) {
  // We use useMemo to prevent re-loading the component on every render
  const SVGIcon = useMemo(() => {
    return React.lazy(() =>
      // This tells Webpack to find the file based on the string name
      import(`!!@svgr/webpack!@site/src/components/icons/${name}.svg`)
        .catch(() => ({ default: () => <span title="Icon not found">⚠️</span> }))
    );
  }, [name]);

  return (
    <Suspense fallback={<div style={{ width: size, height: size }} className={`icon ${className || ''}`} />}>
      <SVGIcon width={size} height={size} className={`icon ${className || ''}`} {...props} />
    </Suspense>
  );
}