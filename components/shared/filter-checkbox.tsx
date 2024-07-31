import React from "react";
import { cn } from '@/lib/utils'
import { Checkbox } from "../ui/index";

export interface FilterCheckboxProps {
    text?: string;
    value?: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked
}) => {
    return <div className="flex items-center space-x-2">
        <Checkbox
            id={`checkbox-${String(value)}`}
            checked={checked}
            value={value}
            onCheckedChange={onCheckedChange}
            className="rounded-[8px] w-6 h-6"
        />
        <label
            htmlFor={`checkbox-${String(value)}`}
            className="leading-none cursor-pointer flex-1">
            {text}
        </label>
        {endAdornment}
    </div>
}