import React from "react";
import styled from "styled-components";

const Wrapper = styled.h2`
    font-size: 20px;
    color: red;
`

const Title = (props: any) => (<Wrapper>{props.children}</Wrapper>)

const Typography = {
    Title: Title
}

export default Typography