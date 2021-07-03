import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import TeamContainer from "../components/team/TeamContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Team</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Team 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TeamContainer name="Team" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
