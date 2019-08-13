import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import ProfilePic from '../../assets/profile.jpg';

const Sidebar = () => (
	<Fragment>
		{/* {<SideNav>
				<Navbar variant='dark' expand='lg'>
					<Navbar.Brand href='/'>
						<img src={ProfilePic} className='profile-pic mx-auto mb-2' roundedCircle />
					</Navbar.Brand>
					<Navbar.Collapse id='main-sidebar'>
						<Nav>	
							<Nav.Link>
								<Link to='/'>About</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</SideNav>} */}
	</Fragment>
);

const SideNav = styled.aside`
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 17rem;
	height: 100vh;
	background-color: #000;

	.navbar-brand {
		display: flex;
		margin: auto auto 0;
		padding: .5rem;

		.profile-pic {
			max-width: 10rem;
			max-height: 10rem;
			border: .5rem solid rgba(255, 255, 255, .2);
			border-radius: 50%;
		}
	}
`;

export default Sidebar;
