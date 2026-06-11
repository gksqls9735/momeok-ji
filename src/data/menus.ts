export const categories = [
  '전체', '한식', '중식', '일식', '양식', '분식', 
  '아시안', '패스트푸드', '야식/안주', '카페/디저트'
] as const;

export const moods = [
  '아무거나', '든든하게', '가볍게', '스트레스', '비 오는 날', 
  '해장', '건강하게', '매콤하게', '달달하게'
] as const;

export const countries = [
  '전체 국가', '한국', '중국', '일본', '미국', '이탈리아',
  '베트남', '태국', '인도', '멕시코', '프랑스', '기타'
] as const;

export type Category = (typeof categories)[number];
export type Mood = (typeof moods)[number];
export type Country = (typeof countries)[number];

export type Menu = {
  id: number;
  name: string;
  category: Exclude<Category, '전체'>;
  country: Exclude<Country, '전체 국가'>;
  moods: Exclude<Mood, '아무거나'>[];
  emoji: string;
  description: string;
};

type MenuData = Omit<Menu, 'country'>;

const menuData: MenuData[] = [
  // --- 기존 한식 ---
  { id: 1, name: '김치찌개', category: '한식', moods: ['든든하게', '비 오는 날', '매콤하게'], emoji: '🥘', description: '칼칼한 국물과 따뜻한 밥, 실패 없는 한 끼' },
  { id: 2, name: '제육볶음', category: '한식', moods: ['든든하게', '스트레스', '매콤하게'], emoji: '🍚', description: '매콤달콤한 양념으로 확실한 기분 전환' },
  { id: 3, name: '비빔밥', category: '한식', moods: ['가볍게', '건강하게'], emoji: '🥗', description: '다채로운 나물과 고추장을 쓱쓱 비벼서' },
  
  // --- 한식 추가 ---
  { id: 13, name: '국밥', category: '한식', moods: ['든든하게', '해장', '비 오는 날'], emoji: '🥣', description: '뚝배기에 바글바글 끓여 나오는 뜨끈한 위로' },
  { id: 14, name: '삼겹살', category: '한식', moods: ['든든하게', '스트레스'], emoji: '🥓', description: '지글지글 고기 굽는 소리만으로도 힐링' },
  { id: 15, name: '냉면', category: '한식', moods: ['가볍게', '해장'], emoji: '🍜', description: '가슴속까지 시원해지는 쫄깃한 면발과 육수' },
  { id: 16, name: '찜닭', category: '한식', moods: ['든든하게', '달달하게'], emoji: '🍗', description: '단짠단짠 양념이 쏙 밴 고기와 당면의 조화' },
  { id: 17, name: '갈비탕', category: '한식', moods: ['든든하게', '건강하게'], emoji: '🍲', description: '맑고 진한 국물에 부드러운 고기가 듬뿍' },
  { id: 18, name: '부대찌개', category: '한식', moods: ['든든하게', '스트레스', '매콤하게'], emoji: '🥘', description: '햄과 소시지, 라면 사리까지 풍성한 잔치' },
  { id: 19, name: '감자탕', category: '한식', moods: ['든든하게', '해장', '비 오는 날'], emoji: '🍲', description: '얼큰한 뼈 국물에 푹 익은 감자와 시래기' },
  { id: 20, name: '보쌈', category: '한식', moods: ['든든하게'], emoji: '🥬', description: '야들야들하게 삶은 고기와 아삭한 무김치' },
  { id: 21, name: '칼국수', category: '한식', moods: ['든든하게', '비 오는 날'], emoji: '🍜', description: '진한 육수에 끓여낸 쫄깃한 수타면' },
  { id: 22, name: '설렁탕', category: '한식', moods: ['든든하게', '해장', '건강하게'], emoji: '🥣', description: '뽀얗게 우러난 국물에 밥 한 공기 뚝딱' },

  // --- 기존 중식 ---
  { id: 4, name: '짜장면', category: '중식', moods: ['든든하게', '스트레스', '달달하게'], emoji: '🍜', description: '달큰하고 진한 소스가 면발에 착 감기는 맛' },
  { id: 5, name: '마라탕', category: '중식', moods: ['스트레스', '비 오는 날', '매콤하게'], emoji: '🌶️', description: '얼얼하고 뜨끈하게, 원하는 재료를 가득' },

  // --- 중식 추가 ---
  { id: 23, name: '짬뽕', category: '중식', moods: ['해장', '비 오는 날', '매콤하게'], emoji: '🍜', description: '불맛 나는 얼큰한 국물과 해물의 시원함' },
  { id: 24, name: '볶음밥', category: '중식', moods: ['든든하게'], emoji: '🍛', description: '고슬고슬하게 볶아낸 밥에 짜장 소스 살짝' },
  { id: 25, name: '탕수육', category: '중식', moods: ['스트레스', '달달하게'], emoji: '🥓', description: '바삭한 튀김에 새콤달콤한 소스 듬뿍' },
  { id: 26, name: '마라샹궈', category: '중식', moods: ['스트레스', '매콤하게'], emoji: '🔥', description: '자극적인 매운맛이 필요할 때 볶아먹는 마라' },
  { id: 27, name: '양꼬치', category: '중식', moods: ['스트레스', '든든하게'], emoji: '🍢', description: '빙글빙글 돌아가는 꼬치와 쯔란의 강렬한 향' },
  { id: 28, name: '딤섬', category: '중식', moods: ['가볍게'], emoji: '🥟', description: '육즙이 팡 터지는 따뜻하고 섬세한 만두' },

  // --- 기존 일식 ---
  { id: 6, name: '초밥', category: '일식', moods: ['가볍게', '건강하게'], emoji: '🍣', description: '깔끔하고 산뜻하게 즐기는 한 점의 행복' },
  { id: 7, name: '돈카츠', category: '일식', moods: ['든든하게', '스트레스'], emoji: '🍱', description: '바삭한 튀김옷과 촉촉한 고기의 조합' },
  { id: 8, name: '우동', category: '일식', moods: ['가볍게', '비 오는 날'], emoji: '🍲', description: '탱글한 면과 따뜻한 국물이 필요한 날' },

  // --- 일식 추가 ---
  { id: 29, name: '라멘', category: '일식', moods: ['든든하게', '해장', '비 오는 날'], emoji: '🍜', description: '진한 돼지뼈 육수에 차슈를 얹은 일본 라면' },
  { id: 30, name: '규동', category: '일식', moods: ['가볍게', '든든하게'], emoji: '🍚', description: '달콤짭짤한 소고기를 얹은 일본식 덮밥' },
  { id: 31, name: '소바', category: '일식', moods: ['가볍게', '건강하게'], emoji: '🥢', description: '시원한 쯔유에 적셔 먹는 메밀면' },
  { id: 32, name: '텐동', category: '일식', moods: ['든든하게', '스트레스'], emoji: '🍤', description: '갓 튀겨낸 바삭한 튀김이 산처럼 쌓인 덮밥' },
  { id: 33, name: '샤브샤브', category: '일식', moods: ['건강하게', '비 오는 날', '든든하게'], emoji: '🍲', description: '뜨거운 육수에 고기와 채소를 살짝 데쳐서' },
  { id: 34, name: '연어덮밥', category: '일식', moods: ['가볍게', '건강하게'], emoji: '🐟', description: '부드럽고 기름진 연어가 입안에서 사르르' },

  // --- 기존 양식 ---
  { id: 9, name: '파스타', category: '양식', moods: ['든든하게'], emoji: '🍝', description: '익숙하지만 언제나 근사한 오늘의 선택' },
  { id: 10, name: '샌드위치', category: '양식', moods: ['가볍게', '건강하게'], emoji: '🥪', description: '바쁜 날에도 신선하고 간편한 한 끼' },

  // --- 양식 추가 ---
  { id: 35, name: '피자', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🍕', description: '쭈욱 늘어나는 치즈와 짭짤한 토핑의 축제' },
  { id: 36, name: '스테이크', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🥩', description: '육즙 가득한 고기로 나에게 주는 특별한 보상' },
  { id: 37, name: '샐러드', category: '양식', moods: ['가볍게', '건강하게'], emoji: '🥗', description: '내 몸을 위해 신선한 채소와 단백질 가득' },
  { id: 38, name: '리조또', category: '양식', moods: ['든든하게'], emoji: '🥘', description: '크림이나 토마토소스에 뭉근하게 끓여낸 쌀요리' },
  { id: 39, name: '수제버거', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🍔', description: '육즙 터지는 두툼한 패티와 신선한 채소' },
  { id: 40, name: '뇨끼', category: '양식', moods: ['가볍게', '달달하게'], emoji: '🥔', description: '부드러운 크림소스와 쫀득한 감자의 식감' },

  // --- 기존 분식 ---
  { id: 11, name: '떡볶이', category: '분식', moods: ['스트레스', '비 오는 날', '매콤하게'], emoji: '🍢', description: '매콤달콤한 소스에 푹 빠진 쫄깃한 떡' },
  { id: 12, name: '김밥', category: '분식', moods: ['가볍게', '건강하게'], emoji: '🍙', description: '한 줄에 맛과 영양을 알차게 말았어요' },

  // --- 분식 추가 ---
  { id: 41, name: '라면', category: '분식', moods: ['스트레스', '해장', '비 오는 날'], emoji: '🍜', description: '언제 먹어도 맛있는 아는 맛의 무서움' },
  { id: 42, name: '튀김', category: '분식', moods: ['가볍게', '비 오는 날'], emoji: '🍤', description: '떡볶이 국물에 찍어 먹으면 환상적인 바삭함' },
  { id: 43, name: '순대', category: '분식', moods: ['가볍게'], emoji: '🥓', description: '쫄깃한 당면과 내장을 소금에 콕 찍어서' },
  { id: 44, name: '쫄면', category: '분식', moods: ['스트레스', '매콤하게'], emoji: '🍝', description: '탱탱한 면발과 새콤매콤한 양념장' },

  // --- 아시안 (신규) ---
  { id: 45, name: '쌀국수', category: '아시안', moods: ['가볍게', '해장', '비 오는 날'], emoji: '🍜', description: '진한 고기 육수와 향긋한 고수, 부드러운 쌀면' },
  { id: 46, name: '팟타이', category: '아시안', moods: ['가볍게', '달달하게'], emoji: '🍝', description: '새우와 땅콩을 넣어 볶은 새콤달콤 태국 볶음면' },
  { id: 47, name: '나시고랭', category: '아시안', moods: ['든든하게'], emoji: '🍛', description: '특유의 향신료로 볶아낸 인도네시아 볶음밥' },
  { id: 48, name: '반미', category: '아시안', moods: ['가볍게'], emoji: '🥖', description: '바삭한 바게트 속에 고기와 채소가 듬뿍' },
  { id: 49, name: '똠얌꿍', category: '아시안', moods: ['해장', '매콤하게', '스트레스'], emoji: '🍲', description: '매콤, 새콤, 달콤함이 한 그릇에 담긴 매력' },
  { id: 50, name: '푸팟퐁커리', category: '아시안', moods: ['든든하게'], emoji: '🦀', description: '소프트크랩과 부드러운 계란 커리의 환상 조합' },

  // --- 패스트푸드 (신규) ---
  { id: 51, name: '프랜차이즈 햄버거', category: '패스트푸드', moods: ['가볍게', '스트레스'], emoji: '🍔', description: '빠르고 간편하게 칼로리를 채우고 싶을 때' },
  { id: 52, name: '치킨', category: '패스트푸드', moods: ['든든하게', '스트레스'], emoji: '🍗', description: '바삭한 튀김옷과 촉촉한 속살, 치느님' },
  { id: 53, name: '타코/브리또', category: '패스트푸드', moods: ['가볍게', '건강하게'], emoji: '🌮', description: '가득 찬 속재료를 한 손에 들고 깔끔하게' },
  { id: 54, name: '토스트', category: '패스트푸드', moods: ['가볍게', '달달하게'], emoji: '🍞', description: '버터에 구운 빵과 달달한 소스의 길거리 감성' },

  // --- 야식/안주 (신규) ---
  { id: 55, name: '닭발', category: '야식/안주', moods: ['스트레스', '매콤하게'], emoji: '🔥', description: '땀 뻘뻘 흘리며 뜯어먹는 중독성 강한 매운맛' },
  { id: 56, name: '곱창/막창', category: '야식/안주', moods: ['스트레스', '든든하게'], emoji: '🥘', description: '고소한 기름기와 쫄깃한 식감의 완벽한 안주' },
  { id: 57, name: '오돌뼈', category: '야식/안주', moods: ['스트레스', '매콤하게'], emoji: '🍖', description: '오독오독 씹히는 맛과 매콤한 양념, 그리고 주먹밥' },
  { id: 58, name: '육회', category: '야식/안주', moods: ['가볍게'], emoji: '🥩', description: '신선한 생고기에 노른자를 톡 터뜨려서' },
  { id: 59, name: '전/빈대떡', category: '야식/안주', moods: ['비 오는 날', '든든하게'], emoji: '🥞', description: '기름에 지글지글 부쳐낸 고소함, 막걸리 단짝' },

  // --- 카페/디저트 (신규) ---
  { id: 60, name: '케이크', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🍰', description: '입안에서 사르르 녹는 달콤한 행복' },
  { id: 61, name: '마카롱', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍬', description: '쫀득한 꼬끄와 달콤한 필링으로 당 충전' },
  { id: 62, name: '빙수', category: '카페/디저트', moods: ['달달하게'], emoji: '🍧', description: '시원한 얼음과 달달한 토핑으로 더위 사냥' },
  { id: 63, name: '크로플/와플', category: '카페/디저트', moods: ['달달하게'], emoji: '🧇', description: '바삭하게 구운 빵에 아이스크림이나 시럽을 얹어' },
  { id: 64, name: '베이글', category: '카페/디저트', moods: ['가볍게', '건강하게'], emoji: '🥯', description: '쫄깃한 빵에 크림치즈를 듬뿍 발라서' },

  // --- 한식 더보기 ---
  { id: 65, name: '닭갈비', category: '한식', moods: ['든든하게', '스트레스', '매콤하게'], emoji: '🍗', description: '매콤한 양념에 닭고기와 채소를 볶아 푸짐하게' },
  { id: 66, name: '순두부찌개', category: '한식', moods: ['해장', '비 오는 날', '매콤하게'], emoji: '🥘', description: '몽글몽글한 순두부와 얼큰한 국물의 조화' },
  { id: 67, name: '불고기', category: '한식', moods: ['든든하게', '달달하게'], emoji: '🥩', description: '달짝지근한 양념이 부드러운 고기에 쏙' },
  { id: 68, name: '콩나물국밥', category: '한식', moods: ['해장', '건강하게', '비 오는 날'], emoji: '🥣', description: '아삭한 콩나물과 시원한 국물로 속 편하게' },
  { id: 69, name: '닭한마리', category: '한식', moods: ['든든하게', '건강하게', '비 오는 날'], emoji: '🍲', description: '담백한 닭 육수에 칼국수까지 이어지는 한 끼' },
  { id: 70, name: '쌈밥', category: '한식', moods: ['건강하게', '가볍게'], emoji: '🥬', description: '신선한 채소에 밥과 반찬을 야무지게 한 쌈' },

  // --- 중식 더보기 ---
  { id: 71, name: '깐풍기', category: '중식', moods: ['스트레스', '매콤하게'], emoji: '🍗', description: '바삭한 닭고기에 새콤매콤한 소스를 입혀서' },
  { id: 72, name: '유린기', category: '중식', moods: ['가볍게', '스트레스'], emoji: '🥗', description: '바삭한 닭고기와 산뜻한 간장 소스의 만남' },
  { id: 73, name: '고추잡채', category: '중식', moods: ['든든하게', '매콤하게'], emoji: '🌶️', description: '아삭한 피망과 고기를 꽃빵에 싸 먹는 재미' },
  { id: 74, name: '우육면', category: '중식', moods: ['든든하게', '해장', '비 오는 날'], emoji: '🍜', description: '향신료 풍미 가득한 진한 소고기 국수' },
  { id: 75, name: '동파육', category: '중식', moods: ['든든하게', '달달하게'], emoji: '🥩', description: '오래 익혀 부드럽고 윤기 나는 중국식 돼지고기' },
  { id: 76, name: '완탕면', category: '중식', moods: ['가볍게', '해장'], emoji: '🥟', description: '탱글한 새우 완탕과 맑은 국물을 후루룩' },

  // --- 일식 더보기 ---
  { id: 77, name: '카레라이스', category: '일식', moods: ['든든하게', '달달하게'], emoji: '🍛', description: '진하고 부드러운 카레를 따뜻한 밥 위에 듬뿍' },
  { id: 78, name: '오코노미야키', category: '일식', moods: ['든든하게', '스트레스'], emoji: '🥞', description: '양배추와 해산물을 도톰하게 구운 일본식 부침개' },
  { id: 79, name: '가츠동', category: '일식', moods: ['든든하게', '달달하게'], emoji: '🍱', description: '돈카츠와 달큰한 계란을 밥 위에 푸짐하게' },
  { id: 80, name: '회덮밥', category: '일식', moods: ['가볍게', '건강하게', '매콤하게'], emoji: '🐟', description: '신선한 회와 채소를 새콤매콤하게 비벼서' },
  { id: 81, name: '야키소바', category: '일식', moods: ['든든하게', '스트레스'], emoji: '🍝', description: '짭짤한 소스 향이 매력적인 일본식 볶음면' },
  { id: 82, name: '오차즈케', category: '일식', moods: ['가볍게', '해장'], emoji: '🍚', description: '따뜻한 차를 밥에 부어 편안하게 즐기는 한 그릇' },

  // --- 양식 더보기 ---
  { id: 83, name: '라자냐', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🧀', description: '면과 고기 소스, 치즈를 켜켜이 쌓아 구운 맛' },
  { id: 84, name: '오믈렛', category: '양식', moods: ['가볍게', '건강하게'], emoji: '🍳', description: '폭신한 달걀 속에 채소와 치즈를 알차게' },
  { id: 85, name: '감바스', category: '양식', moods: ['가볍게', '스트레스'], emoji: '🍤', description: '마늘 향 가득한 올리브오일에 탱글한 새우' },
  { id: 86, name: '바비큐 플래터', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🍖', description: '훈연 향 가득한 고기를 다양하게 즐기는 한 판' },
  { id: 87, name: '토마토 수프', category: '양식', moods: ['가볍게', '건강하게', '비 오는 날'], emoji: '🥣', description: '새콤하고 따뜻한 토마토를 부드럽게 한 그릇' },
  { id: 88, name: '프렌치토스트', category: '양식', moods: ['가볍게', '달달하게'], emoji: '🍞', description: '촉촉하게 구운 빵에 메이플 시럽을 살짝' },

  // --- 분식 더보기 ---
  { id: 89, name: '라볶이', category: '분식', moods: ['스트레스', '매콤하게', '든든하게'], emoji: '🍜', description: '떡볶이에 라면 사리를 더한 확실한 선택' },
  { id: 90, name: '만두', category: '분식', moods: ['가볍게', '비 오는 날'], emoji: '🥟', description: '한입 베어 물면 따뜻한 육즙이 가득' },
  { id: 91, name: '어묵', category: '분식', moods: ['가볍게', '비 오는 날', '해장'], emoji: '🍢', description: '뜨끈한 국물과 함께 즐기는 길거리 대표 간식' },
  { id: 92, name: '잔치국수', category: '분식', moods: ['가볍게', '해장', '비 오는 날'], emoji: '🍜', description: '따뜻하고 담백한 멸치 육수에 부드러운 면발' },
  { id: 93, name: '주먹밥', category: '분식', moods: ['가볍게', '든든하게'], emoji: '🍙', description: '간편하지만 속은 알찬 동글동글 한 끼' },
  { id: 94, name: '핫도그', category: '분식', moods: ['가볍게', '달달하게'], emoji: '🌭', description: '바삭한 튀김옷에 설탕과 케첩을 듬뿍' },

  // --- 아시안 더보기 ---
  { id: 95, name: '분짜', category: '아시안', moods: ['가볍게', '건강하게'], emoji: '🥗', description: '숯불 고기와 쌀국수를 새콤한 소스에 적셔서' },
  { id: 96, name: '카오팟', category: '아시안', moods: ['든든하게'], emoji: '🍚', description: '고슬고슬한 밥에 태국의 풍미를 담은 볶음밥' },
  { id: 97, name: '치킨 커리', category: '아시안', moods: ['든든하게', '매콤하게'], emoji: '🍛', description: '향긋한 향신료와 부드러운 닭고기의 깊은 맛' },
  { id: 98, name: '탄두리 치킨', category: '아시안', moods: ['든든하게', '스트레스'], emoji: '🍗', description: '향신료에 재워 불향 가득하게 구운 닭고기' },
  { id: 99, name: '월남쌈', category: '아시안', moods: ['가볍게', '건강하게'], emoji: '🥬', description: '신선한 채소와 고기를 라이스페이퍼에 한가득' },
  { id: 100, name: '락사', category: '아시안', moods: ['해장', '매콤하게', '비 오는 날'], emoji: '🍜', description: '코코넛 향과 매콤한 국물이 어우러진 면 요리' },

  // --- 패스트푸드 더보기 ---
  { id: 101, name: '핫윙', category: '패스트푸드', moods: ['스트레스', '매콤하게'], emoji: '🍗', description: '매콤한 소스와 바삭한 닭 날개의 중독적인 맛' },
  { id: 102, name: '감자튀김', category: '패스트푸드', moods: ['가볍게', '스트레스'], emoji: '🍟', description: '갓 튀겨 바삭하고 짭짤한 모두의 사이드' },
  { id: 103, name: '치즈버거', category: '패스트푸드', moods: ['든든하게', '스트레스'], emoji: '🍔', description: '고소한 치즈와 육즙 가득한 패티의 정석' },
  { id: 104, name: '퀘사디아', category: '패스트푸드', moods: ['가볍게', '든든하게'], emoji: '🫓', description: '또띠아 사이에 치즈와 속재료를 넣어 바삭하게' },
  { id: 105, name: '치킨랩', category: '패스트푸드', moods: ['가볍게', '건강하게'], emoji: '🌯', description: '닭고기와 신선한 채소를 한 손에 간편하게' },
  { id: 106, name: '콘도그', category: '패스트푸드', moods: ['가볍게', '달달하게'], emoji: '🌭', description: '달콤하고 폭신한 반죽 속 짭짤한 소시지' },

  // --- 야식/안주 더보기 ---
  { id: 107, name: '골뱅이무침', category: '야식/안주', moods: ['스트레스', '매콤하게'], emoji: '🥗', description: '쫄깃한 골뱅이와 채소를 새콤매콤하게' },
  { id: 108, name: '먹태구이', category: '야식/안주', moods: ['가볍게', '스트레스'], emoji: '🐟', description: '바삭하고 고소하게 찢어 매콤한 소스에 콕' },
  { id: 109, name: '두부김치', category: '야식/안주', moods: ['든든하게', '매콤하게'], emoji: '🥘', description: '부드러운 두부와 잘 익은 볶음김치의 찰떡궁합' },
  { id: 110, name: '조개탕', category: '야식/안주', moods: ['해장', '비 오는 날', '가볍게'], emoji: '🍲', description: '조개의 감칠맛이 우러난 맑고 시원한 국물' },
  { id: 111, name: '감자전', category: '야식/안주', moods: ['비 오는 날', '든든하게'], emoji: '🥔', description: '겉은 바삭하고 속은 쫀득한 고소한 전' },
  { id: 112, name: '치즈계란말이', category: '야식/안주', moods: ['가볍게', '달달하게'], emoji: '🍳', description: '폭신한 계란 속에서 고소한 치즈가 쭉' },

  // --- 카페/디저트 더보기 ---
  { id: 113, name: '티라미수', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🍰', description: '커피 향과 부드러운 크림이 겹겹이 녹아드는 맛' },
  { id: 114, name: '푸딩', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍮', description: '탱글하고 부드러운 식감에 달콤한 캐러멜' },
  { id: 115, name: '도넛', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🍩', description: '폭신한 반죽과 달콤한 글레이즈로 당 충전' },
  { id: 116, name: '아이스크림', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🍨', description: '차갑고 부드럽게 녹아드는 기분 좋은 달콤함' },
  { id: 117, name: '요거트볼', category: '카페/디저트', moods: ['가볍게', '건강하게', '달달하게'], emoji: '🥣', description: '상큼한 요거트에 과일과 그래놀라를 듬뿍' },
  { id: 118, name: '소금빵', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🥐', description: '버터 향 가득하고 짭짤한 겉바속촉 빵' },

  // --- 선택지를 더 풍성하게 ---
  { id: 119, name: '돼지갈비', category: '한식', moods: ['든든하게', '달달하게', '스트레스'], emoji: '🍖', description: '달큰한 양념과 숯불 향이 입맛을 확 당기는 맛' },
  { id: 120, name: '잡채밥', category: '중식', moods: ['든든하게', '매콤하게'], emoji: '🍚', description: '고슬한 밥과 매콤한 잡채를 한 접시에 든든하게' },
  { id: 121, name: '사케동', category: '일식', moods: ['가볍게', '건강하게'], emoji: '🍣', description: '도톰한 연어와 따뜻한 밥이 어우러지는 덮밥' },
  { id: 122, name: '클럽 샌드위치', category: '양식', moods: ['가볍게', '든든하게'], emoji: '🥪', description: '여러 겹의 신선한 재료로 꽉 채운 샌드위치' },
  { id: 123, name: '인절미', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍡', description: '고소한 콩가루를 듬뿍 묻힌 쫀득한 전통 간식' },
  { id: 124, name: '닭똥집 튀김', category: '야식/안주', moods: ['스트레스', '든든하게'], emoji: '🍗', description: '오독오독한 식감과 바삭한 튀김옷의 매력' }
];

const countryByCategory: Record<Exclude<Category, '전체'>, Exclude<Country, '전체 국가'>> = {
  '한식': '한국',
  '중식': '중국',
  '일식': '일본',
  '양식': '이탈리아',
  '분식': '한국',
  '아시안': '기타',
  '패스트푸드': '미국',
  '야식/안주': '한국',
  '카페/디저트': '기타',
};

const countryByMenuName: Partial<Record<string, Exclude<Country, '전체 국가'>>> = {
  '샌드위치': '미국',
  '스테이크': '미국',
  '샐러드': '미국',
  '수제버거': '미국',
  '바비큐 플래터': '미국',
  '클럽 샌드위치': '미국',
  '뇨끼': '이탈리아',
  '라자냐': '이탈리아',
  '오믈렛': '프랑스',
  '감바스': '기타',
  '토마토 수프': '기타',
  '프렌치토스트': '프랑스',
  '쌀국수': '베트남',
  '반미': '베트남',
  '분짜': '베트남',
  '월남쌈': '베트남',
  '팟타이': '태국',
  '똠얌꿍': '태국',
  '푸팟퐁커리': '태국',
  '카오팟': '태국',
  '나시고랭': '기타',
  '락사': '기타',
  '치킨 커리': '인도',
  '탄두리 치킨': '인도',
  '타코/브리또': '멕시코',
  '퀘사디아': '멕시코',
  '토스트': '한국',
  '콘도그': '미국',
  '티라미수': '이탈리아',
  '마카롱': '프랑스',
  '크로플/와플': '기타',
  '베이글': '미국',
  '케이크': '미국',
  '빙수': '한국',
  '푸딩': '프랑스',
  '도넛': '미국',
  '아이스크림': '미국',
  '요거트볼': '미국',
  '소금빵': '프랑스',
  '인절미': '한국',
};

export const menus: Menu[] = menuData.map((menu) => ({
  ...menu,
  country: countryByMenuName[menu.name] ?? countryByCategory[menu.category],
}));
