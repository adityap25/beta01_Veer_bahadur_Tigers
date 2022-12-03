import { Radio, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

export default function Register() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmit(e) {
        console.log("Submitted")
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
                        label="Phone"
                        variant="outlined"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
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
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        sx={{width: '30em'}}
                    />

                    <TextField
                        label="About you"
                        variant="outlined"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        sx={{width: '30em'}}
                    />

                    <br />

                    <Button type="submit" variant="contained" color="primary">
                        Register
                    </Button>

                </form>
            </div>
        </div>
    );

}
