import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import { AuthContext } from '../../contexts/AuthContext';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, handleAuth, ratedDish, savedUserData } =
    useContext(AuthContext);

  const [button, setButton] = useState(false);

  const handleToggle = () => {
    if (button) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const logoutHandler = () => {
    savedUserData(ratedDish);
    handleAuth(false);
    navigate('/');
    return;
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dish-Poll
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <div className={styles.titleMobile}>
                {auth && (
                  <Link
                    to={button ? '/PoleResult' : '/home'}
                    onClick={handleToggle}
                  >
                    {button ? 'Polled Dishes' : 'Home'}
                  </Link>
                )}
                <br />
                {auth && (
                  <Link to={'/'} onClick={logoutHandler}>
                    Logout
                  </Link>
                )}
              </div>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <h5>Dish Poll</h5>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div className={styles.title}>
              {auth && (
                <Link
                  to={button ? '/PoleResult' : '/home'}
                  onClick={handleToggle}
                >
                  {button ? 'Polled Dishes' : 'Home'}
                </Link>
              )}
              <br />
              {auth && (
                <Link to={'/'} onClick={logoutHandler}>
                  Logout
                </Link>
              )}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
