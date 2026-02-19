import React from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import './badge.css';

export default function Badge({ children, text, variant = 'primary', icon, className }) {
    return (
        <span className={clsx('badge', variant, className)}>
            {icon && <Icon name={icon} />}
            {text || children}
        </span>
    );
}
