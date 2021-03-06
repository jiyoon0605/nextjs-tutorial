import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";

export default function Home({ list, name }) {
  // const [list, setList] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     setList(res.data);
  //     setLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Head>
        <title>Home | tutorial</title>
      </Head>
      <div>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const API_URL = process.env.apiUrl || "null";
  const { data } = await axios.get(API_URL);

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
