import React, { ReactElement } from 'react'

interface Props {
    color?: string;
    onClick?: () => void;
    children?: React.ReactNode; // accounts for all types of children
}

export function Home(props: Props): ReactElement {
    return (
        <div>
            {props.color}
            <button onClick={props.onClick}>Click Me</button>
            {props.children}
        </div>
    )
}