import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function DataDetail() {

    const {id} = useParams()

    const [user, setUser] = useState([])

    const userDetail = async () => {
        const response = await fetch(`https://reqres.in/api/users/${id}`)
        const data = await response.json()
        setUser(data.data)
    }

    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            userDetail()
        }
        return () => {
            isMounted = false
        }
    }, [user])


    return (
        <div>
            <img src={`${user.avatar}`} width={30} alt='' />
            <h1>{user.first_name}</h1>
        </div>
    )
}

export default DataDetail
