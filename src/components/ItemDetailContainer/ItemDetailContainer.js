import { useEffect } from "react";
import { getItems } from "../../api/Api";

export default function ItemDetailContainer() {
  useEffect(() => {
    getItems().then((items) => {
      items.find((i) => i.id === 1);
    });
  }, []);
}
