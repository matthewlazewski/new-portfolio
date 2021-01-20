import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 640px) {
        dislay: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
        flex-direction: column;
    }
`;