import { useMemo, useRef, useState } from 'react'
import './App.css'
import { FilterGroup } from './components/FilterGroup'
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

function App() {
  const [category, setCategory] = useState<Category>('전체')
  const [country, setCountry] = useState<Country>('전체 국가')
  const [mood, setMood] = useState<Mood>('아무거나')
  const [recommendation, setRecommendation] = useState<Menu>(menus[0])
  const [history, setHistory] = useState<Menu[]>([])
  const [isPicking, setIsPicking] = useState(false)
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
        ].slice(0, 3))
        setIsPicking(false)
      }
    }, 80)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="모먹지 홈">
          <span className="brand-mark">ㅁ</span>
          <span>모먹지!</span>
        </a>
        <span className="topbar-note">오늘의 한 끼를 가볍게 결정해요</span>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">오늘도 고민 중인가요?</p>
          <h1>
            그래서 오늘,
            <br />
            <em>뭐 먹지?</em>
          </h1>
          <p className="hero-copy">
            취향을 고르고 버튼을 눌러보세요.
            <br />
            모먹지가 맛있는 답을 골라드릴게요.
          </p>
        </section>

        <section className="picker-grid" aria-label="메뉴 추천">
          <aside className="filters">
            <FilterGroup
              label="어떤 종류가 좋아요?"
              options={categories}
              selected={category}
              onSelect={setCategory}
            />
            <FilterGroup
              label="어느 나라 음식이 당겨요?"
              options={countries}
              selected={country}
              onSelect={setCountry}
            />
            <FilterGroup
              label="오늘은 어떤 날이에요?"
              options={moods}
              selected={mood}
              onSelect={setMood}
            />
            <p className="match-count">
              조건에 맞는 메뉴 <strong>{filteredMenus.length}개</strong>
            </p>
          </aside>

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

        {history.length > 0 && (
          <section className="history" aria-label="최근 추천">
            <div>
              <p className="eyebrow">방금 골라본 메뉴</p>
              <h2>후보를 다시 볼까요?</h2>
            </div>
            <div className="history-list">
              {history.map((menu) => (
                <button
                  type="button"
                  key={menu.id}
                  onClick={() => setRecommendation(menu)}
                >
                  <span>{menu.emoji}</span>
                  <span>{menu.name}</span>
                </button>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer>
        <span>모먹지!</span>
        <span>매일의 맛있는 결정을 위해</span>
      </footer>
    </div>
  )
}

export default App
