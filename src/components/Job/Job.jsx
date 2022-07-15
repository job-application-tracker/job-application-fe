import React from 'react';

export default function Job({ job: { position, company } }) {
  return <div>{`${position} || ${company}`}</div>;
}
