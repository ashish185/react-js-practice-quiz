import React from 'react';
import { STATUS_CODE } from './enumsConstant';

/* Learning, it is not always to pass data type */
type StatusProps = {
  status: STATUS_CODE.LOADING | STATUS_CODE.SUCCESS | STATUS_CODE.ERROR;
};

const Status = ({ status }: StatusProps) => {
  let message = '';
  if (status === STATUS_CODE.LOADING) {
    message = 'loading...';
  } else if (status === STATUS_CODE.SUCCESS) {
    message = 'Success...';
  } else if (status === STATUS_CODE.ERROR) {
    message = 'Error...';
  }
  return (
    <div>
      <hr></hr>
      <div>Status - {message}</div>
    </div>
  );
};

export default Status;
