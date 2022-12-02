import { Radio, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        console.log("Submitted")
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

                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>

                </form>
            </div>
        </div>
    );

}
