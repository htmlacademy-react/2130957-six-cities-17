import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSortOption } from '../../store/action';
import { useState } from 'react';
import { sortOptionNames } from '../../const';
import { SortOptionKey } from '../../types';

export default function PlaceSorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const sortOption = useAppSelector((state) => state.offers.sortOption);
  const [isOptionsOpen, setOptionsOpen] = useState(false);

  const handleSortChange = (option: SortOptionKey) => {
    dispatch(changeSortOption(option));
    setOptionsOpen(false);
  };

  const toggleOptions = () => {
    setOptionsOpen((prev) => !prev);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span style={{ paddingRight: 5 }} className="places__sorting-caption">
        Sort by
      </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleOptions}
        onKeyDown={(e) => e.key === 'Enter' && toggleOptions()}
      >
        {sortOptionNames[sortOption as SortOptionKey]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isOptionsOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.entries(sortOptionNames).map(([key, name]) => (
            <li
              key={key}
              className={`places__option ${
                sortOption === key ? 'places__option--active' : ''
              }`}
              tabIndex={0}
              onClick={() => handleSortChange(key as SortOptionKey)}
              onKeyDown={(e) => e.key === 'Enter' && handleSortChange(key as SortOptionKey)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
