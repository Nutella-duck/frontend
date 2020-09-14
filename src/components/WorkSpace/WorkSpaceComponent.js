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
  console.log("워크스페이스 렌더링 중...")
  const {id} =useParams()
  console.log(id)

  const dispatch = useDispatch();
  const model = useSelector((state) => state.model.models);
  const modelOfTheProject = useSelector((state)=>state.model.totalRun);
  const graph = useSelector((state)=>state.model.graphData);
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;
  useEffect(() => {
    dispatch(Actions.getSelectedModelData(id));
    dispatch(Actions.getNumberOfModel(id));
  getGraph(totalRun);
  console.log("유즈이펙트!")
  }, [totalRun]);
const graphDatas =[];
const getGraph=(totalRun)=>
{
console.log("안에들어왔어요!",totalRun)
for(let i=0;i<=totalRun;i++)
{
  dispatch(Actions.getGraphData(i,"accuracy"));
 graphDatas.push(graph)
  console.log("graphDatas",i,":",graphDatas)
}
}
console.log("maingraph",graph);

const a = graph.map(a=>a.accuracy)
console.log("a",ProjectName)
 const data = [];
  // for(let i= 0; i<3;i++)
  // {
  //   data.push({x:graph[i].runName})
  // }
  for(var i=1;i<graph.length+1;i++)
  {
    // console.log(i,"번째" ,a[i-1])
    data.push({x:i,y:a[i-1]})
  }
  console.log("data",data)
// console.log(totalRun);


///////////////////////////
///////////////////////////



  return (
    <div>
      <Header projectId ={id}  ProjectName={ProjectName} ></Header>
      <RunTableComponent models={model} totalRuns={totalRun} ></RunTableComponent>
      <SectionsComponent  models={model} graph={data}></SectionsComponent>
      <SystemComponent  models={model} graph={data}></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
