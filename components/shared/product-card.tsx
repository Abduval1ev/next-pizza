import * as React from 'react';
import { Plus } from 'lucide-react';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  id: number;
  name: string;
  text: string,
  price: number;
  imageURL: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  text,
  imageURL,
  className,
}) => {
  return (
    <article className={className ? className : `bg-gray-100`}>
      <div className={`flex justify-center p-6 bg-secondary rounded-lg`}>
        <img className={`w-[215px] h-[210px]`} src={imageURL} alt={name} />
      </div>

      <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

      <p className={`text-sm text-gray-400`}>{text}</p>

      <div className={`flex justify-between items-center mt-4`}>
        <span className={`text-[20px]`}>
          от <b>{price}</b>
        </span>
        {/* <Link href={`/product/${id}`}> */}
        <Button className={`text-base font-bold`}>
          <Plus size={20} className={`mr-1`} />
          Добавить
        </Button>
        {/* </Link> */}
      </div>
    </article>
  )
};


