type FilterGroupProps<T extends string> = {
  label: string
  options: readonly T[]
  selected: T
  onSelect: (option: T) => void
}

export function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onSelect,
}: FilterGroupProps<T>) {
  return (
    <div className="filter-group">
      <h2>{label}</h2>
      <div className="filter-options">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={selected === option ? 'active' : ''}
            onClick={() => onSelect(option)}
            aria-pressed={selected === option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
