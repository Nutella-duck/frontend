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
  const modelOfTheProject = useSelector((state)=>state.model.totalRun);
  const graph = useSelector((state)=>state.model.graphData);
  const model = useSelector((state) => state.model.models);
  const graphDatas=[]
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;
const getGraph=(totalRun)=>
{
console.log("안에들어왔어요!",totalRun)
for(let i=0;i<totalRun;i++)
{
  dispatch(Actions.getGraphData(i,"accuracy"));
  console.log("graph:",graph)
 graphDatas.push(graph[0])
  console.log("graphDatas",i,":",graphDatas)
}
}
  const timerID = setInterval(getGraph(totalRun), 60000);

  
  
  console.log("ProjectName",ProjectName)
  useEffect(() => {
    console.log("유즈이펙트!")
    dispatch(Actions.getNumberOfModel(id));
   
    
    dispatch(Actions.getSelectedModelData(id));
    clearInterval(timerID)
  

  }, []);

console.log("model",model,"modelOfTheProject",modelOfTheProject,"maingraph",graph);

// const a = graphDatas.map(a=>a.accuracy)
// console.log("graphData",graphDatas)
// console.log("graphData[0]",graphDatas[0])
// console.log("a",a)
//  const data = [];
//   // for(let i= 0; i<3;i++)
//   // {
//   //   data.push({x:graph[i].runName})
//   // }
//   for(var i=1;i<graphDatas.length+1;i++)
//   {
//     // console.log(i,"번째" ,a[i-1])
//     console.log("그래프넣기",i,":",graphDatas)
//     data.push({x:i,y:a[i-1]})
//   }
//   console.log("data",data)
// // console.log(totalRun);

const sample = [{x: 1, y: 0.7},
{x: 2, y: 0.7},
{x: 3, y: 0.7}]
///////////////////////////
///////////////////////////



  return (
    <div>
      <Header projectId ={id}  ProjectName={ProjectName} ></Header>
      <RunTableComponent  totalRuns={totalRun} models={model}></RunTableComponent>
      <SectionsComponent  models={model} graph={sample}></SectionsComponent>
      <SystemComponent  models={model} graph={sample}></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
