import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import TeamContainer from "../components/team/TeamContainer";
import "./TeamTab.css";

const TeamTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Team</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Team</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TeamContainer name="Team" />
      </IonContent>
    </IonPage>
  );
};

export default TeamTab;
