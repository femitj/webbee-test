import React from 'react';
import Wrapper from './styles';
import Button from '../../components/button';
import Category from '../../components/category/category';
import { useDispatch, useSelector } from 'react-redux';
import { setInventory } from '../../store/reducer';
import Layout from '../../components/layout';

const Index = () => {
  const { inventories: data } = useSelector(
    (state: any) => state?.generalReducer
  );
  const dispatch = useDispatch();
  const setData = (val: any) => dispatch(setInventory(val));

  const handleCategory = () => {
    const id = Math.random();

    return setData([
      ...data,
      {
        id: id,
        name: ' ',
        title: '',
        fields: [],
      },
    ]);
  };

  return (
    <Layout>
      <Wrapper>
        {data?.map((val: any, index: any) => (
          <Category
            key={val?.id}
            val={val}
            data={data}
            setData={setData}
            index={index}
          />
        ))}

        <div>
          <Button
            background='#a3a3a3'
            content='Add Category'
            onClick={handleCategory}
            outline='#a3a3a3'
          />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Index;
