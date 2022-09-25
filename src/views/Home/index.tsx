import React from 'react';
import { useSelector } from 'react-redux';
import ItemList from '../../components/ItemList';
import Layout from '../../components/layout';
import Wrapper from './styles';

type Props = {};

const Home = (props: Props) => {
  const { inventories, itemList: items } = useSelector(
    (state: any) => state.generalReducer
  );
  return (
    <Layout>
      <Wrapper>
        {inventories?.map((category: any) => (
          <ItemList category={category} items={items} key={category?.id} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Home;
