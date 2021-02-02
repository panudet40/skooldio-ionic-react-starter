import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonLoading, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Todolist from "./pages/Todolist";
import NewItem from "./pages/NewItem";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home";
import { home, list, image, bulb } from "ionicons/icons";

const App: React.FC = () => {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  setTimeout(() => setShowLoading(false), 500);
  return (
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='home' href='/home'>
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab='todoList' href='/todolist'>
            <IonIcon icon={list} />
            <IonLabel>Todolist</IonLabel>
          </IonTabButton>
          <IonTabButton tab='projects' href='/projects'>
            <IonIcon icon={bulb} />
            <IonLabel>Projects</IonLabel>
          </IonTabButton>
          <IonTabButton tab='gallery' href='/gallery'>
            <IonIcon icon={image} />
            <IonLabel>Gallery</IonLabel>
          </IonTabButton>
        </IonTabBar>
        <IonRouterOutlet>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' component={Home} exact={true} />
          <Route path='/todolist' component={Todolist} exact={true} />
          <Route path='/new' component={NewItem} exact={true} />
          <Route path='/projects' component={Projects} exact={true} />
          <Route path='/gallery' component={Gallery} exact={true} />
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
    <IonLoading isOpen={showLoading}></IonLoading>
  </IonApp>
  );
}

export default App;
