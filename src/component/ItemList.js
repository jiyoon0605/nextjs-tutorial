import { Grid, Item } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";
export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((e) => (
            <Grid.Column key={e.id}>
              <Link href={`/view/${e.id}`} passHref>
                <div className={styles.wrap}>
                  <img
                    src={e.image_link}
                    alt={Item.name}
                    className={styles.img_item}
                  />
                  <strong className={styles.tit_item}>{e.name}</strong>
                  <span className={styles.txt_info}>
                    {e.category} {e.product_type}
                  </span>
                  <strong className={styles.num_price}>${e.price}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
