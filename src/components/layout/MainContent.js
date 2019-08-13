import React from 'react';
import Container from 'react-bootstrap/Container';

const MainContent = (props) => {
	return <Container fluid>{props.children}</Container>;
};

export default MainContent;
