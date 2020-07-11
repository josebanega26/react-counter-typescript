import React from 'react';
interface CounterProps {
  value: number;
}
const Counter = ({ value }: CounterProps) => {
  return (
    <>
      <h1> Counter</h1>
      <h2>{value}</h2>
    </>
  );
};

export default Counter;
