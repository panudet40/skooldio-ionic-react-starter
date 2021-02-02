import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonSlide,
    IonSlides,
    IonTitle,
    IonToolbar,
    IonImg,
    IonLabel,
} from '@ionic/react';
import React from 'react';

const projects = [
    {
        name: 'peoject 1',
        desc: "มาเรียนเถอะ",
        image: 'https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg',
        link: 'https://www.skooldio.com/courses/data-storytelling-with-infographics'
    },
    {
        name: 'peoject 2',
        desc: "มาเรียนเถอะ",
        image: 'https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg',
        link: 'https://www.skooldio.com/courses/data-storytelling-with-infographics'
    },
    {
        name: 'peoject 3',
        desc: "มาเรียนเถอะ",
        image: 'https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg',
        link: 'https://www.skooldio.com/courses/data-storytelling-with-infographics'
    },
]

const Projects = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Projects</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Projects</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSlides>
                    {projects.map((project) => {
                        return (
                            <IonSlide>
                                <IonCard>
                                    <IonImg src={project.image}></IonImg>
                                    <IonCardHeader>
                                        <IonCardTitle>{project.name}</IonCardTitle>
                                        <IonCardSubtitle>เร็วๆ นี้</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonLabel>{project.desc}</IonLabel><br />
                                        <IonButton expand='block' href={project.link}>เรียน</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonSlide>
                        );
                    })}
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default Projects;
