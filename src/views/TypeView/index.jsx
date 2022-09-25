import Wrapper from './style';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button';
import { setItems } from '../../store/reducer';
import Layout from '../../components/layout';
import Item from '../../components/items';
import React from 'react';

const TypeView = () => {
  const params = useParams();
  const { inventories, itemList: items } = useSelector(
    (state) => state.generalReducer
  );
  const dispatch = useDispatch();
  const setData = (val) => dispatch(setItems(val));
  const category = inventories?.find((x) => String(x?.id) === params?.id);
  const dataKeys = category?.fields?.map((x) => x?.label?.replace(/ /g, ''));
  const obj = dataKeys?.reduce((accumulator, value) => {
    return { ...accumulator, [value]: '' };
  }, {});

  const handleNew = () =>
    items
      ? setData([
          ...items,
          {
            categoryId: category?.id,
            id: Math?.random(),
            ...obj,
          },
        ])
      : setData([
          {
            categoryId: category?.id,
            id: Math?.random(),
            ...obj,
          },
        ]);

  return (
    <Layout>
      <Wrapper className='app-padding home-page'>
        {items
          ?.filter((val) => String(val?.categoryId) === params?.id)
          ?.map((item) => (
            <Item
              item={item}
              key={item?.id}
              category={category}
              items={items}
            />
          ))}
        <div>
          <Button background='blue' content='Add Item' onClick={handleNew} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default TypeView;
