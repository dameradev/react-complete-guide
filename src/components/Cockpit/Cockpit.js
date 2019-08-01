import React, { useEffect } from "react";
import classes from "./cockpit.module.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] UseEffect");
    // HTTP request..
    const timer = setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []); // It will run only once (like componentDidMount) because of the empty array []
  // }, [props.persons]); runs when this data changes

  useEffect(() => {
    console.log("[Cockpit.js] 2nd UseEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};
export default Cockpit;
