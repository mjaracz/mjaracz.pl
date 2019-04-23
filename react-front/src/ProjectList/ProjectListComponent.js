import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import type {Projects} from "../redux/type";

type Props = {
  projects: Projects[],
  loading: boolean
}

const ProjectListComponent = (props: Props) => {
  const {projects, loading} = props;
  return (
    loading
      ? <CircularProgress className="main__progress" size={80}/>
      : projects.map(item => <ItemCard key={item.id} url={item.url} id={item.id} title={item.title}/>)
  )
};


export default ProjectListComponent;
