"use client";
import React from 'react';
import { TimePicker as AntdTimePicker } from 'antd';  // Import the TimePicker from Ant Design
import dayjs from 'dayjs';

const { RangePicker } = AntdTimePicker;  // Destructure RangePicker from TimePicker

// Custom TimePicker component
const TimePicker = ({ value, onChange }) => {
  const format = 'HH:mm:ss';
  console.log("Value:",value );
  console.log("onChange:",onChange );
  

  return (
    <RangePicker
      format={format}
      value={value ? [dayjs(value[0]), dayjs(value[1])] : null}
      onChange={onChange}  // onChange to update the react-hook-form value
    />
  );
};

export default TimePicker;
