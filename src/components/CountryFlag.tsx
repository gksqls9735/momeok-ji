import { faCompass, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CountryFlagProps = {
  country: string
  className?: string
}

const countryCodes: Record<string, string> = {
  '한국': 'kr',
  'korea': 'kr',
  '중국': 'cn',
  'china': 'cn',
  '일본': 'jp',
  'japan': 'jp',
  '미국': 'us',
  'usa': 'us',
  '이탈리아': 'it',
  'italy': 'it',
  '베트남': 'vn',
  'vietnam': 'vn',
  '태국': 'th',
  'thailand': 'th',
  '인도': 'in',
  'india': 'in',
  '멕시코': 'mx',
  'mexico': 'mx',
  '프랑스': 'fr',
  'france': 'fr',
}

export function CountryFlag({ country, className = '' }: CountryFlagProps) {
  const code = countryCodes[country]

  if (!code) {
    return (
      <span className={`flag flag-world ${className}`} aria-hidden="true">
        <FontAwesomeIcon icon={country === '기타' ? faCompass : faGlobe} />
      </span>
    )
  }
  if (code === 'us') {
    return (
      <svg className={`flag ${className}`} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#fff" />
        <path fill="#ff4b44" d="M0 0h24v2H0zm0 4h24v2H0zm0 4h24v2H0zm0 4h24v2H0z" />
        <rect width="11" height="9" fill="#4664d8" />
        {Array.from({ length: 20 }, (_, index) => (
          <circle
            key={index}
            cx={1.5 + (index % 5) * 2}
            cy={1.4 + Math.floor(index / 5) * 2}
            r=".42"
            fill="#fff"
          />
        ))}
      </svg>
    )
  }
  if (code === 'cn') {
    return (
      <svg className={`flag ${className}`} viewBox="0 0 24 16" aria-hidden="true">
        <rect width="24" height="16" fill="#f43b24" />
        <path fill="#ffd84d" d="m5 2 .9 2.2 2.4.2-1.8 1.5.6 2.4L5 7 2.9 8.3l.6-2.4-1.8-1.5 2.4-.2z" />
        <circle cx="10.7" cy="3" r=".8" fill="#ffd84d" />
        <circle cx="13.1" cy="5.2" r=".8" fill="#ffd84d" />
        <circle cx="12.8" cy="8.1" r=".8" fill="#ffd84d" />
        <circle cx="10.4" cy="10.2" r=".8" fill="#ffd84d" />
      </svg>
    )
  }

  return <img className={`flag ${className}`} src={`https://flagcdn.com/${code}.svg`} alt="" />
}
