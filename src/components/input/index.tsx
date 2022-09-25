import React from 'react';
import Wrapper from './style';

interface InputProps {
  label?: string;
  onChange?: any;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  value?: any;
  leftIcon?: any;
  rightIcon?: any;
  placeholder?: any;
  as?: any;
  optionalLabelDiv?: any;
  type?: any;
  inputCont?: any;
}

const Input = ({
  label,
  onChange,
  disabled,
  className,
  labelClassName,
  inputClassName,
  value,
  leftIcon,
  rightIcon,
  placeholder,
  as,
  optionalLabelDiv,
  type,
  inputCont,
}: InputProps) => {
  return (
    <Wrapper leftIcon={leftIcon} rightIcon={rightIcon}>
      <div className={`input-container ${className || ''}`}>
        {label && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div className={`input-label ${labelClassName || ''}`}>{label}</div>
            {optionalLabelDiv || ''}
          </div>
        )}
        {as || (
          <div className={`inputBoxWrap ${inputCont || ''}`}>
            {leftIcon}
            <input
              className={inputClassName}
              type={type}
              value={value}
              onChange={onChange}
              disabled={disabled}
              placeholder={placeholder}
            />
            {rightIcon}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Input;

interface SelectInputProps {
  options: any;
  placeholder: any;
  leftIcon: any;
  rightIcon: any;
  label: string;
  onChange: any;
  inputClassName: string;
  className: string;
  labelClassName: string;
  value: any;
  labelName: any;
  optionValue: any;
  defaultValue: any;
  inputWrapper: any;
  disabled: boolean;
  getLabel: any;
  getValue: any;
}

export const SelectInput = ({
  options,
  placeholder,
  leftIcon,
  rightIcon,
  label,
  onChange,
  inputClassName,
  className,
  labelClassName,
  value,
  labelName,
  optionValue,
  defaultValue,
  inputWrapper,
  disabled,
  getLabel,
  getValue,
}: SelectInputProps) => {
  return (
    <Wrapper leftIcon={leftIcon} rightIcon={rightIcon}>
      <div className={`input-container ${className || ''}`}>
        {label && (
          <div className={`input-label ${labelClassName || ''}`}>{label}</div>
        )}
        <div className={`inputBoxWrap ${inputWrapper}`}>
          {leftIcon}
          <select
            className={inputClassName}
            onChange={(e) => {
              if (getValue) {
                return onChange(JSON.parse(e.target.value));
              }
              onChange(e.target.value);
            }}
            value={getValue ? JSON.stringify(value) : value}
            defaultValue={defaultValue}
            style={{
              textTransform: 'capitalize',
            }}
            disabled={disabled}
          >
            <option value=''>{placeholder}</option>
            {options?.length
              ? options.map((option: any) => (
                  <option
                    key={Math.random()}
                    value={
                      getValue
                        ? JSON.stringify(option)
                        : option[optionValue] || option?.id
                    }
                  >
                    {getLabel
                      ? getLabel(option)
                      : option[labelName] || option.label || option?.name}
                  </option>
                ))
              : ''}
          </select>
          {rightIcon}
        </div>
      </div>
    </Wrapper>
  );
};

interface CheckInputProps {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  checked?: any;
  onChange?: any;
  className?: string;
}

export const CheckInput = ({
  label,
  labelClassName,
  inputClassName,
  checked,
  onChange,
  className,
}: CheckInputProps) => {
  return (
    <Wrapper>
      <div className={`check-wrapper ${className || ''}`}>
        <input
          type='checkbox'
          checked={checked}
          className={`check-input ${inputClassName || ''}`}
          onChange={onChange}
        />
        <div className={`check-label ${labelClassName || ''}`}>{label}</div>
      </div>
    </Wrapper>
  );
};
