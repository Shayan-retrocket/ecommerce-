import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import './nav.css';
const Nav = () => {
	return (
		<nav>
			<div>
				<span>LOGO</span>
				<span>Home</span>
				<span>Products</span>
				<span>Categories</span>
			</div>
			<div>
				<IconButton
					size='large'
					edge='end'
					aria-label='account of current user'
					//   aria-controls={menuId}
					aria-haspopup='true'
					//   onClick={handleProfileMenuOpen}
					color='inherit'>
					<AccountCircle />
				</IconButton>
			</div>
		</nav>
	);
};

export default Nav;
