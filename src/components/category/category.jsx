import React, { useState } from 'react';
import Input, { SelectInput } from '../input';

const Category = ({ setData, data, val, index }) => {
  const [errorObj, setErrorObj] = useState({});

  const handleNew = (val, newVal) => {
    const newArray = data.map((item) =>
      item.id === val?.id
        ? {
            ...val,
            title: val?.fields[0],
            fields: [
              ...val?.fields,
              {
                type: newVal?.id,
                label: '',
                id: Math.random(),
              },
            ],
          }
        : item
    );
    setData(newArray);
  };
  const handleDelete = (id) => setData(data?.filter((x) => x?.id !== id));

  const handleRemoveField = (val, x) => {
    const newArray = data.map((item) =>
      item.id === val?.id
        ? {
            ...val,
            fields: [...val?.fields.filter((y) => y?.id !== x?.id)],
          }
        : item
    );
    setData(newArray);
  };

  return (
    <div key={val?.id} className='form'>
      <div className='header'>
        <div>{val?.name}</div>
        <div onClick={() => handleDelete(val?.id)} className='delBtn'>
          x
        </div>
      </div>
      <div className='inputCont'>
        <Input
          label='Name'
          value={val.name}
          onChange={(e) => {
            const newArray = data.map((item) =>
              item.id === val?.id ? { ...val, name: e.target.value } : item
            );
            setData(newArray);
          }}
        />
      </div>
      <div className='inputCont'>
        <SelectInput
          label='Title Field'
          value={val?.title}
          options={val?.fields?.filter((x) => x?.label !== '')}
          labelName='label'
          onChange={(x) => {
            const newArray = data.map((item) =>
              item.id === val?.id ? { ...val, title: x } : item
            );
            setData(newArray);
          }}
          getValue='label'
        />
      </div>
      {val?.fields?.map((x, index) => (
        <div key={index} className='inputCont'>
          <Input
            value={x?.label}
            onBlur={(e) => {
              return val?.fields.map((z) => {
                if (
                  z?.id !== x?.id &&
                  z?.label === e.target.value &&
                  z?.type === x?.type
                ) {
                  setErrorObj({ id: x?.id });
                  return setTimeout(() => {
                    setErrorObj({});
                    handleRemoveField(val, x);
                  }, 5000);
                } else {
                  return '';
                }
              });
            }}
            onChange={(e) => {
              const newField = val?.fields?.map((y) =>
                y?.id === x?.id
                  ? {
                      ...x,
                      label: e.target.value,
                    }
                  : y
              );
              const newArray = data.map((item) =>
                item.id === val?.id
                  ? {
                      ...val,
                      fields: newField,
                    }
                  : item
              );
              setData(newArray);
            }}
            inputCont={
              errorObj.id === x.id ? 'removeBorder errorStyle' : 'removeBorder'
            }
            hasError={errorObj?.id === x?.id ? 'field already exists' : ''}
            rightIcon={
              <div
                style={{
                  width: 'auto',
                }}
              >
                <SelectInput
                  inputWrapper={'borderNone'}
                  options={[
                    { label: 'Text', id: 'text' },
                    { label: 'Checkbox', id: 'check' },
                    { label: 'Date', id: 'date' },
                    { label: 'Number', id: 'number' },
                    { label: 'Remove', id: 'remove' },
                  ]}
                  value={x?.type}
                  onChange={(id) => {
                    if (id === 'remove') {
                      handleRemoveField(val, x);
                    } else {
                      const newArray = data.map((item) =>
                        item.id === val?.id
                          ? {
                              ...val,
                              fields: [
                                ...val?.fields.filter(
                                  (y) => y?.label !== x?.label
                                ),
                                {
                                  ...x,
                                  type: id,
                                },
                              ],
                            }
                          : item
                      );
                      setData(newArray);
                    }
                  }}
                />
              </div>
            }
          />
        </div>
      ))}
      <div
        className='footer'
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            width: '30%',
          }}
        >
          <SelectInput
            className='btn'
            options={[
              { label: 'Text', id: 'text' },
              { label: 'Checkbox', id: 'check' },
              { label: 'Date', id: 'date' },
              { label: 'Number', id: 'number' },
            ]}
            value=''
            placeholder='Add Field'
            inputClassName='btnClass'
            onChange={(item) => handleNew(val, item)}
            getValue
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
