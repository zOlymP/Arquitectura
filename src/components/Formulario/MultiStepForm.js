import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import General from "./StepForm/General";
import Personaje1 from "./StepForm/Personaje1";
import Personaje2 from "./StepForm/Personaje2";
import Revision from "./StepForm/Revision";

const defaultData = {
  escenario: "",
  personaje1: "",
  personaje2: "",
};

const steps = [{ id: "General" }, { id: "Personaje1" }, { id: "Personaje2" }, { id: "Revision" }];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "General":
      return <General {...props} />;
    case "Personaje1":
      return <Personaje1 {...props} />;
    case "Personaje2":
      return <Personaje2 {...props} />;
    case "Revision":
      return <Revision {...props} />;
    default:
      return "Ha ocurrido un error, intentalo despues";
  }
};
