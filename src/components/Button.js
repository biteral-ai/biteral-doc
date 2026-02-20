import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link'; // Import the Docusaurus Link
import Icon from './Icon';
import './button.css';

export default function Button({ children, text, variant, icon = 'go', to }) {
    const content = (
        <>
            {icon && <Icon name={icon} />}
            {text || children}
        </>
    );

    const classes = clsx('button', variant, {
        'badge--link': !!to // Optional: class for hover effects
    });

    // If 'to' prop exists, wrap in a Link; otherwise, just a span
    if (to) {
        return (
            <Link to={to} className={clsx(classes, 'badge-anchor')}>
                {content}
            </Link>
        );
    }

    return (
        <span className={classes}>
            {content}
        </span>
    );
}