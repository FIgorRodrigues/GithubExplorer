import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 433px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        height: 72px;
        flex: 1;
        padding: 0 24px;
        border-radius: 5px 0 0 5px;
        border: 1px solid #fff;
        transition: box-shadow 0.2s;
        color: #3a3a3a;

        ${(props) => props.hasError && css`
            border-color: #c53030;
            box-shadow: none;
        `}

        &::placeholder {
            color: #a8a8b3;
        }

        &:focus {
            box-shadow: 1px 1px 15px 5px #fafafa;
        }
    }

    button {
        height: 72px;
        width: 210px;
        font-weight: bold;
        background-color: #04D361;
        color: #fff;
        border: 0;
        border-radius: 0px 5px 5px 0px;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${shade(0.2, '#04D361')};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 12px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background-color: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: flex-start;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }


        img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
        }

        div {

            flex: 1;
            margin: 0 16px;

            strong {
                font-size: 20px;
                color: #3D3D4D;
                line-height: 28px;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
            }
        }

        svg {
            margin-left: auto;
            color: #CBCBD6;
        }
    }
`;
