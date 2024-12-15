'use client'

import React from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui/index";

type Item = FilterCheckboxProps

interface Props {
    title?: string;
    items: Item[];
    limit?: number;
    className?: string
    defaultItems?: Item[];
    onChange?: (value: string[]) => void;
    defaultValue?: string[]
    searchInputPlaceholder?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        items,
        limit = 5,
        className,
        defaultItems,
        onChange,
        defaultValue,
        searchInputPlaceholder = "Search ...",
    }
) => {
    const [showAll, setShowAll] = React.useState(true)
    const [searchValue, setSearchValue] = React.useState('')

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const list = showAll
        ? items.filter((item) => item.text?.toLowerCase()
            .includes(searchValue.toLowerCase()))
        : defaultItems?.slice(0, limit)

    return (
        <section className={className}>
            <p className="font-bold mb-3">{title}</p>
            <label className="mb-5">
                <Input
                    className="bg-gray-50 border-none"
                    placeholder={searchInputPlaceholder}
                    onChange={onChangeSearchInput}
                />
            </label>
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list?.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        checked={false}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        onCheckedChange={() => console.log('clicked',)}
                    />
                ))}
            </div>
            {
                items?.length > limit && (
                    <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                        <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                            {showAll ? 'Скрыть' : '+ Показать все'} 
                        </button>
                    </div>
                )
            }
        </section>)
}