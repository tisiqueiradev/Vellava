import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        color: ${({ theme }) => theme.colors.text.title};
        font-size: 24px;
    }

    a{
        color: ${({ theme }) => theme.colors.text.primary};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.text.primary};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.success};
            color: ${({ theme }) => theme.colors.text.success};
        }
    }

`;

export const ListContainer = styled.div`
    margin-top: 24px;



    header {
        margin-bottom: 8px;
        button {
            background: transparent;
            border: none;
            align-items: center;

            span {
                margin-right: 8px;
                font-weight: bold;
                color: ${({theme}) => theme.colors.text.primary };
            }
            img {
                  transform: rotate(-90deg)
            }
        }

    }

`;

export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0.4);
    padding: 16px;
    border-radius: 4px;
    color: ${({theme}) => theme.colors.text.title};
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 16px;
    }

    .info {
        .title {
            display: flex;
            align-items: center;
        }

        small {
            color: ${({theme}) => theme.colors.text.primary};
            background: ${({ theme }) => theme.colors.primary};
            font-weight: bold;
            padding: 4px;
            border-radius: 4px;
            margin-left: 8px;

        }



        span {

            font-size: 14px;
            color: ${({ theme })=> theme.colors.text.gray[900]};
            padding: 0px;
        }

        .total {

            margin-top: 10px;
            color: ${({theme}) => theme.colors.text.title};
            background: #fff;
            padding: 0;
            margin-left: 12px;
        }



    }

     .actions {
            display: flex;
            align-items: center;

            button {
                background: transparent;
                border: none;
                margin-left: 8px;
            }
        }
`;
