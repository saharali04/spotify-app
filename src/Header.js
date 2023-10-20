import React from 'react'
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';
import "./Header.css";
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function Header( { category }) {
    const [{ user, token}, dispatch] = useDataLayerValue();

    const handleLogout = () => {
      dispatch({
        type: "SET_TOKEN",
        token: null,
      })
    }

  return (
    <div>
      <div className="header">
        <div className="header__avatar">
          <Avatar src={user?.images[0]?.url} alt={user?.display_name} sx={{ width: 65, height: 65 }} />
        </div>
        <div className="header__name">
          <Typography variant="h5">Sahar Ali</Typography>
          <Typography>Your Top {category} </Typography>
        </div>
      </div>
    </div>
  )
}

export default Header