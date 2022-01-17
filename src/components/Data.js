import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Data() {
    const [users, setUsers] = useState([])

    const userList = async () => {
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json();
        setUsers(data.data)
    }

    useEffect(() => {
        let isMounted = true;
        if(isMounted) {
            userList()
        }
        return () => {
            isMounted = false
        }
    }, [users])

    return (
        <div>
            <h1>Data</h1>
            <ul>
            {
                users.map((user) => (
                    <Link key={user.id} to={`/data/${user.id}`}>
                    <li>{user.first_name}</li>
                    </Link>
                ))
            }
            </ul>
        </div>
    )
}

export default Data
