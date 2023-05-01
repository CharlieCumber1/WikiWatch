import styled from 'styled-components';
import { contentWidthForColumns } from '../../helpers/gridSizes';
import { mediaQuery } from '../../helpers/mediaQuery';

export const OuterWrapper = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  width: ${contentWidthForColumns(2)};

  ${mediaQuery.fourColumns`
    width: ${contentWidthForColumns(4)};
  `}

  ${mediaQuery.sixColumns`
    width: ${contentWidthForColumns(6)};
  `}

  ${mediaQuery.eightColumns`
    width: ${contentWidthForColumns(8)};
  `}

  ${mediaQuery.tenColumns`
    width: ${contentWidthForColumns(10)};
  `}

  ${mediaQuery.twelveColumns`
    width: ${contentWidthForColumns(12)};
  `}
`;
