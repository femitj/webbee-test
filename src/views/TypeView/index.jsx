import React from 'react';
import Wrapper from './style';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button';
import { setNewItem } from '../../store/reducer';
import Layout from '../../components/layout';
import Item from '../../components/items';

const TypeView = () => {
  const params = useParams();
  const { inventories, itemList: items } = useSelector(
    (state) => state.generalReducer
  );
  const dispatch = useDispatch();
  const handleNew = () => dispatch(setNewItem(params?.id));
  const category = inventories?.find((x) => String(x?.id) === params?.id);

  return (
    <Layout>
      {category ? (
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
            <Button
              background='#a3a3a3'
              outline='#a3a3a3'
              content='Add Item'
              onClick={handleNew}
            />
          </div>
        </Wrapper>
      ) : (
        <div>Not found</div>
      )}
    </Layout>
  );
};

export default TypeView;
