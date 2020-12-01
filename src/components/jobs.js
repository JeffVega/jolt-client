import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {BASE_URL }from '../utils/config';
export default function Jobs() {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/jobs`,{
            headers:{Authorization:`Bearer ${localStorage.getItem('authToken')}`}
        }).then(res =>setData(res.data))
        .catch(e => console.error(e))
        
    }, [])
    return (
        <div>
            
        </div>
    )
}
