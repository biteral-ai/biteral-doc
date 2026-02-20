import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Badge from '@site/src/components/Badge';
import Button from '@site/src/components/Button';
import Icon from '@site/src/components/Icon';
import Columns from '@site/src/components/Columns';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    Badge,
    Button,
    Icon,
    Columns,
    Tabs,
    TabItem,
};
