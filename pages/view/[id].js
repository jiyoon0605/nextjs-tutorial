import axios from "axios";
import Head from "next/head";
import Item from "../../src/component/Item";

const Post = ({ item }) => {
  return (
    item && (
      <>
        <Head>
          <title>{item.name}</title>{" "}
        </Head>
        <Item item={item} />
      </>
    )
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const { data } = await axios.get(API_URL);

  return {
    props: {
      item: data,
    },
  };
}
