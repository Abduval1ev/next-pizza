'use client'
import * as React from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';

interface Props {
    title: string
    products: any[];
    categoryId: number;
    className?: string
    listsClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    products,
    className,
    categoryId,
    listsClassName
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <section className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5' />
            <div className={cn(`grid grid-cols-3 gap-[50px]`, listsClassName)}>
                {products.map((product, index) => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        text={product.text}
                        name={product.name}
                        className={className}
                        imageURL={product.imageURL}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </section>
    )
};
