import React, { useEffect,useLayoutEffect } from "react";
import RunTableComponent from "./table/RunTableComponent";
import Header from "./WorkSpaceHeader";
import SectionsComponent from "./sections/SectionsComponent";
import SystemComponent from "./system/SystemComponent";
import { useDispatch, useSelector } from "react-redux";
// import * as Actions from "../../store/actions";
import * as Actions from "../../data/model/actions.js"
import { useParams } from "react-router-dom";
// import { get } from "immer/dist/internal";
const WorkSpaceComponent = () => {
  console.log("워크스페이스 렌더링 중...");
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const modelOfTheProject = useSelector((state) => state.model.totalRun);
  const graph = useSelector((state) => state.model.graphData);
  const model = useSelector((state) => state.model.models);
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;

  useLayoutEffect(()=>{
    function fetchFirstData() {
      return new Promise((resolve, reject) => {
        console.log("26")
        dispatch(Actions.getResult(id));
        resolve();
      });
    }

    fetchFirstData().then(() => {
      console.log("tot",totalRun);
      dispatch(Actions.getGraphs(id,"accuracy",totalRun));
      console.log("유즈이펙트2");
    })

    console.log("유즈이펙트");
  }, []);

  // useEffect(() => {
    
  //   // clearInterval(timerID);
  // });

  console.log(
    "model",
    model,
    "modelOfTheProject",
    modelOfTheProject,
    "maingraph",
    graph
  );
  

  
  const sample = [
    { x: 1, y: 0.7 },
    { x: 2, y: 0.7 },
    { x: 3, y: 0.7 },
  ];
  ///////////////////////////
  ///////////////////////////

  return (
    <div>
      <Header projectId={id} ProjectName={ProjectName}></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
      <SectionsComponent models={model} graph={graph}></SectionsComponent>
      <SystemComponent models={model} graph={sample}></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
