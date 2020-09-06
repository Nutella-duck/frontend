import React , {useEffect} from "react";
import RunTableComponent from "./table/RunTableComponent";
import Header from "./WorkSpaceHeader";
import SectionsComponent from "./sections/SectionsComponent";
import SystemComponent from "./system/SystemComponent";
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from "../../store/actions";
const WorkSpaceComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.model.models);

  useEffect(() => {
    dispatch(Actions.getAllModelData());
  }, []);

  return (
    <div>
      <Header></Header>
      <RunTableComponent models={state}></RunTableComponent>
      <SectionsComponent  models={state}></SectionsComponent>
      <SystemComponent  models={state}></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
