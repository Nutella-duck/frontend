import React , {useEffect} from "react";
import RunTableComponent from "./table/RunTableComponent";
import Header from "./WorkSpaceHeader";
import SectionsComponent from "./sections/SectionsComponent";
import SystemComponent from "./system/SystemComponent";
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from "../../store/actions";
const WorkSpaceComponent = () => {
  const dispatch = useDispatch();
  const model = useSelector((state) => state.model.models);
  const totalRun = useSelector((state)=>state.model.totalRun);
  useEffect(() => {
    dispatch(Actions.getAllModelData());
    dispatch(Actions.getNumberOfModel());
  }, []);
console.log(model);
const runs = totalRun[0].total_run;
// console.log(totalRun);
  return (
    <div>
      <Header></Header>
      <RunTableComponent models={model} totalRuns={runs} ></RunTableComponent>
      <SectionsComponent  models={model}></SectionsComponent>
      <SystemComponent  models={model}></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
