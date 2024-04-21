import React, { useState } from "react";
import Header from "@/components/NavBar";

declare function useNavigate(): NavigateFunction;

type To = string | { pathname: string; state?: any };

interface NavigateFunction {
  (
    to: To,
    options?: { replace?: boolean; state?: any }
  ): void;
  (delta: number): void;
}

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
}

const Questionnaire: React.FC = () => {
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
  });

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedSymptoms = Object.keys(formData).filter(
      (key) => formData[key as keyof State] === true
    );

    navigate("/doctor-dashboard", { state: { symptoms: selectedSymptoms } });
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
          {/* Add checkboxes for all symptoms */}
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
          {/* Repeat similar blocks for other symptoms */}
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
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
