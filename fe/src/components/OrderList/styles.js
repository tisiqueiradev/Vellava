import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 24px;
    }

    a{
        color: ${({ theme }) => theme.colors.text.primary};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.primary};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.text.primary};
        }
    }

`;
