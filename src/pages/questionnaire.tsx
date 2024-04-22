import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
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
  }
  
const Questionnaire: React.FC<{
    formData: State;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }> = ({ formData, onChange, onSubmit }) => {
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
            {/* Add checkboxes for other symptoms */}
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

