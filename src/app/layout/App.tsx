import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import { useStore } from '../stores/store';
import HomePage from '../../features/home/HomePage';
import CircleCompleteLoader from './CircleCompleteLoader';

function App() {
  const { commonStore, videoStore } = useStore();

  useEffect(() => {
    commonStore.setAppNotLoaded();
    const runIndexDb = async () => {
      await videoStore.createObjectStore(['roadMaps']);
      await videoStore.getValue('roadMaps', 1).then(v => {
        if (!v) {
          fetch('assets/video/fresh-background.mp4')
            .then(v => {
              return v.blob()
            }).then((vdo: Blob) => {
              let record = {
                id: 1,
                mp4: vdo,
                name: 'fresh-background'
              }
              // Add the record to the IDB using add()
              videoStore.putValue('roadMaps', record);
              // const blob = new Blob([vdo], { type: 'video/mp4' });
              const blobUrl = URL.createObjectURL(vdo);
              commonStore.setRoadmapVdo(blobUrl);
              // roadMapVdoSrc.current = blobUrl;
              setTimeout(() => commonStore.setAppLoaded(), 7000);
            });
        }
      }).catch(e => console.log(e));

      await videoStore.getValue('roadMaps', 2).then(v => {
        if (!v) {
          fetch('assets/video/outro1.mp4')
            .then(v => {
              return v.blob()
            }).then((vdo: Blob) => {
              let record = {
                id: 2,
                mp4: vdo,
                name: 'outro1'
              }
              // Add the record to the IDB using add()
              videoStore.putValue('roadMaps', record);
              // const blob = new Blob([vdo], { type: 'video/mp4' });
              const blobUrl = URL.createObjectURL(vdo);
              commonStore.setOutro1Vdo(blobUrl);
              // roadMapVdoSrc.current = blobUrl;
              // setTimeout(() => commonStore.setAppLoaded(), 7000);
            });
        }
      }).catch(e => console.log(e));

    }
    runIndexDb();
    // if (commonStore.getRoadmapVdo) {
    // commonStore.setAppLoaded();
    // }
  }, [commonStore, videoStore])

  if (!commonStore.appLoaded) return <CircleCompleteLoader active={true} content='Loading...' />

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
