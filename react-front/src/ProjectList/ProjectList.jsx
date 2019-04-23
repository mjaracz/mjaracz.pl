//@flow
import React, {Component} from 'react';
import ProjectListComponent from './ProjectListComponent';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProjects} from "../redux/actions/projects";
import ReposList from "../ReposList/ReposList";
import "./ProjectList.scss";

interface Props {
  repos: Object[],
  getRepos(): Object,
  getProjects(): Object
}

class ProjectList extends Component<Props> {
  componentDidMount(): void {
    this.props.getProjects();
  }
  render(): React$Element {
    const {loading, projects} = this.props;
    return (
      <main>
        <div className="flex">
          <ProjectListComponent
            projects={projects}
            loading={loading}
          />
          <ReposList/>
        </div>
      </main>
    )
  }
}
const mapStateToProps = (state) => ({
  loading: state.projects.loading,
  projects: state.projects.data,
  error: state.projects.error
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getProjects
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
