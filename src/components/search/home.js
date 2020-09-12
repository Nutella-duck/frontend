import React , {useEffect} from "react";
import Table from "./main";
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from "../../store/actions";
import axios from 'axios';
const WorkSpaceComponent = () => {
  const dispatch = useDispatch();
  const models = useSelector((state) => state.model.models);
  const total = useSelector((state)=>state.model.totalRun);
 const graph = useSelector((state)=>state.model.graphData);
 const project = useSelector((state) => state.project.projects);
  
  useEffect(() => {
   dispatch(Actions.getAllModelData());
    dispatch(Actions.getNumberOfModel());
    dispatch(Actions.getGraphData());
    dispatch(Actions.getAllPorject());
  }, []);
// console.log(graph)
// const runs = total[0].totalRun;
// console.log(graph[0]);
// const a = graph.map(a=>a.accuracy)
// console.log(a)
//  const data = [];
  // for(let i= 0; i<3;i++)
  // {
  //   data.push({x:graph[i].runName})
  // }
//   for(let i=1;i<4;i++)
//   {
//     data.push({x:i,y:a[i-1]})
//   }
// //arr.push({title:modelname[i]})
//  console.log(data)
console.log(project)
  return ( 
    <div>
      {/* <Table tableRow={models} haein={runs} graph={graph}/> */}
      {/* {project} */}
    </div>
  );
};

export default WorkSpaceComponent;
