import React from 'react';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import NdewonAvatar from '../assets/profile.jpg';

const Header = () => {
	return (
		<ProfilePicture>
			<Image src={NdewonAvatar} />
			<h2>Dunia Ndewon</h2>
		</ProfilePicture>
	);
};

const ProfilePicture = styled.header`
	img {
		max-width: 8rem;
		max-height: 8rem;
		border: .5rem solid rgba(255, 255, 255, .2);
		border-radius: 50%;
	}

	h2 {
		color: #fff;
	}
`;

export default Header;
