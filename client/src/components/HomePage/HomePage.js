import './homepage.css';
import { Link } from 'react-router-dom';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';


import Auth from '../../utils/auth';

const HomePage = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <div className='split left'>
        <div className='centered'>
          <img src='' alt='Movies' />
          <h2>Site movie preview</h2>
          <p></p>
        </div>
      </div>

      <div className='split right'>
        <div className='centered'>
          <img src='img_avatar.png' alt='login' />
          <h2>Login Form</h2>
          <p>it's working but needs styling</p>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className='btn btn-lg btn-info m-2' to='/me'>
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <Link className='btn btn-lg btn-info m-2' to='/home'>
                  Homepage
                </Link>
                <button className='btn btn-lg btn-light m-2' onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Login />
                <Signup />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
