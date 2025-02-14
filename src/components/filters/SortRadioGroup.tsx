'use client';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useSort } from '@/context/SortContext';
import { SORT_OPTIONS } from '@/data/sortOption';

export const SortRadioGroup = () => {
    const { sortOption, setSortOption } = useSort();

    return (
        <>
            <h3 className='font-medium text-gray-750'>Sort by</h3>
            <RadioGroup
                value={sortOption}
                onValueChange={(value) => {
                    setSortOption(value as SortOption);
                }}
            >
                {SORT_OPTIONS.map((option) => (
                    <div
                        key={option}
                        className='cursor:pointer flex items-center space-x-2 text-base font-light'
                    >
                        <RadioGroupItem
                            value={option}
                            id={option}
                            aria-label={option}
                        />
                        <label
                            htmlFor={option}
                            className='hover:cursor-pointer'
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </RadioGroup>
        </>
    );
};
