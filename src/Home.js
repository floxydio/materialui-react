
import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Cards';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
    const [profile, setProfile] = useState([]);
    const [loadData, setLoadData] = useState(true);
    let [color, setColor] = useState("red");

    useEffect(() => {
        setTimeout(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/`, {params: {
            _limit: 3
        }})
        .then(res => {
            return res.data;
        })
        .then(data => {
            setProfile(data)
            setLoadData(false)
        })
    }, 3000);
},)

    return (
        <>
        <Navbar />
        <Container maxWidth="sm" style={{marginTop: '70px', display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center',}}>
        {loadData && <ClipLoader size={150} color={color} />}
        {profile && <Card profile={profile}  />}
        </Container>
        </>
    )
}
