import React from "react";
import FEATURES from "./Features";
import FeatureItem from "./FeatureItem";

export default function FormSection(props) {
  const features = Object.keys(FEATURES).map((key) => (
    <FeatureItem
      key={key}
      features={FEATURES}
      selected={props.selected}
      featureTitle={key}
      handleUpdate={props.handleUpdate}
    />
  ));

  return (
    <section className="main__form">
      <h3>CUSTOMIZE YOUR LAPTOP</h3>
      {features}
    </section>
  );
}
