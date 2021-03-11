import React, { ChangeEvent, ReactElement, useState, useRef, useEffect } from 'react'
import { FoundUser } from '../../components/FoundUser'

const users = [
    { name: "Brandon", age: 20 },
    { name: "Dylan", age: 21 },
    { name: "Ryan", age: 22 }
]

export function UserSearch(): ReactElement {
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [foundUser, setFoundUser] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('')
    // when typing a ref, TS doesn't know if the ref will every have a value
    const inputEle = useRef<HTMLInputElement | null>(null) // must initialize ref with value of null

    useEffect(() => {
        // '?' is needed since TS thinks inputEle might be null
        inputEle.current?.focus()
    }, [])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSearch = () => {
        setFoundUser(false)

        for (let user of users) {
            if (user.name === query) {
                setName(user.name)
                setAge(user.age)
                setFoundUser(true)
                break;
            }
        }
    }

    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('dragging')
    }

    const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('end drag')
    }

    return (
        <div>
            <input
                ref={inputEle}
                value={query}
                onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
            <FoundUser
                name={name}
                age={age}
                found={foundUser} />
            <div draggable onDrag={() => console.log('hi')} onDragStart={dragStart} onDragEnd={dragEnd}>Drag Me</div>
        </div>
    )
}
