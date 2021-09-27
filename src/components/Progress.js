import React from "react";
import { Link, withRouter } from "react-router-dom";

const Progress = ({ location: { pathname } }) => {
  const isStepOne = pathname === "/";
  const isStepTwo = pathname === "/second";
  const isStepThree = pathname === "/third";

  return (
    <React.Fragment>
      <div className="steps">
        <div className={`${isStepOne ? "step active" : "step"}`}>
          <div>1</div>
          <div>
            {isStepTwo || isStepThree ? <Link to="/">Step 1</Link> : "Step 1"}
          </div>
        </div>
        <div className={`${isStepTwo ? "step active" : "step"}`}>
          <div>2</div>
          <div>{isStepThree ? <Link to="/second">Step 2</Link> : "Step 2"}</div>
        </div>
        <div className={`${pathname === "/third" ? "step active" : "step"}`}>
          <div>3</div>
          <div>Step 3</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Progress);
