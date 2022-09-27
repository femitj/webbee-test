import React from 'react';
import { useDispatch } from 'react-redux';
import { setItems, updateItem } from '../../store/reducer';
import Input, { CheckInput } from '../input';
import Wrapper from './style';

const Item = ({ item, category, items }) => {
  const dispatch = useDispatch();
  const setData = (val) => dispatch(setItems(val));
  const handleUpdateItem = (value, from) =>
    dispatch(updateItem({ item, value, from }));
  const handleDelete = (id) => setData(items?.filter((x) => x?.id !== id));

  return (
    <Wrapper>
      <div className='header'>
        <div>{item[category?.title?.id]?.toString() || category?.name}</div>
        <div onClick={() => handleDelete(item?.id)} className='delBtn'>
          x
        </div>
      </div>
      <>
        {category?.fields?.map((cat, index) =>
          cat?.type === 'text' ? (
            <div className='inputCont' key={index}>
              <Input
                label={cat?.label}
                type='text'
                value={item[cat?.id]}
                onChange={(e) => {
                  handleUpdateItem(e.target.value, [cat?.id]);
                }}
              />
            </div>
          ) : cat?.type === 'check' ? (
            <div className='inputCont' key={index}>
              <CheckInput
                label={cat?.label}
                checked={item[[cat?.id]]}
                onChange={(e) => {
                  handleUpdateItem(
                    Boolean(item[[cat?.id]]) === true ? false : true,
                    [cat?.id]
                  );
                }}
              />
            </div>
          ) : cat?.type === 'date' ? (
            <div className='inputCont' key={index}>
              <Input
                label={cat?.label}
                type='date'
                value={item[[cat?.id]] || new Date()}
                onChange={(e) => {
                  handleUpdateItem(e.target.value, [cat?.id]);
                }}
              />
            </div>
          ) : (
            <div className='inputCont' key={index}>
              <Input
                label={cat?.label}
                type='number'
                value={item[[cat?.id]]}
                onChange={(e) => {
                  handleUpdateItem(e.target.value, [cat?.id]);
                }}
              />
            </div>
          )
        )}
      </>
    </Wrapper>
  );
};

export default Item;
