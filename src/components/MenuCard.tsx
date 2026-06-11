import type { Menu } from '../data/menus'

type MenuCardProps = {
  menu: Menu
  spinning: boolean
}

export function MenuCard({ menu, spinning }: MenuCardProps) {
  return (
    <article className={`menu-card ${spinning ? 'spinning' : ''}`}>
      <div className="menu-visual" aria-hidden="true">
        <span>{menu.emoji}</span>
      </div>
      <div className="menu-details">
        <span className="menu-category">{menu.country} · {menu.category}</span>
        <h2>{menu.name}</h2>
        <p>{menu.description}</p>
        <div className="menu-tags">
          {menu.moods.map((mood) => (
            <span key={mood}>#{mood}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
