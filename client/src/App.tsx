import React from 'react';
import Page from './components/Page';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Content from './components/Content';

const App = (): JSX.Element => {
  return (
    <Page>
      <GlobalStyle/>
      <Header>WikiWatch</Header>
      <Content>Page Content</Content>
    </Page>
  );
}

export default App;
