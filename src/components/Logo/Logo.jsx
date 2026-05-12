import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { QUERIES } from '../../constants';

const Logo = props => {
  return (
    <Wrapper>
      <Link href='/' {...props}>
        New Grid Times
      </Link>
      <TodaysDate>{format(new Date(), 'EEEE, MMMM do, yyyy')}</TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-row: span 2;
    grid-column: 2;
    grid-template-rows: subgrid;
    grid-template-columns: subgrid;
    align-items: baseline;
  }
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: 3rem;

  @media (${QUERIES.tabletAndUp}) {
    font-size: 4rem;
    margin-bottom: -10px;
  }
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -1rem;

  @media (${QUERIES.laptopAndUp}) {
    margin-top: 0;
  }
`;

export default Logo;
