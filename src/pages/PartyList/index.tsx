import React, { ChangeEvent, ChangeEventHandler, ReactElement, useState } from 'react'
import { GuestList } from '../../components/GuestList'

export function PartyList(): ReactElement {
    const [guestList, setGuestList] = useState<string[]>([]) // annotating type of state
    const [name, setName] = useState<string>('')

    // event listener with type for change event of input element
    const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const addName = () => {
        setGuestList([...guestList, name])
        setName('')
    }

    return (
        <>
            <GuestList guests={guestList}/>
            <input value={name} onChange={handleNameInputChange} />
            <button onClick={addName}>Add Name</button>
        </>
    )
}
