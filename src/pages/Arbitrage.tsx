import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ArbitrageContainer from "../components/arbitrageTable/ArbitrageContainer";
import "./Arbitrage.css";

const ArbitrageTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Arbitrage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Arbitrage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ArbitrageContainer />
      </IonContent>
    </IonPage>
  );
};

export default ArbitrageTab;
