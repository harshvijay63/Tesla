import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="/" target='_blank' >Tesla-Clone &copy; 2023</a>
                </div>
                <div>
                <a href="mailto:harshvijay63@gmail.com" target='_blank'>Gmail</a>
                <a href="https://www.linkedin.com/in/harsh-vijay-ba6413193/" target="_blank" >LinkedIn</a>
                <a href="https://github.com/harshvijay63" target="_blank" >GitHub</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer