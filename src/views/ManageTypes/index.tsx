import React from 'react';
import Wrapper from './styles';
import Button from '../../components/button';
import Category from '../../components/category/category';
import { useDispatch, useSelector } from 'react-redux';
import { setNewInventory } from '../../store/reducer';
import Layout from '../../components/layout';

const Index = () => {
  const { inventories: data } = useSelector(
    (state: any) => state?.generalReducer
  );
  const dispatch = useDispatch();
  const handleAddNew = () => dispatch(setNewInventory());

  return (
    <Layout>
      <Wrapper>
        {data?.map((val: any) => (
          <Category key={val?.id} val={val} />
        ))}

        <div>
          <Button
            background='#a3a3a3'
            content='Add Category'
            onClick={handleAddNew}
            outline='#a3a3a3'
          />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Index;
