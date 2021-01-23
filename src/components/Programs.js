import React from "react";
import { useSelector } from "react-redux";

const Program = ({ program }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div className="program">
        <div className="text-center">
          <img
            src={program.links.mission_patch_small}
            className="program-header"
            alt="spacex-program"
          />
        </div>
        <div className="program-content">
          <p className="text-blue display-label">
            {program.mission_name} #{program.flight_number}
          </p>
          {program.mission_id && (
            <ul className="mission-ids">
              <span className="display-label">Mission Ids:</span>
              {program.mission_id.map((id, index) => {
                return (
                  <li key={`ids-${index}`}>
                    <span className="display-value">{id}</span>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="display-label">
            Launch Year:
            <span className="display-value">{program.launch_year}</span>
          </p>
          <p className="display-label">
            Successful launch:
            <span className="display-value">
              {program.launch_success ? "true" : "false"}
            </span>
          </p>
          <p className="display-label">
            Successful landing
            <span className="display-value">
              {program.rocket.first_stage.cores[0].land_success
                ? "true"
                : "false"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  const { programs } = useSelector((state) => {
    return state.launch;
  });
  return (
    <>
      {programs.map((program, index) => {
        return <Program key={`program-${index}`} program={program} />;
      })}
    </>
  );
};

export default Programs;
