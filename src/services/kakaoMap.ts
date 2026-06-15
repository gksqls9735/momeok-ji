export type Coordinates = {
  latitude: number
  longitude: number
}

export type RestaurantPlace = {
  id: string
  place_name: string
  address_name: string
  road_address_name: string
  phone: string
  place_url: string
  distance: string
  x: string
  y: string
}

type PlacesSearchOptions = {
  x: number
  y: number
  size: number
  category_group_code: string
  sort: string
}

type KakaoPlaces = {
  keywordSearch: (
    keyword: string,
    callback: (result: RestaurantPlace[], status: string) => void,
    options: PlacesSearchOptions,
  ) => void
}

type KakaoMapInstance = {
  setBounds: (bounds: KakaoLatLngBounds) => void
  relayout: () => void
}

type KakaoLatLng = object

type KakaoLatLngBounds = {
  extend: (position: KakaoLatLng) => void
}

type KakaoMarker = {
  setMap: (map: KakaoMapInstance | null) => void
}

export type KakaoSdk = {
  maps: {
    load: (callback: () => void) => void
    Map: new (container: HTMLElement, options: { center: KakaoLatLng; level: number }) => KakaoMapInstance
    LatLng: new (latitude: number, longitude: number) => KakaoLatLng
    LatLngBounds: new () => KakaoLatLngBounds
    Marker: new (options: {
      map: KakaoMapInstance
      position: KakaoLatLng
      title?: string
    }) => KakaoMarker
    services: {
      Places: new () => KakaoPlaces
      Status: { OK: string; ZERO_RESULT: string }
      SortBy: { DISTANCE: string }
    }
  }
}

declare global {
  interface Window {
    kakao?: KakaoSdk
  }
}

let sdkPromise: Promise<KakaoSdk> | null = null

export function loadKakaoMap() {
  if (window.kakao?.maps.services) return Promise.resolve(window.kakao)
  if (sdkPromise) return sdkPromise

  const appKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
  if (!appKey) {
    return Promise.reject(new Error('카카오맵 JavaScript 키가 설정되지 않았어요.'))
  }

  sdkPromise = new Promise<KakaoSdk>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`
    script.async = true
    script.onerror = () => {
      sdkPromise = null
      script.remove()
      reject(new Error(
        '카카오맵 SDK 요청이 브라우저에서 차단됐어요. 광고 차단기나 추적 방지를 끄고 dapi.kakao.com을 허용해주세요.',
      ))
    }
    script.onload = () => {
      window.kakao?.maps.load(() => {
        if (window.kakao?.maps.services) resolve(window.kakao)
        else reject(new Error('카카오맵을 초기화하지 못했어요.'))
      })
    }
    document.head.appendChild(script)
  })

  return sdkPromise
}

export function getCurrentCoordinates() {
  return new Promise<Coordinates>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('이 브라우저에서는 현재 위치를 사용할 수 없어요.'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }),
      () => reject(new Error('주변 식당을 찾으려면 현재 위치 권한이 필요해요.')),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    )
  })
}

export async function searchNearbyRestaurants(menuName: string, coordinates: Coordinates) {
  const kakao = await loadKakaoMap()
  const places = new kakao.maps.services.Places()

  return new Promise<RestaurantPlace[]>((resolve, reject) => {
    places.keywordSearch(
      menuName.replace('/', ' '),
      (result, status) => {
        if (status === kakao.maps.services.Status.OK) resolve(result)
        else if (status === kakao.maps.services.Status.ZERO_RESULT) resolve([])
        else reject(new Error('주변 식당 검색 중 문제가 발생했어요.'))
      },
      {
        x: coordinates.longitude,
        y: coordinates.latitude,
        size: 15,
        category_group_code: 'FD6',
        sort: kakao.maps.services.SortBy.DISTANCE,
      },
    )
  })
}
