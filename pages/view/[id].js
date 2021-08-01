import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";

export default function Post() {
  const [item, setItem] = useState({});
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    if (id && id > 0) getData();
  }, [id]);

  return isLoading ? (
    <div style={{ padding: "300px 0" }}>
      <Loader line="centered" active />
    </div>
  ) : (
    <Item item={item} />
  );
}
