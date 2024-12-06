type LocationItemProps = {
  city: string;
  isActive: boolean;
  onClick: () => void;
};

export default function LocationItem({ city, isActive, onClick }: LocationItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        href="#"
        onClick={onClick}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}
