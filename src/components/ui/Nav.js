import { ShoppingBasket } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './nav.css';
const Nav = () => {
	const items = useSelector((store) => store.basket);

	return (
		<nav className='navContainer'>
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
			<div className='basketIconContainer'>
				<Link to='basket'>
					<IconButton
						size='large'
						edge='end'
						aria-label='basket of current user'
						//   aria-controls={menuId}
						aria-haspopup='true'
						//   onClick={handleProfileMenuOpen}
						color='inherit'>
						<Badge badgeContent={items.cartItems.length} color='error'>
							<ShoppingBasket />
						</Badge>
					</IconButton>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
