import styled from '@emotion/styled'

export const BreadBottom = styled('div')`
 height: 13%;
 width: 80%;
 background: linear-gradient(#F08E4A, #E27B36);
 border-radius: 0 0 30px 30px;
 box-shadow: inset -15px 0 #C15711;
 margin: 2% auto;
`;

export const BreadTop = styled('div')`
 height: 20%;
 width: 80%;
 background: linear-gradient(#BC581E, #E27B36);
 border-radius: 50% 50% 0 0;
 box-shadow: inset -15px 0 #C15711;
 margin: 2% auto;
 position: relative;
`;

export const Seeds1 = styled('div')`
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: #FFF;
    left: 30%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(-20deg);
    box-shadow: inset -2px -3px #C9C9C9;
    &:after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #FFF;
        left: -170%;
        top: -260%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px 2px #C9C9C9;
    }

    &:before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #FFF;
        left: 180%;
        top: -50%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px -3px #C9C9C9;
    }

`;

export const Seeds2 = styled('div')`
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: #FFF;
    left: 64%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(10deg);
    box-shadow: inset -3px 0 #C9C9C9;
   
    &:before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #FFF;
        left: 150%;
        top: -130%;
        border-radius: 40%;
        transform: rotate(90deg);
        box-shadow: inset 1px 3px #C9C9C9;
    }

`;

export const Meat = styled('div')`
    width: 80%;
    height: 8%;
    background: linear-gradient(#7F3608, #702E05);
    margin: 2% auto;
    border-radius: 15px;
`;

export const Cheese = styled('div')`
    width: 90%;
    height: 4.5%;
    background: linear-gradient(#F4D004, #D6BB22);
    margin: 2% auto;
    border-radius: 20px;
`;

export const Salad = styled('div')`
    width: 85%;
    height: 7%;
    background: linear-gradient(#228C1D, #91CE50);
    margin: 2% auto;
    border-radius: 20px;
`;

export const Bacon = styled('div')`
    width: 80%;
    height: 3%;
    background: linear-gradient(#BF3813, #C45E38);
    margin: 2% auto;
`;