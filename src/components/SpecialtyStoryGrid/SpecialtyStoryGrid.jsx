import React from 'react';
import styled from 'styled-components';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';
import { COLORS, QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}>
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map(data => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}>
          Sports
        </SectionTitle>
        <ScrollContainer>
          <SportsStories>
            {SPORTS_STORIES.map(data => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </ScrollContainer>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 100%;
    gap: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr minmax(0, 1fr);
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(183px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section``;

const ScrollContainer = styled.div`
  overflow: auto;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(183px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: revert;
    grid-auto-columns: 220px;
    grid-template-rows: 1fr;
    grid-auto-flow: column;
  }
`;

export default SpecialtyStoryGrid;
