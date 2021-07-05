import "./ArbitrageContainer.css";
import "handsontable/dist/handsontable.full.css";

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
import { HotColumn, HotTable } from "@handsontable/react";
import Handsontable from "handsontable";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface ContainerProps {
  name?: string;
}

// https://ionicthemes.com/product/ionic5-full-starter-app/live-preview

const TeamContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>
            <HotTable
              data={[
                {
                  id: 1,
                  currencyCode: "EUR",
                  currency: "Euro",
                  units: "EUR / USD",
                  rates: [
                    1.086531, 1.110255, 1.112455, 1.133822, 1.130242, 1.124398,
                    1.106476, 1.120072, 1.120637, 1.104075, 1.0795586, 1.053703,
                  ],
                },
                {
                  id: 2,
                  currencyCode: "JPY",
                  currency: "Japanese Yen",
                  units: "JPY / USD",
                  rates: [
                    0.00844, 0.008709, 0.008852, 0.009108, 0.009191, 0.009476,
                    0.0099633, 0.009874, 0.009799, 0.009653, 0.009237, 0.008618,
                  ],
                },
                {
                  id: 3,
                  currencyCode: "GBP",
                  currency: "Pound Sterling",
                  units: "GBP / USD",
                  rates: [
                    1.44208, 1.431595, 1.422819, 1.429384, 1.451771, 1.422832,
                    1.316192, 1.309189, 1.315652, 1.237009, 1.244121, 1.248168,
                  ],
                },
                {
                  id: 4,
                  currencyCode: "CHF",
                  currency: "Swiss Franc",
                  units: "CHF / USD",
                  rates: [
                    0.993716, 1.008061, 1.018132, 1.037269, 1.021976, 1.031374,
                    1.019037, 1.029277, 1.025869, 1.014642, 1.00421, 0.98043,
                  ],
                },
                {
                  id: 5,
                  currencyCode: "CAD",
                  currency: "Canadian Dollar",
                  units: "CAD / USD",
                  rates: [
                    0.705109, 0.724678, 0.755749, 0.778736, 0.773217, 0.775442,
                    0.767482, 0.769288, 0.763866, 0.755129, 0.743212, 0.74907,
                  ],
                },
                {
                  id: 6,
                  currencyCode: "AUD",
                  currency: "Australian Dollar",
                  units: "AUD / USD",
                  rates: [
                    0.70267, 0.712866, 0.749343, 0.766204, 0.73166, 0.739711,
                    0.752537, 0.762205, 0.757825, 0.761563, 0.752673, 0.73393,
                  ],
                },
                {
                  id: 7,
                  currencyCode: "NZD",
                  currency: "New Zealand Dollar",
                  units: "NZD / USD",
                  rates: [
                    0.655341, 0.663157, 0.673713, 0.688789, 0.68018, 0.703324,
                    0.713485, 0.72232, 0.730216, 0.716419, 0.714249, 0.702746,
                  ],
                },
              ]}
              colWidths={[100, 150, 150, 130, 400]}
              columns={[
                {
                  data: "currencyCode",
                  type: "text",
                  className: "htCenter htMiddle",
                },
                {
                  data: "currency",
                  type: "text",
                  className: "htMiddle",
                },
                {
                  data: "units",
                  type: "text",
                  className: "htMiddle",
                },
                {
                  width: 100,
                  renderer: function (
                    instance,
                    td,
                    row,
                    column,
                    prop,
                    value,
                    cellProperties
                  ) {
                    var rates = instance.getDataAtRowProp(row, "rates");
                    var ratesSum = rates.reduce(function (a, b) {
                      return a + b;
                    });

                    value = ratesSum / rates.length;
                    td.className = "htMiddle htDimmed";
                    td.innerHTML = value;
                    return td;
                  },
                  type: "numeric",
                  format: "0.000",
                  className: "htMiddle",
                },
                {
                  width: 407,
                  renderer: function (
                    instance,
                    td,
                    row,
                    column,
                    prop,
                    value,
                    cellProperties
                  ) {
                    if (!td.hasChildNodes()) {
                      if (cellProperties.chart) {
                        cellProperties.chart.destroy();
                        cellProperties.chart = void 0;
                      }
                    } else if (cellProperties.chart) {
                      cellProperties.chart.update();
                      return td;
                    }
                    var rates = instance.getDataAtRowProp(row, "rates");
                    var chartContainer = document.createElement("div");
                    chartContainer.className = "chart";
                    var chartCanvas = document.createElement("canvas");
                    chartContainer.appendChild(chartCanvas);
                    td.appendChild(chartContainer);

                    cellProperties.chart = new (Chart as any)(
                      chartCanvas.getContext("2d"),
                      {
                        type: "line",
                        data: {
                          labels: [
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                          ],
                          datasets: [
                            {
                              label: "",
                              data: rates,
                              borderWidth: 2,
                              pointRadius: 0,
                              borderColor: "green",
                              fill: false,
                              lineTension: 0,
                            },
                          ],
                        },
                        options: {
                          plugins: {
                            chartAreaBorder: {
                              borderColor: "red",
                              borderWidth: 2,
                              borderDash: [5, 5],
                              borderDashOffset: 2,
                            },
                          },
                        },
                        plugins: [
                          {
                            id: "chartAreaBorder",
                            beforeDraw(chart, args, options) {
                              const {
                                ctx,
                                chartArea: { left, top, width, height },
                              } = chart;
                              ctx.save();
                              ctx.strokeStyle = options.borderColor;
                              ctx.lineWidth = options.borderWidth;
                              ctx.setLineDash(options.borderDash || []);
                              ctx.lineDashOffset = options.borderDashOffset;
                              ctx.strokeRect(left, top, width, height);
                              ctx.restore();
                            },
                          },
                        ],
                      }
                    );

                    return td;
                  },
                },
              ]}
              width="100%"
              height="400"
              stretchH="all"
              trimRows={[1, 2, 3]}
              rowHeights="70"
              licenseKey="non-commercial-and-evaluation"
              readOnly={true}
              renderAllRows={true}
              colHeaders={["Code", "Currency", "Units", "Average", "Rates"]}
              autoColumnSize={true}
              autoRowSize={true}
            />
          </IonCol>
        </IonRow>

        {/* 

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
