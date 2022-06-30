import React from "react";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
        <div className="navnotification">  
<Button variant="text">
<Badge badgeContent={5} color="primary">
  <NotificationAddIcon />
  </Badge>
  </Button>
  <Button variant="text">
<Badge badgeContent={20} color="primary">
  <MailIcon color="action" />
</Badge>
</Button>
<IconButton className="IconButton">
<p className="name">Ram</p>
<Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
      </Stack>
</IconButton>
</div>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
