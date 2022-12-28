import * as React from 'react';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SecurityIcon from '@mui/icons-material/Security';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {

  const routeMatch = useRouteMatch(['/inbox/:id', '/drafts', '/trash']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="HOME" value="/index" to="/index" component={Link} icon={<SecurityIcon />}/>
      <Tab label="LIST PERMISSIONS" value="/permissions" to="/permissions" component={Link} icon={<FormatListBulletedIcon />}/>
      <Tab label="REQUEST PERMISSION" value="/create-permissions" to="/create-permissions" component={Link} icon={<AddModeratorIcon />}/>
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}


export const Nav = () => {
  return (
    // <nav className="nav">
    //   <ul>
    //     <li><NavLink to='/index'>Index</NavLink></li>
    //     <li><NavLink to='/permissions'>Permissions</NavLink></li>
    //     <li><NavLink to='/create-permissions'>Create Permissions</NavLink></li>

    //   </ul>

    // </nav>

    <nav>
      <Box sx={{ width: '100%' }}>
        {/* <Routes>
          <Route path="*" element={<CurrentRoute />} />
        </Routes> */}
        <MyTabs />
      </Box>
    </nav>
  )
}
