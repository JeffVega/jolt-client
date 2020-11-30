import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function Jobs() {
    useEffect(() => {
        axios.get('http://localhost:8080/api/jobs',{
            headers:{Authorization:`Bearer ${localStorage.getItem('authToken')}`}
        }).then(res =>setData(res.data))
        .catch(e => console.error(e))
        
    }, [])
    const [Data, setData] = useState([])
    return (
        <div>
            
        </div>
    )
}
