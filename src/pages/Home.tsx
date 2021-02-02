import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useGetInfo } from '@ionic/react-hooks/device';
import { useCurrentPosition, useWatchPosition } from '@ionic/react-hooks/geolocation'
import { Plugins } from '@capacitor/core';
import { options } from 'ionicons/icons';

const { OpenMap } = Plugins;

const Home: React.FC = () => {
  const { info } = useGetInfo();
  const { currentPosition } = useCurrentPosition();
  const goToMap = () => {
    const {
      coords: { latitude, longitude }
    } = currentPosition || { coords: {latitude: -17.93102, longitude: 114.78080} };
    let temp:String = `Latitude: ${latitude}\nLongitude:${longitude}`;
    alert(temp);
    OpenMap.open({ longitude, latitude });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle size='large'>Home</IonTitle>
        {/* <IonLabel>{JSON.stringify(currentPosition)}</IonLabel> */}
        <IonButton expand={'full'} onClick={()=>goToMap()}>Open Map</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
