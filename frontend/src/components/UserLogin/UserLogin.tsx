import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField';
import react from 'react';

import './UserLogin.scss'

type CardProps = {
  username: string;
  password: string;
  onLoginClicked: () => void;
  onSignUpClicked: () => void;
};

const Card = ({ username, password, onLoginClicked, onSignUpClicked }: CardProps) => (
  <aside>

    <div id='userLoginContainer'>
    <div>
    <p>UserName</p>
    <TextField id="username" label="UserName" variant="outlined" value={username}/>
    </div>
    
    <div>
    <p>Password</p>
    <TextField id="password" type="password" label="Password" variant="outlined" value={password}/>
    </div>

    <div className='buttonContainer'>
    <Button variant="contained" onClick={onSignUpClicked}>Sign Up</Button>
    <Button variant="contained" onClick={onLoginClicked}>Login</Button>
    </div>

    </div>
  </aside>
);

const el = <Card username="Welcome!" password="To this example" onSignUpClicked={()=>{}} onLoginClicked={()=>{}}/>;

export default Card;