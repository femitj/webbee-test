import React from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../../store/reducer';
import Input, { CheckInput } from '../input';
import Wrapper from './style';

const Item = ({ item, category, items }) => {
  const dispatch = useDispatch();
  const setData = (val) => dispatch(setItems(val));
  const handleDelete = (id) => setData(items?.filter((x) => x?.id !== id));
  return (
    <Wrapper>
      <div className='header'>
        <div>
          {item[category?.title?.label?.replace(/ /g, '')]?.toString() ||
            category?.name}
        </div>
        <div onClick={() => handleDelete(item?.id)} className='delBtn'>
          x
        </div>
      </div>
      <>
        {category?.fields?.map((cat) =>
          cat?.type === 'text' ? (
            <div className='inputCont' key={Math.random()}>
              <Input
                label={cat?.label}
                type='text'
                value={item[[cat?.label?.replace(/ /g, '')]]}
                onChange={(e) => {
                  const newVal = items?.map((y) =>
                    y?.id === item?.id
                      ? {
                          ...item,
                          [cat?.label?.replace(/ /g, '')]: e.target.value,
                        }
                      : y
                  );
                  setData(newVal);
                }}
              />
            </div>
          ) : cat?.type === 'check' ? (
            <div className='inputCont' key={Math.random()}>
              <CheckInput
                label={cat?.label}
                checked={item[[cat?.label?.replace(/ /g, '')]]}
                onChange={(e) => {
                  const newVal = items?.map((y) =>
                    y?.id === item?.id
                      ? {
                          ...item,
                          [cat?.label?.replace(/ /g, '')]:
                            Boolean(item[[cat?.label?.replace(/ /g, '')]]) ===
                            true
                              ? false
                              : true,
                        }
                      : y
                  );
                  setData(newVal);
                }}
              />
            </div>
          ) : cat?.type === 'date' ? (
            <div className='inputCont' key={Math.random()}>
              <Input
                label={cat?.label}
                type='date'
                value={item[[cat?.label?.replace(/ /g, '')]] || new Date()}
                onChange={(e) => {
                  const newVal = items?.map((y) =>
                    y?.id === item?.id
                      ? {
                          ...item,
                          [cat?.label?.replace(/ /g, '')]: e.target.value,
                        }
                      : y
                  );
                  setData(newVal);
                }}
              />
            </div>
          ) : (
            <div className='inputCont' key={Math.random()}>
              <Input
                label={cat?.label}
                type='number'
                value={item[[cat?.label?.replace(/ /g, '')]]}
                onChange={(e) => {
                  const newVal = items?.map((y) =>
                    y?.id === item?.id
                      ? {
                          ...item,
                          [cat?.label?.replace(/ /g, '')]: e.target.value,
                        }
                      : y
                  );
                  setData(newVal);
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
