import React from 'react';
import Card from './components/Card';
import Grid from './components/Grid';
import Page from './components/Page';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Content from './components/Content';

const App = (): JSX.Element => {
  return (
    <Page>
      <GlobalStyle/>
      <Header>WikiWatch</Header>
      <Content>
        <Grid>
          <Card columns={1} rows={2}>
            Card Content
          </Card>
          <Card columns={3} rows={3}>
            Card Content
          </Card>
          <Card columns={1} rows={1}>
            Card Content
          </Card>
          <Card columns={2} rows={2}>
            Card Content
          </Card>
          <Card columns={2} rows={2}>
            Card Content
          </Card>
        </Grid>
      </Content>
    </Page>
  );
}

export default App;
