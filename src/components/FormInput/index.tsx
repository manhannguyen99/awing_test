import React, { useContext } from "react";
import { styled } from "styled-components";
import { AppContext } from "../../contexts";

type TProps = {
  label: string;
  children: React.ReactNode;
  error?: boolean;
  value_input?: string;
  required?: boolean;
};

const FormInput = ({
  label,
  value_input,
  children,
  error,
  required,
}: TProps) => {
  const value = useContext(AppContext);
  if (!value) return <></>;
  return (
    <S>
      <span className="label">{label}</span>
      {children}
      {required && (error || value.submitted) && !value_input && <p>Error</p>}
    </S>
  );
};

export default FormInput;

const S = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  p {
    color: red;
  }
  &:not(&:first-child) {
    margin-top: 4px;
  }

  .label {
    min-width: 80px;
  }
`;
