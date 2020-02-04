import styled from 'vue-styled-components';

const colorProp = { 
    pri: String,
    sec: String 
};

const SButton = styled('button', colorProp)`
    background-color: ${props => props.pri}!important;
    border-color: ${props => props.pri}!important;
    color: #fff!important;
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0s;
    height: 40px;
    padding: 0 15px;
    margin: 10px 0;
    font-weight: 600;
    font-size: 16px;
    &:hover {
        background-color: ${props => props.sec}!important;
        border-color: ${props => props.sec}!important;
    }
`;

export default SButton;
