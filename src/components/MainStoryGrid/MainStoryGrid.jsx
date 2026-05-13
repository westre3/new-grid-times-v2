import React from 'react';
import styled from 'styled-components';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 48px 0;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media (${QUERIES.tabletAndUp}) {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media (${QUERIES.laptopAndUp}) {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryStoryList = styled(StoryList)`
  & > *:not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }
`;

const OpinionStoryList = styled(StoryList)`
  & > *:not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }

  @media (${QUERIES.tabletOnly}) {
    flex-direction: row;
    justify-content: space-between;

    & > * {
      flex: 1;
    }

    & > *:not(:last-of-type) {
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: none;
      margin-right: 16px;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media (${QUERIES.laptopAndUp}) {
    margin-top: -10px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media (${QUERIES.laptopAndUp}) {
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
  }
`;

export default MainStoryGrid;
