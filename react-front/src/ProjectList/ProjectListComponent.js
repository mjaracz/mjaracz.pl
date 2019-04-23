import React, {Component} from "react";
import ItemCard from "./ItemCard/ItemCard";
import CircularProgress from "@material-ui/core/CircularProgress";

class ProjectListComponent extends Component {
  render() {
    const {projects, loading} = this.props;
    return (
      loading
        ? <CircularProgress className="main__progress" size={80}/>
        : projects.map(item => <ItemCard key={item.id} url={item.url} id={item.id} title={item.title}/>)
    )
  }
}

export default ProjectListComponent;
