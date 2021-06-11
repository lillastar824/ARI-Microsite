import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { useStore } from '../stores/store';

interface Props {
    inverted?: boolean;
    content?: string;
}

export default function LoadingComponent({ inverted = true, content = 'Loading...' }: Props) {
    const { commonStore } = useStore();
    const gestureEvent = () => {
        console.log('loading');
        commonStore.setAppLoaded();
    }
    return (
        <Dimmer active={true} inverted={inverted} onClick={() => gestureEvent()}>
            <Loader content={content} />
        </Dimmer>
    )
}