import React, { ReactElement } from 'react'

interface Props {
    guests: string[];
}

export function GuestList(props: Props): ReactElement {
    return (
        <ul>
            {props.guests.map((guest, index) => {
                return (
                    <li key={guest}>{guest}</li>
                )
            })}
        </ul>
    )
}
