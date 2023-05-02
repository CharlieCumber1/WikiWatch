import styled from 'styled-components';
import { columnWidth, gutterWidth } from '../../helpers/gridSizes';
import { mediaQuery } from '../../helpers/mediaQuery';

export const SmallGrid = styled.div`
  display: grid;
  grid-gap: ${gutterWidth};

  grid-template-columns: repeat(2, ${columnWidth});
  grid-template-rows: repeat(2, ${columnWidth});

  grid-column: span 2;
  grid-row: span 2;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: ${gutterWidth};

  grid-template-columns: repeat(2, ${columnWidth});

  ${mediaQuery.fourColumns`
    grid-template-columns: repeat(4, ${columnWidth});
  `}

  ${mediaQuery.sixColumns`
    grid-template-columns: repeat(6, ${columnWidth});
  `}

  ${mediaQuery.eightColumns`
    grid-template-columns: repeat(8, ${columnWidth});
  `}

  ${mediaQuery.tenColumns`
    grid-template-columns: repeat(10, ${columnWidth});
  `}

  ${mediaQuery.twelveColumns`
    grid-template-columns: repeat(12, ${columnWidth});
  `}
`;

export default Grid;
