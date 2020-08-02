import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #A8A8B3;
        font-size: 16px;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.3, '#A8A8B3')}
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            border-radius: 50%;
            height: 120px;
            width: 120px;
            object-fit: cover;
        }

        div {
            margin-left: 24px;

            h1 {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 20px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                color: #6C6C80;
                font-size: 20px;
            }
        }
    }

`;

export const Issues = styled.section`
    margin-top: 80px;

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

export const Error = styled.span`
    color: #c53030;
    margin-top: 40px;
    font-size: 16px;
    display: block;
`;
