import React, { useState } from "react";
import Header from "@/components/NavBar";

interface State {
  fever: boolean;
  cough: boolean;
  difficultBreathing: boolean;
  fatigue: boolean;
  aches: boolean;
  headache: boolean;
  lossOfTaste: boolean;
  soreThroat: boolean;
  congestion: boolean;
  nausea: boolean;
  diarrhea: boolean;
  covid: boolean;
  submitted: boolean;
}

const Questionnaire: React.FC<any> = (props) => {
  const [formData, setFormData] = useState<State>({
    fever: false,
    cough: false,
    difficultBreathing: false,
    fatigue: false,
    aches: false,
    headache: false,
    lossOfTaste: false,
    soreThroat: false,
    congestion: false,
    nausea: false,
    diarrhea: false,
    covid: false,
    submitted: false,
  });

  const [message, setMessage] = useState<string>("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const symptoms = Object.keys(formData).filter(
      (key) => formData[key as keyof State] === true
    );

    setFormData((prevData) => ({
      ...prevData,
      submitted: true,
      covid: symptoms.length > 0,
    }));

    setMessage(
      symptoms.length > 0
        ? "Your information has been passed to the doctor."
        : "You are not showing symptoms of COVID-19. Please continue with the scheduling of your appointment."
    );

    setSelectedSymptoms(symptoms);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Header />
      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <form onSubmit={onSubmit}>
          <h2>Symptoms</h2>
          <div>
            <label>
              <input
                type="checkbox"
                name="fever"
                checked={formData.fever}
                onChange={onChange}
              />
              Fever
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="cough"
                checked={formData.cough}
                onChange={onChange}
              />
              Cough
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="difficultBreathing"
                checked={formData.difficultBreathing}
                onChange={onChange}
              />
              Shortness of breath or difficulty breathing
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="fatigue"
                checked={formData.fatigue}
                onChange={onChange}
              />
              Fatigue
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="aches"
                checked={formData.aches}
                onChange={onChange}
              />
              Muscle or body aches
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="headache"
                checked={formData.headache}
                onChange={onChange}
              />
              Headache
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="lossOfTaste"
                checked={formData.lossOfTaste}
                onChange={onChange}
              />
              New loss of taste or smell
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="soreThroat"
                checked={formData.soreThroat}
                onChange={onChange}
              />
              Sore throat
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="congestion"
                checked={formData.congestion}
                onChange={onChange}
              />
              Congestion or runny nose
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="nausea"
                checked={formData.nausea}
                onChange={onChange}
              />
              Nausea or vomiting
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="diarrhea"
                checked={formData.diarrhea}
                onChange={onChange}
              />
              Diarrhea
            </label>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              marginTop: "20px",
            }}
          >
            Submit
          </button>
          {message && <p>{message}</p>}
          {selectedSymptoms.length > 0 && (
            <div>
              <h3>Selected Symptoms:</h3>
              <ul>
                {selectedSymptoms.map((symptom) => (
                  <li key={symptom}>{symptom}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
