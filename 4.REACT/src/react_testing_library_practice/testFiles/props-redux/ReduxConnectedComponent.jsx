// src/ReduxConnectedComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './action';

const ReduxConnectedComponent = ({ dataFromRedux, myFetchData=()=>{}, customProp }) => (
  <div>
    <p>My fetch data: {myFetchData()}</p>
    <p>Data from Redux: {dataFromRedux}</p>
    <p>Custom Prop: {customProp}</p>
    <button onClick={myFetchData}>Fetch Data</button>
  </div>
);

const mapStateToProps = state => ({
  dataFromRedux: state.data,
});

const mapDispatchToProps = dispatch => ({
  myFetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxConnectedComponent);
