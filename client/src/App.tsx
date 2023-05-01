import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Grid from './components/Grid';
import Legend from './components/Legend';
import Page from './components/Page';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Content from './components/Content';
import Title from './components/Title';
import numberFormatter from './helpers/numberFormatter';
import { WikiStatistics } from './helpers/statistics';
import socket from 'socket.io-client';

const App = (): JSX.Element => {
  const [connected, setConnected] = useState(false);
  const [stats, setStats] = useState<WikiStatistics | undefined>(undefined);

  useEffect(() => {
    const client = socket();
    client.on('connect', () => {
      setConnected(true);
    })
    client.on('disconnect', () => {
      setConnected(false);
    });
    client.on('stats', message => {
      setStats(message.data)
    });
    return () => {
      client.removeAllListeners()
    }
  }, [setConnected, setStats]);

  return (
    <Page>
      <GlobalStyle/>
      <Header>WikiWatch</Header>
      <Content>
        {connected && stats ? (
          <Grid>
            <Card columns={1} rows={1}>
              <Title>{numberFormatter(stats.editCount, 2)}</Title>
              <Legend>Edit count</Legend>
            </Card>
          </Grid>
        ) : (
          <div>Attempting to create connection with backend...</div>
        )}
      </Content>
    </Page>
  );
}

export default App;
