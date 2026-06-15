import { useEffect, useRef, useState } from 'react'
import type { Menu } from '../data/menus'
import {
  getCurrentCoordinates,
  loadKakaoMap,
  searchNearbyRestaurants,
  type Coordinates,
  type RestaurantPlace,
} from '../services/kakaoMap'

type RestaurantMapModalProps = {
  menu: Menu
  onClose: () => void
}

function formatDistance(distance: string) {
  const meters = Number(distance)
  if (!Number.isFinite(meters)) return ''
  return meters >= 1000 ? `${(meters / 1000).toFixed(1)}km` : `${meters}m`
}

export function RestaurantMapModal({ menu, onClose }: RestaurantMapModalProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
  const [places, setPlaces] = useState<RestaurantPlace[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    const search = async () => {
      try {
        const currentCoordinates = await getCurrentCoordinates()
        const restaurants = await searchNearbyRestaurants(menu.name, currentCoordinates)
        if (!active) return
        setCoordinates(currentCoordinates)
        setPlaces(restaurants)
      } catch (searchError) {
        if (active) {
          setError(searchError instanceof Error ? searchError.message : '주변 식당을 찾지 못했어요.')
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    search()
    return () => {
      active = false
    }
  }, [menu.name])

  useEffect(() => {
    if (!coordinates || places.length === 0 || !mapContainerRef.current) return

    let active = true
    loadKakaoMap().then((kakao) => {
      if (!active || !mapContainerRef.current) return

      const currentPosition = new kakao.maps.LatLng(coordinates.latitude, coordinates.longitude)
      const map = new kakao.maps.Map(mapContainerRef.current, {
        center: currentPosition,
        level: 5,
      })
      const bounds = new kakao.maps.LatLngBounds()
      bounds.extend(currentPosition)
      new kakao.maps.Marker({ map, position: currentPosition, title: '현재 위치' })

      places.forEach((place) => {
        const position = new kakao.maps.LatLng(Number(place.y), Number(place.x))
        bounds.extend(position)
        new kakao.maps.Marker({ map, position, title: place.place_name })
      })

      map.setBounds(bounds)
      window.setTimeout(() => map.relayout(), 0)
    }).catch((mapError) => {
      if (active) setError(mapError instanceof Error ? mapError.message : '지도를 표시하지 못했어요.')
    })

    return () => {
      active = false
    }
  }, [coordinates, places])

  return (
    <div className="map-modal-layer" role="dialog" aria-modal="true" aria-labelledby="map-modal-title">
      <button className="map-modal-backdrop" type="button" aria-label="지도 닫기" onClick={onClose} />
      <section className="map-modal">
        <header className="map-modal-header">
          <div>
            <p className="eyebrow">내 주변 식당</p>
            <h2 id="map-modal-title">{menu.emoji} {menu.name}</h2>
          </div>
          <button type="button" aria-label="지도 닫기" onClick={onClose}>×</button>
        </header>

        {loading ? (
          <div className="map-modal-message">
            <strong>현재 위치 주변 식당을 찾고 있어요.</strong>
            <span>브라우저에서 위치 접근을 허용해주세요.</span>
          </div>
        ) : error ? (
          <div className="map-modal-message error">
            <strong>지도를 표시하지 못했어요.</strong>
            <span>{error}</span>
          </div>
        ) : places.length === 0 ? (
          <div className="map-modal-message">
            <strong>검색되는 식당이 없어요.</strong>
            <span>카카오맵에서 다른 메뉴 이름으로 검색해보세요.</span>
          </div>
        ) : (
          <div className="map-modal-content">
            <div className="restaurant-map" ref={mapContainerRef} />
            <div className="restaurant-list">
              <p>가까운 순서로 {places.length}곳</p>
              {places.map((place) => (
                <a key={place.id} href={place.place_url} target="_blank" rel="noreferrer">
                  <span>
                    <strong>{place.place_name}</strong>
                    <small>{place.road_address_name || place.address_name}</small>
                  </span>
                  <em>{formatDistance(place.distance)}</em>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
