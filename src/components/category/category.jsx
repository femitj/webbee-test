import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteInventory,
  removeInventoryField,
  setInventoryField,
  updateInventoryField,
  updateInventoryItem,
} from '../../store/reducer';
import Input, { SelectInput } from '../input';

const Category = ({ val }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteInventory(id));
  const handleNewField = (val, newVal) =>
    dispatch(setInventoryField({ item: val, newField: newVal }));
  const handleRemoveField = (val, newVal) =>
    dispatch(removeInventoryField({ item: val, fieldId: newVal.id }));
  const handleUpdateField = (type, newVal, from) =>
    dispatch(
      updateInventoryField({ item: val, value: type, field: newVal, from })
    );
  const handleUpdateItem = (value, from) =>
    dispatch(updateInventoryItem({ item: val, value, from }));

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
          onChange={(e) => handleUpdateItem(e.target.value, 'name')}
        />
      </div>
      <div className='inputCont'>
        <SelectInput
          label='Title Field'
          value={val?.title}
          options={val?.fields?.filter((x) => x?.label !== '')}
          labelName='label'
          onChange={(x) => handleUpdateItem(x, 'title')}
          getValue='label'
        />
      </div>
      {val?.fields?.map((x, index) => (
        <div key={index} className='inputCont'>
          <Input
            value={x?.label}
            onChange={(e) => handleUpdateField(e.target.value, x, 'label')}
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
                      handleUpdateField(id, x);
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
            onChange={(item) => handleNewField(val, item)}
            getValue
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
