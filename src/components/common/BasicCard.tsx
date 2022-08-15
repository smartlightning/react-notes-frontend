import { FC } from 'react';

interface CardInterface {
  id: string;
  date: string;
  author: string;
  text: string;
}
const BasicNote: FC<CardInterface> = ({ id, date, author, text }) => {
  return <div>BasicNote</div>;
};

export default BasicNote;
