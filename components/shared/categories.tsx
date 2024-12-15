'use client'
import React from 'react'
import { useCategoryStore } from '@/store/category'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
}

const lists = [
    { id: 1, list: "Все" },
    { id: 2, list: "Мясные" },
    { id: 3, list: "Острые" },
    { id: 4, list: "Сладкие" },
    { id: 5, list: "Вегетарианские" },
    { id: 6, list: "C курицей" },
    { id: 7, list: "Ещё" }
]

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId)

    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                lists.map(({ list, id }, index) => (
                    <a
                        key={index}
                        href={`/#${list}`}
                        className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
                            categoryActiveId === id
                            && 'bg-white shadow-md shadow-gray-200 text-primary')}
                    >
                        <button>{list}</button>
                    </a>
                ))
            }
        </div>
    )
}