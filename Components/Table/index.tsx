import Link from "next/link";
import { FunctionComponent } from "react";
import css from "./styles.module.scss";

type TableItem = {
  date: string;
  role: string;
  detail: string;
  slug: string;
};

const Table: FunctionComponent<{ items: Array<TableItem> }> = ({ items }) => (
  <table border={1} rules="rows" className={css.table}>
    <tbody>
      {items.map((item, index) => (
        <Link href={`guides/${item.slug}`} className={css.link}>
          <tr className={css.row} key={`table-row-${index}`}>
            <td className={css.date}>{item.date}</td>
            <td className={css.role}>{item.role}</td>
            <td className={css.detail}>{item.detail}</td>
          </tr>
        </Link>
      ))}
    </tbody>
  </table>
);

export default Table;
