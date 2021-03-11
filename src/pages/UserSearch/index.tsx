import React, { ChangeEvent, ReactElement, useState } from 'react'
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

    return (
        <div>
            <input value={query} onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
            <FoundUser 
                name={name}
                age={age}
                found={foundUser}/>
        </div>
    )
}
