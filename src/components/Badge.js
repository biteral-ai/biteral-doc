import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link'; // Import the Docusaurus Link
import Icon from './Icon';
import './badge.css';

export default function Badge({ children, text, tooltip, variant, icon, transparent, to }) {
    const content = (
        <>
            {icon && <Icon name={icon} />}
            {text || children}
        </>
    );

    const classes = clsx('badge', variant, transparent ? 'transparent' : null, {
        'badge--link': !!to // Optional: class for hover effects
    });

    // If 'to' prop exists, wrap in a Link; otherwise, just a span
    if (to) {
        return (
            <Link
                to={to}
                className={clsx(classes, 'badge-anchor')}
                title={tooltip}
            >
                {content}
            </Link>
        );
    }

    return (
        <span className={classes} title={tooltip}>
            {content}
        </span>
    );
}