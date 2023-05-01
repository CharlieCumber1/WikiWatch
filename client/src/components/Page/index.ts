import styled from 'styled-components';
import colours from '../../helpers/colours';
import { minScreenWidthForColumns } from '../../helpers/columns';

const Page = styled.div`
  min-height: 100vh;
  min-width: ${minScreenWidthForColumns(2)};
  background-color: ${colours.beige};
`;

export default Page;
