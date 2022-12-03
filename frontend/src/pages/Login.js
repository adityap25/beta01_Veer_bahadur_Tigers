import { Radio, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ParticlesBg from "particles-bg";

let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15
};

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        console.log(password);
        await axios.post('http://127.0.0.1:8000/api/user/login/', {
            email,
            password,

        }, {withCredentials : false}) 
        .then(res => {
            if (res.data.msg === 'Login Success') {
                
                const token = res.data.token.access
                console.log(res.data.token.access)
                localStorage.setItem('token', token)
                navigate('/');

            }
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        }
        );

        console.log("Working")

    }

    return (
        <div>
            <div className='form'>

                <h1 className='text-center' style={{ marginTop: '200px' }}>Login</h1>

                <form style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: '50px' }} onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        sx={{width: '30em'}}
                    />
                    <br />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        sx={{width: '30em'}}
                    />

                    <br />

                    <Link to='/register'>Not donated before? Register here</Link>

                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Login
                    </Button>

                </form>
            </div>

            <ParticlesBg type="custom" config={config} bg={true} />

        </div>
    );

}
