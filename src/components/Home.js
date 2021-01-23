import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchLaunchPrograms } from "../actions/launch";
import Programs from "./Programs";
import Filters from "./Filters";

const Footer = () => {
  return (
    <div className="row footer">
      <div className="col-xs-12 text-center content">
        <p>Developed By : Ganesh babu</p>
      </div>
    </div>
  );
};

const Loader = () => {
  return <div className="col-xs-12">Loading the launch programs...</div>;
};

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchLaunchPrograms());
  }, []);
  const { loading } = useSelector((state) => state.launch);
  return (
    <div className="container-fluid bg-gray">
      <h3 className="text-center p-3">SpaceX Launch Programs</h3>
      <h6 className="text-center">(ImgBox is down: images are not loading)</h6>
      <div className="row">
        <div className="col-xs-12 col-md-2">
          <Filters />
        </div>
        <div className="col-xs-12 col-md-10 program-container">
          <div className="row">{loading ? <Loader /> : <Programs />}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
