import React, {Component} from 'react';
import ReposListComponent from "./ReposListComponent";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getRepos} from "../redux/actions/repos";
import Button from "../Button/Button";
import "./ReposList.scss";

class ReposList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false
    }
  }

  buttonOnClick = () => {
    this.props.getRepos();
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  };

  render() {
    const {buttonClicked} = this.state;
    const {repos, loading} = this.props;
    return (
      <div>
        <Button
          buttonClicked={buttonClicked}
          buttonOnClick={this.buttonOnClick}
        />
        <ReposListComponent
          buttonClicked={buttonClicked}
          loading={loading}
          repos={repos}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  repos: state.repos.reposData,
  loading: state.repos.loading,
  error: state.repos.error
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getRepos
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReposList);
