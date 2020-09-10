import React , {useEffect} from "react";
import Table from "./main";
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from "../../store/actions";
const WorkSpaceComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.model.models);
const haein = "haeina"
  useEffect(() => {
    dispatch(Actions.getAllModelData());
  }, []);
console.log(haein);
console.log(state);
  return ( 
    <div>
      <Table tableRow={state} haein={haein}/>
    </div>
  );
};

export default WorkSpaceComponent;
