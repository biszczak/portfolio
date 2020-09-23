import styled from 'styled-components';

export const PromoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    padding: 30px;
    text-align: center;
    
    img {
        width: 90%;
    }

    @media (max-width: 1229px) {
        max-width: unset;
        width: 200px;

    }
`;