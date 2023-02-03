import React from "react";
import styled from "styled-components";
const Button = styled.button`
	color: palevioletred;
`
const ReversedButton = props => <Button {...props} chilidren={props.children.split('')} />

function Test() {
    return (
        <div>
          <Button>Normal</Button>
	    <Button as={ReversedButton}>Custom Button</Button>
        </div>
    );
}

export default Test;