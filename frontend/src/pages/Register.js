import { Radio, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [desc, setDesc] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        console.log(password);
        await axios.post('http://localhost:3001/admin/login', {
            email,
            name,
            mobile,
            desc,
            password,
            password2

        }).then(res => {
            if (res.data === 'Success') {
                navigate('/login');
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

                <h1 className='text-center' style={{ marginTop: '200px' }}>Register</h1>

                <form style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: '50px' }} onSubmit={handleSubmit}>
                    
                    <TextField
                        label="Name"
                        variant="outlined"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        sx={{width: '30em'}}
                    />

                    <br />

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
                        label="Mobile"
                        variant="outlined"
                        required
                        value={mobile}
                        onChange={e => setMobile(e.target.value)}
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

                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        required
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        sx={{width: '30em'}}
                    />

                    <TextField
                        label="About you"
                        variant="outlined"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        sx={{width: '30em'}}
                    />

                    <br />

                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Register
                    </Button>

                </form>
            </div>
        </div>
    );

}
 