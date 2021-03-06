## API Report File for "@edtr-io/internal__plugin-toolbar"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as React from 'react';

// @beta
export interface OverlayButtonProps {
    // (undocumented)
    children?: React.ReactNode;
    // (undocumented)
    className?: string;
    // (undocumented)
    label: string;
    // (undocumented)
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// @beta
export interface OverlayCheckboxProps {
    // (undocumented)
    checked?: boolean;
    // (undocumented)
    label: string;
    // (undocumented)
    onChange?: (checked: boolean) => void;
}

// @beta
export interface OverlayInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    // (undocumented)
    label: string;
}

// @beta
export interface OverlaySelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    // (undocumented)
    label: string;
    // (undocumented)
    options: string[];
    // (undocumented)
    width?: string;
}

// @beta
export interface OverlayTextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    // (undocumented)
    label: string;
}

// @beta
export interface PluginToolbar {
    // (undocumented)
    OverlayButton: React.ComponentType<OverlayButtonProps>;
    // (undocumented)
    OverlayCheckbox: React.ComponentType<OverlayCheckboxProps>;
    // (undocumented)
    OverlayInput: React.ComponentType<OverlayInputProps>;
    // (undocumented)
    OverlaySelect: React.ComponentType<OverlaySelectProps>;
    // (undocumented)
    OverlayTextarea: React.ComponentType<OverlayTextareaProps>;
    // (undocumented)
    PluginToolbarButton: React.ComponentType<PluginToolbarButtonProps>;
    // (undocumented)
    PluginToolbarOverlayButton: React.ComponentType<PluginToolbarOverlayButtonProps>;
}

// @beta
export interface PluginToolbarButtonProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    icon: React.ReactNode;
    // (undocumented)
    label: string;
    // (undocumented)
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    // (undocumented)
    ref: React.Ref<HTMLButtonElement>;
}

// @beta
export interface PluginToolbarOverlayButtonProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    contentRef: React.RefObject<HTMLDivElement>;
    // (undocumented)
    icon: React.ReactNode;
    // (undocumented)
    label: string;
    // (undocumented)
    renderContent?(children: React.ReactNode, additional: {
        close(): void;
    }): React.ReactNode;
}


```
