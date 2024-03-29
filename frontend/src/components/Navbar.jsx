import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reset, logout } from '../redux/auth/authSlice'

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to='/'>
      <div className='logo'>
        <svg
          width='248'
          height='44'
          viewBox='0 0 248 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_3_1273)'>
            <path
              d='M176.985 11.8109V0.181885H154.089V7.63189H145.549V26.5319H167.536V36.3419L153.726 36.1599L153.908 32.5259H145.549V43.4259H176.985V19.4429H154.271V7.81388H168.263L168.081 11.8139L176.985 11.8109Z'
              fill='#F98211'
            />
            <path
              d='M22.714 17.989H8.54V0H0V43.61H8.54V26.529H22.714V43.61H32.163V0H22.714V17.989Z'
              fill='#918F8E'
            />
            <path
              d='M66.142 17.989H39.794V43.61H73.774V34.161H66.142V17.989ZM48.153 33.979V26.529H57.602V34.161L48.153 33.979Z'
              fill='#918F8E'
            />
            <path
              d='M79.407 17.989V43.61H105.936V34.161H87.947V26.529H105.936V17.989H79.407Z'
              fill='#918F8E'
            />
            <path
              d='M123.017 0H113.568V43.61H123.017V34.161H131.557V26.529H123.017V0Z'
              fill='#918F8E'
            />
            <path
              d='M140.097 17.989H131.557V26.511H140.097V17.989Z'
              fill='#918F8E'
            />
            <path
              d='M140.097 34.1609H131.557V43.6279H140.097V34.1609Z'
              fill='#918F8E'
            />
            <path
              d='M189.885 26.5291H182.435V43.6101H201.335L201.153 36.3421H189.885V26.5291Z'
              fill='#F98211'
            />
            <path
              d='M208.238 19.0791H189.885V26.5291H201.151V36.3411H208.238V19.0791Z'
              fill='#F98211'
            />
            <path
              d='M213.508 6.36011V43.6101H221.508V23.6221H228.958V15.0821H221.508V6.36011H213.508Z'
              fill='#F98211'
            />
            <path d='M228.953 0H221.503V6.396H228.953V0Z' fill='#F98211' />
            <path
              d='M239.855 22.895H247.305L247.123 15.082H239.491V7.44995H232.405V36.8869H239.855V43.61H247.123V36.16H239.855V22.895Z'
              fill='#F98211'
            />
          </g>
          <defs>
            <clipPath id='clip0_3_1273'>
              <rect width='247.305' height='43.628' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </div>
      </Link>

      <div className='profile'>
        <ul>
          {!user ? (
            <>
              <li>
                <Link to='/login'>
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser /> Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={logoutHandler}>
                  {' '}
                  <FaSignOutAlt /> Logout{' '}
                </button>
              </li>
              <Link to='/profile'>
                <div className='avatar'>
                  <img src={user.image} alt='' />
                </div>
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
