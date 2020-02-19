import styled from 'vue-styled-components';

const colorProp = { 
    pri: String,
    sec: String 
};

const SButtonOutline = styled('button', colorProp)`
    background-color: transparent!important;
    border-color: ${props => props.pri}!important;
    color: ${props => props.pri}!important;
    border-radius: 3px;
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
        color: ${props => props.sec}!important;
        border-color: ${props => props.sec}!important;
        -webkit-box-shadow: -2px -2px 22px -8px rgba(153,153,153,0.77);
        -moz-box-shadow: -2px -2px 22px -8px rgba(153,153,153,0.77);
        box-shadow: -2px -2px 22px -8px rgba(153,153,153,0.77);
    }
`;

export default SButtonOutline;
