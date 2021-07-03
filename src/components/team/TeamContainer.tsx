import "./TeamContainer.css";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";

interface ContainerProps {
  name: string;
}

const TeamContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonRow>
              <IonCard>
                <div className="ion-text-center">
                  <img src="https://amarkets.today/res/land/marketing/img/expert_artem_zvezdin.png" />
                </div>
                <IonCardHeader>
                  <IonCardSubtitle>Главный трейдер</IonCardSubtitle>
                  <IonCardTitle>Николай Овсянников</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Founded in 1829 on an isthmus between Lake Monona and Lake
                  Mendota, Madison was named the capital of the Wisconsin
                  Territory in 1836.
                </IonCardContent>
              </IonCard>
            </IonRow>
          </IonCol>
          <IonCol>
            <IonRow>
              <IonCard>
                <div className="ion-text-center">
                  <img src="https://amarkets.today/res/land/marketing/img/expert_gleb_zadoya.png" />
                </div>
                <IonCardHeader>
                  <IonCardSubtitle>Крипто трейдер</IonCardSubtitle>
                  <IonCardTitle>Глеб Задоя</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Founded in 1829 on an isthmus between Lake Monona and Lake
                  Mendota, Madison was named the capital of the Wisconsin
                  Territory in 1836.
                </IonCardContent>
              </IonCard>
            </IonRow>
          </IonCol>
          <IonCol>
            <IonRow>
              <IonCard>
                <div className="ion-text-center">
                  <img src="https://amarkets.today/res/land/marketing/img/expert_uriy_bularga.png" />
                </div>
                <IonCardHeader>
                  <IonCardSubtitle>Биржевой трейдер</IonCardSubtitle>
                  <IonCardTitle>Юрий Буларга</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Founded in 1829 on an isthmus between Lake Monona and Lake
                  Mendota, Madison was named the capital of the Wisconsin
                  Territory in 1836.
                </IonCardContent>
              </IonCard>
            </IonRow>
          </IonCol>
        </IonRow>

        {/* <IonRow>
          <IonCol size="6">ion-col size="6"</IonCol>
          <IonCol>ion-col</IonCol>
          <IonCol>ion-col</IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3">ion-col size="3"</IonCol>
          <IonCol>ion-col</IonCol>
          <IonCol size="3">ion-col size="3"</IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3">ion-col size="3"</IonCol>
          <IonCol size="3" offset="3">
            ion-col size="3" offset="3"
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>ion-col</IonCol>
          <IonCol>
            ion-col
            <br />#
          </IonCol>
          <IonCol>
            ion-col
            <br />#
            <br />#
          </IonCol>
          <IonCol>
            ion-col
            <br />#
            <br />#
            <br />#
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-align-self-start">ion-col start</IonCol>
          <IonCol className="ion-align-self-center">ion-col center</IonCol>
          <IonCol className="ion-align-self-end">ion-col end</IonCol>
          <IonCol>
            ion-col
            <br />#
            <br />#
          </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-start">
          <IonCol>start ion-col</IonCol>
          <IonCol>start ion-col</IonCol>
          <IonCol className="ion-align-self-end">start ion-col end</IonCol>
          <IonCol>
            ion-col
            <br />#
            <br />#
          </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-center">
          <IonCol>center ion-col</IonCol>
          <IonCol>center ion-col</IonCol>
          <IonCol>center ion-col</IonCol>
          <IonCol>
            ion-col
            <br />#
            <br />#
          </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-end">
          <IonCol>end ion-col</IonCol>
          <IonCol className="ion-align-self-start">end ion-col start</IonCol>
          <IonCol>end ion-col</IonCol>
          <IonCol>
            ion-col
            <br />#
            <br />#
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" size-sm>
            ion-col size="12" size-sm
          </IonCol>
          <IonCol size="12" size-sm>
            ion-col size="12" size-sm
          </IonCol>
          <IonCol size="12" size-sm>
            ion-col size="12" size-sm
          </IonCol>
          <IonCol size="12" size-sm>
            ion-col size="12" size-sm
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12" size-md>
            ion-col size="12" size-md
          </IonCol>
          <IonCol size="12" size-md>
            ion-col size="12" size-md
          </IonCol>
          <IonCol size="12" size-md>
            ion-col size="12" size-md
          </IonCol>
          <IonCol size="12" size-md>
            ion-col size="12" size-md
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="6" size-lg offset="3">
            ion-col size="6" size-lg offset="3"
          </IonCol>
          <IonCol size="3" size-lg>
            ion-col size="3" size-lg
          </IonCol>
        </IonRow>
      */}
      </IonGrid>
    </>
  );
};

export default TeamContainer;
