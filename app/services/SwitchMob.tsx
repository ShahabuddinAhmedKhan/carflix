"use client";
import React from 'react';
import { Switch } from 'antd';

const SwitchMob: React.FC<{ value: boolean, onChange: (checked: boolean) => void }> = ({ value, onChange }) => {
  return <Switch checked={value} onChange={onChange} />;
};

export default SwitchMob;
