import React from "react";
import Header from "@/components/NavBar";

const Questionnaire = ({ formData = {}, onChange, onSubmit }) => {
  return (
    <div className="questionnaire-container">
      <Header />
      <div className="questionnaire-form">
        <form onSubmit={onSubmit}>
          <h2>Symptoms Checklist</h2>
          {/* Fever */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="fever"
                checked={formData.fever || false}
                onChange={onChange}
              />
              Fever
            </label>
          </div>
          {/* Persistent Cough */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="cough"
                checked={formData.cough || false}
                onChange={onChange}
              />
              Persistent Cough
            </label>
          </div>
          {/* Difficulty Breathing */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="difficultyBreathing"
                checked={formData.difficultyBreathing || false}
                onChange={onChange}
              />
              Difficulty Breathing
            </label>
          </div>
          {/* Fatigue or Weakness */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="fatigue"
                checked={formData.fatigue || false}
                onChange={onChange}
              />
              Fatigue or Weakness
            </label>
          </div>
          {/* Muscle or Body Aches */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="aches"
                checked={formData.aches || false}
                onChange={onChange}
              />
              Muscle or Body Aches
            </label>
          </div>
          {/* Headache */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="headache"
                checked={formData.headache || false}
                onChange={onChange}
              />
              Headache
            </label>
          </div>
          {/* Loss of Taste or Smell */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="lossOfTaste"
                checked={formData.lossOfTaste || false}
                onChange={onChange}
              />
              Loss of Taste or Smell
            </label>
          </div>
          {/* Sore Throat */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="soreThroat"
                checked={formData.soreThroat || false}
                onChange={onChange}
              />
              Sore Throat
            </label>
          </div>
          {/* Congestion or Runny Nose */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="congestion"
                checked={formData.congestion || false}
                onChange={onChange}
              />
              Congestion or Runny Nose
            </label>
          </div>
          {/* Nausea or Vomiting */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="nausea"
                checked={formData.nausea || false}
                onChange={onChange}
              />
              Nausea or Vomiting
            </label>
          </div>
          {/* Diarrhea */}
          <div className="symptom-checkbox">
            <label>
              <input
                type="checkbox"
                name="diarrhea"
                checked={formData.diarrhea || false}
                onChange={onChange}
              />
              Diarrhea
            </label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
