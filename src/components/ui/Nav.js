import { ShoppingBasket } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './nav.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Nav = () => {
	const items = useSelector((store) => store.basket);
	const likes = useSelector((store) => store.like);

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
						color='inherit'
						id='ShoppingBasket'>
						<Badge badgeContent={items.cartItems.length} color='error'>
							<ShoppingBasket />
						</Badge>
					</IconButton>
				</Link>
				<Link to='likes'>
					<IconButton
						size='large'
						edge='end'
						aria-label='likes of current user'
						//   aria-controls={menuId}
						aria-haspopup='true'
						//   onClick={handleProfileMenuOpen}
						color='inherit'>
						<Badge badgeContent={likes.likes.length} color='error'>
							<FavoriteIcon />
						</Badge>
					</IconButton>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
