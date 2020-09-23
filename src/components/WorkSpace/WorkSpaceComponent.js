import React, { useEffect, useLayoutEffect } from "react";
import RunTableComponent from "./table/RunTableComponent";
import Header from "./WorkSpaceHeader";
import SectionsComponent from "./sections/SectionsComponent";
import SystemComponent from "./system/SystemComponent";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../data/model/actions.js";
import { useParams } from "react-router-dom";
const WorkSpaceComponent = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const modelOfTheProject = useSelector((state) => state.model.totalRun);
  const graph = useSelector((state) => state.model.graphData);
  const model = useSelector((state) => state.model.models);
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;

  useEffect(() => {
    dispatch(Actions.getResult(id));
  }, []);
  useEffect(() => {
    dispatch(Actions.getGraphs(id, "accuracy", totalRun));
  }, [totalRun]);

  const sample = [
    { x: 1, y: 0.7 },
    { x: 2, y: 0.75 },
    { x: 3, y: 0.79 },
  ];

  return (
    <div>
      <Header projectId={id} ProjectName={ProjectName}></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
      <SectionsComponent models={model} graph={sample}></SectionsComponent>
      <SystemComponent models={model} graph={sample}></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
