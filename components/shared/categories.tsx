import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string
}

const lists = ["Все", "Мясные", "Острые", "Сладкие", "Вегетарианские", "C курицей", "Ещё "]
const activeIndex = 0

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                lists.map((el, index) => (
                    <a key={index} className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
                        activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary')}>
                        <button>{el}</button>
                    </a>
                ))
            }
        </div>
    )
}