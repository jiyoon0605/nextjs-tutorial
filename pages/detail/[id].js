import axios from "axios";
import Head from "next/head";
import Item from "../../src/component/Item";

const Post = ({ item, name }) => {
  return (
    item && (
      <>
        <Head>
          <title>{item.name}</title>{" "}
        </Head>
        {name}환경입니다.
        <Item item={item} />
      </>
    )
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const { data } = await axios.get(API_URL);

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
