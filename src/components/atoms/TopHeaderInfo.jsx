import React from 'react';

export default function TopHeaderInfo(props) {
  return (
    <>
      <i className={props.iconInfo}></i> {props.textInfo}
    </>
  );
}
