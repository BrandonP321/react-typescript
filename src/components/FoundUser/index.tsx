import React, { ReactElement } from 'react'

interface Props {
    name: string;
    age: number;
    found: boolean;
}

export function FoundUser(props: Props): ReactElement {
    return (
        <div>
            {props.found ?
                <>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                </>
                :
                <p>No User Found</p>
            }
        </div>
    )
}
