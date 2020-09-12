import React , {useEffect} from "react";
import RunTableComponent from "./table/RunTableComponent";
import Header from "./WorkSpaceHeader";
import SectionsComponent from "./sections/SectionsComponent";
import SystemComponent from "./system/SystemComponent";
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from "../../store/actions";
import {
 useParams
} from "react-router-dom";
const WorkSpaceComponent = () => {
  
  const {id} =useParams()
  console.log(id)

  const dispatch = useDispatch();
  const model = useSelector((state) => state.model.models);
  const totalRun = useSelector((state)=>state.model.totalRun);
  const graph = useSelector((state)=>state.model.graphData);

  useEffect(() => {
    dispatch(Actions.getSelectedModelData(id));
    dispatch(Actions.getNumberOfModel(id));
    dispatch(Actions.getGraphData(id,"accuracy"));
  }, []);


console.log(graph);
const runs = totalRun[0].totalRun;
const a = graph.map(a=>a.accuracy)
console.log("a",a)
 const data = [];
  // for(let i= 0; i<3;i++)
  // {
  //   data.push({x:graph[i].runName})
  // }
  for(var i=1;i<4;i++)
  {
    console.log(i,"번째" ,a[i-1])
    data.push({x:i,y:a[i-1]})
  }
  console.log("data",data)
// console.log(totalRun);


///////////////////////////
///////////////////////////



  return (
    <div>
      <Header></Header>
      <RunTableComponent models={model} totalRuns={runs} ></RunTableComponent>
      <SectionsComponent  models={model}></SectionsComponent>
      <SystemComponent  models={model} graph={data}></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
