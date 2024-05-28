import React, { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return (
    <label className="block mb-2 text-sm font-medium text-dark">
      {children}
    </label>
  );
};

export default Label;
