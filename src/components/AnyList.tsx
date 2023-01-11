import React from "react";

interface AnyListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// Такой вариант записи нужно заменить,
//  чтобы корректно использовать <T>
// const AnyList: FC<AnyListProps> = () => {
//   return <div></div>;
// };

function AnyList<T>(props: AnyListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}

export default AnyList;
