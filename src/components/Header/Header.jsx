import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscriptionCta>
          <Button>Subscribe</Button>
          <SubscriptionLink href='/'>Already a subscriber?</SubscriptionLink>
        </SubscriptionCta>
      </DesktopHeader>
    </>
  );
};

const MobileHeader = styled.header`
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const DesktopHeader = styled.header`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    max-width: 1200px;
    margin-inline: auto;
    margin-block: 16px 72px;
    padding-inline: 16px;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: start;
    align-items: baseline;
  }
`;

const SubscriptionCta = styled.div`
  grid-row: span 2;
  grid-column: 3;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  justify-items: end;
  align-items: baseline;
`;

const SubscriptionLink = styled.a`
  margin-right: 1rem;
  font-size: 0.875rem;
  font-style: italic;
  color: ${COLORS.gray[900]};
  text-decoration: underline;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }
`;

export default Header;
