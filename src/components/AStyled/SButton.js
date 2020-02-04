import styled from 'vue-styled-components';

const colorProp = { 
    priColor: String,
    secColor: String 
};

const SButton = styled('button', colorProp)`
    background-color: ${props => props.priColor}!important;
    border-color: ${props => props.priColor}!important;
    color: #fff!important;
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0s;
    height: 40px;
    padding: 0 15px;
    &:hover {
        background-color: ${props => props.secColor}!important;
        border-color: ${props => props.secColor}!important;
    }
`;

export default SButton;
