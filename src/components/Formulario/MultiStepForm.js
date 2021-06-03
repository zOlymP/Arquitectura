import React, { useEffect, useState } from "react";
import { useStep } from "react-hooks-helper";
import { database } from "../../firebase/client";
import General from "./StepForm/General";
import Personaje1 from "./StepForm/Personaje1";
import Personaje2 from "./StepForm/Personaje2";
import Video from "./StepForm/Video";

const defaultData = {
  escenario: "",
  personaje1: "",
  personaje2: "",
  movimiento: "",
};

const steps = [{ id: "General" }, { id: "Personaje1" }, { id: "Personaje2" }, { id: "Video" }];

export const MultiStepForm = () => {
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const [arduino, setArduino] = useState(defaultData);

  useEffect(() => {
    database
      .collection("arduino")
      .doc("data")
      .onSnapshot((querysnapshot) => {
        setArduino(querysnapshot.data());
      });
  }, []);

  const props = { arduino, navigation };

  switch (step.id) {
    case "General":
      return <General {...props} />;
    case "Personaje1":
      return <Personaje1 {...props} />;
    case "Personaje2":
      return <Personaje2 {...props} />;
    case "Video":
      return <Video {...props} />;
    default:
      return "Ha ocurrido un error, intentalo despues";
  }
};
