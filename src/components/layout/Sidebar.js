import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Header from '../Header';

const Sidebar = () => (
	<Fragment>
		<Col lg={2} className='d-none d-lg-block'>
			<SideNav>
				<Header />
			</SideNav>
		</Col>
	</Fragment>
);

const SideNav = styled.aside`
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: #000;
	padding: 4rem 1.3rem;
`;

export default Sidebar;
