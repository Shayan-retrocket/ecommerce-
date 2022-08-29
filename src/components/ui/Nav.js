import { ShoppingBasket } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
const Nav = () => {
	return (
		<nav>
			<div className='navItems'>
				<span>
					<Link to='/'>LOGO</Link>
				</span>
				<span>
					<Link to='/'>Home</Link>
				</span>
				<span>
					<Link to='products'>Products</Link>
				</span>
				<span>Categories</span>
			</div>
			<div>
				<Link to='basket'>
					<IconButton
						size='large'
						edge='end'
						aria-label='basket of current user'
						//   aria-controls={menuId}
						aria-haspopup='true'
						//   onClick={handleProfileMenuOpen}
						color='inherit'>
						<Badge badgeContent={17} color='error'>
							<ShoppingBasket />
						</Badge>
					</IconButton>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
