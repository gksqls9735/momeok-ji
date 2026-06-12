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

  if (!code) return <span className={`flag flag-world ${className}`} aria-hidden="true">◎</span>
  if (code === 'us') {
    return (
      <span className={`flag flag-usa-clean ${className}`} aria-hidden="true">
        <i />
      </span>
    )
  }

  return <img className={`flag ${className}`} src={`https://flagcdn.com/${code}.svg`} alt="" />
}
