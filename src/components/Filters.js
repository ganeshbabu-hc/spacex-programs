import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../actions/filter";

const Filters = () => {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => {
    return state.filter;
  });
  const [filter, setFilter] = useState(filterData);

  const applyLunchYear = (year) => {
    let newFilter = {
      ...filter,
      launchYear: year,
      successFulLaing: null,
      successFulLaunch: null
    };
    setFilter(newFilter);
    dispatch(updateFilter(newFilter));
  };

  const setLaunchSucces = (successFulLaunch) => {
    let newFilter = {
      ...filter,
      successFulLaunch: successFulLaunch,
      successFulLaing: null,
      launchYear: null
    };
    setFilter(newFilter);
    dispatch(updateFilter(newFilter));
  };

  const setLandSucces = (successFulLaing) => {
    let newFilter = {
      ...filter,
      successFulLaing: successFulLaing,
      successFulLaunch: null,
      launchYear: null
    };
    setFilter(newFilter);
    dispatch(updateFilter(newFilter));
  };

  const launchYears = () => {
    let years = [];
    for (let i = 2006; i <= 2020; i++) {
      years.push(i);
    }
    return years;
  };
  return (
    <div className="filter">
      <h5 className="p-2">Filters</h5>
      <p className="filter-category text-center p-2">Launch Year</p>
      <div className="row">
        {launchYears().map((year, key) => {
          return (
            <div key={`filterly-${key}`} className="col-sm-6 text-center p-1">
              <button
                onClick={() => {
                  applyLunchYear(year);
                }}
                className={`btn-filter ${
                  year === filter.launchYear ? "active" : ""
                }`}
              >
                {year}
              </button>
            </div>
          );
        })}
      </div>
      <p className="filter-category text-center p-2">Successful Launch</p>
      <div className="row">
        <div className="col-sm-6 text-center p-1">
          <button
            onClick={() => {
              setLaunchSucces(true);
            }}
            className={`btn-filter ${
              filter.successFulLaunch === true ? "active" : ""
            }`}
          >
            true
          </button>
        </div>
        <div className="col-sm-6 text-center p-1">
          <button
            onClick={() => {
              setLaunchSucces(false);
            }}
            className={`btn-filter ${
              filter.successFulLaunch === false ? "active" : ""
            }`}
          >
            false
          </button>
        </div>
      </div>
      <p className="filter-category text-center p-2">Successful Laing</p>
      <div className="row">
        <div className="col-sm-6 text-center p-1">
          <button
            onClick={() => {
              setLandSucces(true);
            }}
            className={`btn-filter ${
              filter.successFulLaing === true ? "active" : ""
            }`}
          >
            true
          </button>
        </div>
        <div className="col-sm-6 text-center p-1">
          <button
            onClick={() => {
              setLandSucces(false);
            }}
            className={`btn-filter ${
              filter.successFulLaing === false ? "active" : ""
            }`}
          >
            false
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
