import { Link, useSearchParams } from 'react-router-dom';

type LocationItemProps = {
  city: string;
  isActive: boolean;
  onClick: () => void;
};

export default function LocationItem({ city, isActive, onClick }: LocationItemProps): JSX.Element {
  const [, setSearchParams] = useSearchParams();

  const handleClick = () => {
    onClick();
    setSearchParams({ city });
  };

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        to={`/?city=${city}`}
        onClick={handleClick}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}
