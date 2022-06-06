import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [LoginCred, setLoginCred] = useState({});
  const {login} = useContext(AuthContext) ;

  const onChange=(e)=>{
const {name, value} = e.target ;
setLoginCred({
  ...LoginCred, [name]:value ,
})
  };
  const handleSubmit=(e)=>{
    e.preventDefault() ;
    login() ;
  }
  return (
    <div> Login:
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email"
      type='text'
      name="email" 
      onChange={onChange}
      />
      <input data-cy="login-password" 
      type='password'
      name="password"
      onChange={onChange}/>
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
