import React , {useEffect} from "react";
import Table from "./main";
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from "../../store/actions";
import axios from 'axios';
const WorkSpaceComponent = () => {
  const dispatch = useDispatch();
  const models = useSelector((state) => state.model.models);
  const total = useSelector((state)=>state.model.totalRun);
 

  
  useEffect(() => {
   dispatch(Actions.getAllModelData());
    dispatch(Actions.getNumberOfModel());
  }, []);
console.log(total[0].total_run);
console.log(models);
const runs = total[0].total_run;

  return ( 
    <div>
      <Table tableRow={models} haein={runs}/>
    </div>
  );
};

export default WorkSpaceComponent;
