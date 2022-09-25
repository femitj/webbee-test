import React from 'react';
import Wrapper from './style';
import { useDispatch } from 'react-redux';
import Button from '../../components/button';
import Item from '../../components/items';
import { setItems } from '../../store/reducer';

const ItemList = ({ category, items }) => {
  const dispatch = useDispatch();
  const setData = (val) => dispatch(setItems(val));
  const dataKeys = category?.fields?.map((x) => x?.label?.replace(/ /g, ''));
  const obj = dataKeys?.reduce((accumulator, value) => {
    return { ...accumulator, [value]: '' };
  }, {});

  const handleNew = () =>
    setData([
      ...items,
      {
        categoryId: category?.id,
        id: Math?.random(),
        ...obj,
      },
    ]);
  return (
    <Wrapper className='app-padding'>
      <div className='header-x'>{category?.name}</div>
      <div className='container'>
        {items
          ?.filter((val) => String(val?.categoryId) === String(category?.id))
          .map((item) => (
            <Item
              item={item}
              category={category}
              items={items}
              key={item?.id}
            />
          ))}
        <div>
          <Button
            background='#a3a3a3'
            content='Add Item'
            onClick={handleNew}
            outline='#a3a3a3'
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ItemList;
