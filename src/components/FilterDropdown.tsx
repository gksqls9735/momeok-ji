type FilterDropdownProps<T extends string> = {
  label: string
  options: readonly T[]
  selected: T
  open: boolean
  onToggle: () => void
  onSelect: (option: T) => void
}

export function FilterDropdown<T extends string>({
  label,
  options,
  selected,
  open,
  onToggle,
  onSelect,
}: FilterDropdownProps<T>) {
  return (
    <div className={`filter-dropdown ${open ? 'open' : ''}`}>
      <button
        className="filter-trigger"
        type="button"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{label}</span>
        <strong>{selected}</strong>
        <span aria-hidden="true">⌄</span>
      </button>
      {open && (
        <div className="dropdown-options">
          <p>{label} 선택</p>
          <div>
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
      )}
    </div>
  )
}
