import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { FilterDropdown } from './components/FilterDropdown'
import { MenuCard } from './components/MenuCard'
import {
  categories,
  countries,
  moods,
  menus,
  type Category,
  type Country,
  type Menu,
  type Mood,
} from './data/menus'

const themes = [
  { id: 'orange', label: '오렌지', color: '#ec5a2a' },
  { id: 'mint', label: '민트', color: '#168c78' },
  { id: 'berry', label: '베리', color: '#c24470' },
  { id: 'ocean', label: '오션', color: '#287fc2' },
  { id: 'lavender', label: '라벤더', color: '#8066c9' },
  { id: 'mocha', label: '모카', color: '#98633d' },
  { id: 'lemon', label: '레몬', color: '#d49b12' },
  { id: 'night', label: '나이트', color: '#8b7cf6' },
] as const

type Theme = (typeof themes)[number]['id']

function App() {
  const [category, setCategory] = useState<Category>('전체')
  const [country, setCountry] = useState<Country>('전체 국가')
  const [mood, setMood] = useState<Mood>('아무거나')
  const [recommendation, setRecommendation] = useState<Menu>(menus[0])
  const [history, setHistory] = useState<Menu[]>([])
  const [isPicking, setIsPicking] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('momeok-theme')
    return themes.some((item) => item.id === savedTheme)
      ? savedTheme as Theme
      : 'orange'
  })
  const [openFilter, setOpenFilter] = useState<'category' | 'country' | 'mood' | null>(null)
  const intervalRef = useRef<number | null>(null)

  const filteredMenus = useMemo(
    () =>
      menus.filter(
        (menu) =>
          (category === '전체' || menu.category === category) &&
          (country === '전체 국가' || menu.country === country) &&
          (mood === '아무거나' || menu.moods.includes(mood)),
      ),
    [category, country, mood],
  )
  const displayedRecommendation = filteredMenus.some(
    (menu) => menu.id === recommendation.id,
  )
    ? recommendation
    : filteredMenus[0]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('momeok-theme', theme)
    const themeColor = themes.find((item) => item.id === theme)?.color
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor ?? '#ec5a2a')
  }, [theme])

  const pickMenu = () => {
    if (isPicking || filteredMenus.length === 0) return

    setIsPicking(true)
    let spins = 0
    intervalRef.current = window.setInterval(() => {
      const next =
        filteredMenus[Math.floor(Math.random() * filteredMenus.length)]
      setRecommendation(next)
      spins += 1

      if (spins >= 12) {
        if (intervalRef.current) window.clearInterval(intervalRef.current)
        setHistory((current) => [
          next,
          ...current.filter((menu) => menu.id !== next.id),
        ].slice(0, 10))
        setIsPicking(false)
      }
    }, 80)
  }

  const resetFilters = () => {
    setCategory('전체')
    setCountry('전체 국가')
    setMood('아무거나')
  }

  const viewHistoryMenu = (menu: Menu) => {
    resetFilters()
    setRecommendation(menu)
    setHistoryOpen(false)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="모먹지 홈">
          <img className="brand-mark" src="/favicon.svg" alt="" />
          <span>모먹지!</span>
        </a>
        <div className="topbar-actions">
          <div className="theme-picker">
            <button
              type="button"
              aria-label="테마 선택"
              aria-expanded={themeOpen}
              onClick={() => setThemeOpen((open) => !open)}
            >
              <span className="theme-icon" aria-hidden="true">◐</span>
              테마
            </button>
            {themeOpen && (
              <div className="theme-options">
                <p>분위기 바꾸기</p>
                {themes.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={theme === item.id ? 'active' : ''}
                    onClick={() => {
                      setTheme(item.id)
                      setThemeOpen(false)
                    }}
                  >
                    <span style={{ background: item.color }} />
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button type="button" onClick={() => setHistoryOpen(true)}>
            <span aria-hidden="true">◷</span>
            봤던 메뉴
            <strong>{history.length}</strong>
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">오늘도 고민 중인가요?</p>
          <h1>
            그래서 오늘, <em>뭐 먹지?</em>
          </h1>
          <p className="hero-copy">조건을 정하고 버튼을 누르면 맛있는 답을 골라드려요.</p>
        </section>

        <section className="picker" aria-label="메뉴 추천">
          <div className="filter-summary">
            <div className="dropdown-row">
              <FilterDropdown
                label="종류"
                options={categories}
                selected={category}
                open={openFilter === 'category'}
                onToggle={() => setOpenFilter(openFilter === 'category' ? null : 'category')}
                onSelect={(option) => {
                  setCategory(option)
                  setOpenFilter(null)
                }}
              />
              <FilterDropdown
                label="나라"
                options={countries}
                selected={country}
                open={openFilter === 'country'}
                onToggle={() => setOpenFilter(openFilter === 'country' ? null : 'country')}
                onSelect={(option) => {
                  setCountry(option)
                  setOpenFilter(null)
                }}
              />
              <FilterDropdown
                label="기분"
                options={moods}
                selected={mood}
                open={openFilter === 'mood'}
                onToggle={() => setOpenFilter(openFilter === 'mood' ? null : 'mood')}
                onSelect={(option) => {
                  setMood(option)
                  setOpenFilter(null)
                }}
              />
            </div>
            <div className="filter-result-count">
              <span>추천 후보</span>
              <strong>{filteredMenus.length}</strong>
              {(category !== '전체' || country !== '전체 국가' || mood !== '아무거나') && (
                <button type="button" aria-label="필터 초기화" onClick={resetFilters}>×</button>
              )}
            </div>
          </div>
          <div className="result-area">
            {displayedRecommendation ? (
              <MenuCard menu={displayedRecommendation} spinning={isPicking} />
            ) : (
              <article className="menu-card empty-result">
                <div>
                  <span aria-hidden="true">🍽️</span>
                  <h2>조건에 맞는 메뉴가 없어요</h2>
                  <p>카테고리나 나라, 오늘의 기분을 하나 바꿔보세요.</p>
                </div>
              </article>
            )}
            <button
              className="pick-button"
              type="button"
              onClick={pickMenu}
              disabled={isPicking || filteredMenus.length === 0}
            >
              <span>{isPicking ? '맛있는 메뉴 찾는 중...' : '오늘 메뉴 골라줘!'}</span>
              <span aria-hidden="true">→</span>
            </button>
            <p className="hint">마음에 안 들면 몇 번이고 다시 눌러도 괜찮아요.</p>
          </div>
        </section>
      </main>

      {openFilter && (
        <button
          className="dropdown-backdrop"
          type="button"
          aria-label="드롭다운 닫기"
          onClick={() => setOpenFilter(null)}
        />
      )}

      {historyOpen && (
        <button
          className="panel-backdrop"
          type="button"
          aria-label="패널 닫기"
          onClick={() => setHistoryOpen(false)}
        />
      )}

      <aside className={`side-panel history-panel ${historyOpen ? 'open' : ''}`} aria-hidden={!historyOpen}>
        <div className="panel-header">
          <div>
            <p className="eyebrow">최근 추천</p>
            <h2>봤던 메뉴</h2>
          </div>
          <button type="button" aria-label="최근 메뉴 닫기" onClick={() => setHistoryOpen(false)}>×</button>
        </div>
        <div className="panel-content history-list">
          {history.length > 0 ? history.map((menu) => (
            <button type="button" key={menu.id} onClick={() => viewHistoryMenu(menu)}>
              <span>{menu.emoji}</span>
              <span>
                <strong>{menu.name}</strong>
                <small>{menu.country} · {menu.category}</small>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          )) : (
            <div className="empty-history">
              <span aria-hidden="true">🍽️</span>
              <p>아직 봤던 메뉴가 없어요.<br />추천 버튼을 눌러 시작해보세요.</p>
            </div>
          )}
        </div>
      </aside>
    </div>
  )
}

export default App
