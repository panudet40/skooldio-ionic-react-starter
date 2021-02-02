import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon,
  useIonViewDidEnter,
  useIonViewWillEnter,
  useIonViewDidLeave,
  useIonViewWillLeave,
  IonActionSheet,
  IonButton,
} from "@ionic/react";
import { add, trash } from "ionicons/icons";
import { Plugins } from '@capacitor/core';

import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

import Todo from "../components/Todo";

const todos = [
  { id: 1, name: "Go To Work", deadline: 5 },
  { id: 2, name: "Buy a Skooldio Course", deadline: 2 },
  { id: 3, name: "Finish a Skooldio Course", deadline: 1 },
];

const { Haptics } = Plugins;

const Todolist: React.FC<RouteComponentProps> = (props) => {
  // useEffect(():any => {
  //   alert('Land on TodoList Page');
  // }, []);

  // useIonViewWillEnter(()=>{
  //   console.log('useIonViewWillEnter TodoList Page');
  // })
  // useIonViewDidEnter(()=>{
  //   console.log('useIonViewDidEnter TodoList Page');
  // })
  // useIonViewWillLeave(()=>{
  //   console.log('useIonViewWillLeave TodoList Page');
  // })
  // useIonViewDidLeave(()=>{
  //   console.log('useIonViewDidLeave TodoList Page');
  // })

  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
  const [selectedTask, setSelectedId] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todolist's Boom</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Todolist's Boom</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                onClickAction={() => {
                  setSelectedId(todo.id);
                  setShowActionSheet(true);
                  Haptics.vibrate();
                }}
              />
            );
          })}
        </IonList>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={() => props.history.push("/new")}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[
            {
              text:'Delete',
              icon: trash,
              role: 'destructive',
              handler: () => {
                alert(`Delete task id ${selectedTask}`);
              },
            },
          ]}
        ></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;
