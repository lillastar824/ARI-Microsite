import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import HomePage from '../../features/home/HomePage';

function App() {
  const { commonStore, videoStore } = useStore();

  useEffect(() => {

    const runIndexDb = async () => {
      if (commonStore.getRoadmapVdo) { commonStore.setAppLoaded(); }
      await videoStore.createObjectStore(['roadMaps']);
      await videoStore.getValue('roadMaps', 1).then(v => {
        if (v) {
          const blob = new Blob([v.mp4], { type: 'video/mp4' });
          const blobUrl = URL.createObjectURL(blob);
          commonStore.setRoadmapVdo(blobUrl);
          // commonStore.setAppLoaded();
        } else {
          fetch('assets/video/fresh-background.mp4')
            .then(v => {
              return v.blob()
            }).then((vdo: Blob) => {
              let record = {
                mp4: vdo,
                name: 'fresh-background'
              }
              // Add the record to the IDB using add()
              videoStore.putValue('roadMaps', record);
              // const blob = new Blob([vdo], { type: 'video/mp4' });
              const blobUrl = URL.createObjectURL(vdo);
              commonStore.setRoadmapVdo(blobUrl);
              // roadMapVdoSrc.current = blobUrl;
              commonStore.setAppLoaded();
            });
        }
      }).catch(e => console.log(e));
    }
    runIndexDb();
    // if (commonStore.getRoadmapVdo) {
    commonStore.setAppLoaded();
    // }
  }, [commonStore, videoStore])

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route path='/server-error' component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
