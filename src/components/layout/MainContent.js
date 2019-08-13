import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const MainContent = (props) => {
	return (
		<Col lg={10}>
			<Container>{props.children}</Container>
		</Col>
	);
};

export default MainContent;
