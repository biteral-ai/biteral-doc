import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Badge from '@site/src/components/Badge';
import Icon from '@site/src/components/Icon';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Badge>" tag to our Badge component
    // `Badge` will receive all props that were passed to `<Badge>` in MDX
    Badge,
    Icon, // Also registering Icon globally as it is used often
    Tabs,
    TabItem,
};
