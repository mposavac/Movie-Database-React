import React, { Component } from "react";
import { connect } from "react-redux";
import {
  personAction,
  fullBioAction
} from "../../../store/actions/personActions";

import MainContent from "./components/MainContent";
import Loading from "../../Loading";
import FullBioDisplay from "./components/FullBioDisplay";

export class PersonPage extends Component {
  componentDidMount() {
    const personId = this.props.match.params.personId;
    this.props.personAction(personId);
  }
  componentWillUnmount() {
    this.props.resetAction();
  }
  handleClickBio = () => {
    this.props.fullBioAction(this.props.person.fullBioShown);
  };
  render() {
    const { personData, fullBioShown } = this.props.person;
    console.log(this.props);
    return (
      <React.Fragment>
        <Loading color={"pe"} isLoading={personData ? false : true} />
        {personData && (
          <React.Fragment>
            <div className="person-background" />
            <MainContent
              data={this.props.person}
              handleClickBio={this.handleClickBio}
            />
          </React.Fragment>
        )}
        {personData && (
          <FullBioDisplay
            biography={personData.biography}
            fullBioShown={fullBioShown}
            onClick={this.handleClickBio}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    person: state.person
  };
};

const mapStateToDispatch = dispatch => {
  return {
    personAction: personId => dispatch(personAction(personId)),
    fullBioAction: state => dispatch(fullBioAction(state)),
    resetAction: () => dispatch({ type: "SET_DEFAULT" })
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(PersonPage);
