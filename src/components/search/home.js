import React , {useEffect} from "react";
import Table from "./main";
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
      <Table tableRow={state}/>
    </div>
  );
};

export default WorkSpaceComponent;
