import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSortOption } from '../../store/action';
import { useState } from 'react';
import { sortOptionNames } from '../../const';
import { SortOptionName } from '../../types';

export default function PlaceSorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const sortOption = useAppSelector((state) => state.offers.sortOption);
  const [isOptionsOpen, setOptionsOpen] = useState(false);

  const handleSortChange = (option: SortOptionName) => {
    dispatch(changeSortOption(option));
    setOptionsOpen(false);
  };

  const toggleOptions = () => {
    setOptionsOpen((prev) => !prev);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span style={{paddingRight: 5}} className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleOptions}
        onKeyDown={(e) => e.key === 'Enter' && toggleOptions()}
      >
        {sortOptionNames[sortOption]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isOptionsOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.entries(sortOptionNames).map(([value, name]) => (
            <li
              key={value}
              className={`places__option ${sortOption === value ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleSortChange(value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSortChange(value)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
