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
  { id: 124, name: '닭똥집 튀김', category: '야식/안주', moods: ['스트레스', '든든하게'], emoji: '🍗', description: '오독오독한 식감과 바삭한 튀김옷의 매력' },

  // --- 메뉴 대확장: 한식 ---
  { id: 125, name: '육개장', category: '한식', moods: ['든든하게', '해장', '매콤하게'], emoji: '🍲', description: '푹 찢은 소고기와 대파가 가득한 얼큰한 국물' },
  { id: 126, name: '된장찌개', category: '한식', moods: ['든든하게', '건강하게', '비 오는 날'], emoji: '🥘', description: '구수한 된장과 채소가 어우러진 집밥의 정석' },
  { id: 127, name: '낙지볶음', category: '한식', moods: ['스트레스', '매콤하게', '든든하게'], emoji: '🐙', description: '탱글한 낙지에 화끈한 양념을 더한 밥도둑' },
  { id: 128, name: '간장게장', category: '한식', moods: ['든든하게'], emoji: '🦀', description: '짭조름한 간장 양념과 고소한 게살의 조화' },
  { id: 129, name: '청국장', category: '한식', moods: ['건강하게', '든든하게', '비 오는 날'], emoji: '🥣', description: '진하고 구수한 향으로 속까지 든든하게' },

  // --- 메뉴 대확장: 중식 ---
  { id: 130, name: '마파두부', category: '중식', moods: ['매콤하게', '든든하게', '스트레스'], emoji: '🌶️', description: '부드러운 두부에 얼얼하고 진한 소스를 듬뿍' },
  { id: 131, name: '꿔바로우', category: '중식', moods: ['달달하게', '스트레스'], emoji: '🥓', description: '쫀득바삭한 튀김과 새콤달콤한 소스의 만남' },
  { id: 132, name: '탄탄면', category: '중식', moods: ['매콤하게', '든든하게', '비 오는 날'], emoji: '🍜', description: '고소한 땅콩 향과 매콤한 육수가 매력적인 면' },
  { id: 133, name: '게살볶음밥', category: '중식', moods: ['가볍게', '든든하게'], emoji: '🦀', description: '담백한 게살과 고슬고슬한 밥을 함께 볶아서' },
  { id: 134, name: '샤오롱바오', category: '중식', moods: ['가볍게', '비 오는 날'], emoji: '🥟', description: '얇은 피 안에 뜨거운 육즙을 가득 품은 만두' },

  // --- 메뉴 대확장: 일식 ---
  { id: 135, name: '카이센동', category: '일식', moods: ['가볍게', '건강하게'], emoji: '🍣', description: '신선한 해산물을 밥 위에 다채롭게 올린 덮밥' },
  { id: 136, name: '스키야키', category: '일식', moods: ['든든하게', '달달하게', '비 오는 날'], emoji: '🍲', description: '달큰한 간장 육수에 고기와 채소를 자작하게' },
  { id: 137, name: '타코야키', category: '일식', moods: ['가볍게', '스트레스'], emoji: '🐙', description: '겉은 바삭하고 속은 촉촉한 문어 한입 간식' },
  { id: 138, name: '야키토리', category: '일식', moods: ['가볍게', '스트레스'], emoji: '🍢', description: '숯불 향을 입힌 짭짤한 일본식 닭꼬치' },
  { id: 139, name: '나베', category: '일식', moods: ['든든하게', '건강하게', '비 오는 날'], emoji: '🍲', description: '고기와 채소를 따뜻한 국물에 보글보글' },

  // --- 메뉴 대확장: 양식 ---
  { id: 140, name: '까르보나라', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🍝', description: '고소하고 꾸덕한 크림이 면에 진하게 감기는 맛' },
  { id: 141, name: '알리오 올리오', category: '양식', moods: ['가볍게', '매콤하게'], emoji: '🍝', description: '마늘과 올리브오일로 완성한 깔끔한 파스타' },
  { id: 142, name: '마르게리타 피자', category: '양식', moods: ['가볍게', '든든하게'], emoji: '🍕', description: '토마토와 바질, 치즈로 완성한 담백한 피자' },
  { id: 143, name: '비프 부르기뇽', category: '양식', moods: ['든든하게', '비 오는 날'], emoji: '🥘', description: '와인과 함께 오랜 시간 부드럽게 익힌 소고기' },
  { id: 144, name: '키슈', category: '양식', moods: ['가볍게', '든든하게'], emoji: '🥧', description: '바삭한 파이 속에 달걀과 치즈를 채운 프랑스 요리' },

  // --- 메뉴 대확장: 분식 ---
  { id: 145, name: '비빔국수', category: '분식', moods: ['가볍게', '매콤하게', '스트레스'], emoji: '🍜', description: '새콤매콤한 양념에 면을 시원하게 비벼서' },
  { id: 146, name: '치즈떡볶이', category: '분식', moods: ['매콤하게', '달달하게', '스트레스'], emoji: '🧀', description: '매콤한 떡볶이에 고소한 치즈를 듬뿍' },
  { id: 147, name: '참치김밥', category: '분식', moods: ['가볍게', '든든하게'], emoji: '🍙', description: '고소한 참치마요를 알차게 채운 김밥' },
  { id: 148, name: '떡꼬치', category: '분식', moods: ['가볍게', '달달하게', '매콤하게'], emoji: '🍢', description: '바삭쫀득한 떡에 매콤달콤한 소스를 발라서' },
  { id: 149, name: '수제비', category: '분식', moods: ['든든하게', '비 오는 날'], emoji: '🥣', description: '투박하게 뜬 반죽과 진한 육수가 주는 따뜻함' },

  // --- 메뉴 대확장: 아시안 ---
  { id: 150, name: '반쎄오', category: '아시안', moods: ['가볍게', '건강하게'], emoji: '🥞', description: '바삭한 베트남식 부침개를 채소와 함께 한입' },
  { id: 151, name: '쏨땀', category: '아시안', moods: ['가볍게', '건강하게', '매콤하게'], emoji: '🥗', description: '풋파파야를 새콤매콤하게 버무린 태국식 샐러드' },
  { id: 152, name: '버터 치킨 커리', category: '아시안', moods: ['든든하게', '달달하게'], emoji: '🍛', description: '부드러운 토마토 버터 소스와 향긋한 닭고기' },
  { id: 153, name: '비리야니', category: '아시안', moods: ['든든하게', '매콤하게'], emoji: '🍚', description: '향신료와 고기를 넣어 풍성하게 지은 인도식 밥' },
  { id: 154, name: '미고랭', category: '아시안', moods: ['든든하게', '매콤하게'], emoji: '🍜', description: '달콤짭짤하고 매콤하게 볶은 인도네시아 면' },

  // --- 메뉴 대확장: 패스트푸드 ---
  { id: 155, name: '치킨너겟', category: '패스트푸드', moods: ['가볍게', '스트레스'], emoji: '🍗', description: '한입 크기로 바삭하게 즐기는 간편한 치킨' },
  { id: 156, name: '새우버거', category: '패스트푸드', moods: ['가볍게', '든든하게'], emoji: '🍔', description: '탱글한 새우 패티와 부드러운 소스의 조합' },
  { id: 157, name: '풀드포크 버거', category: '패스트푸드', moods: ['든든하게', '스트레스'], emoji: '🍔', description: '부드럽게 찢은 바비큐 돼지고기를 가득 채워서' },
  { id: 158, name: '부리또 볼', category: '패스트푸드', moods: ['든든하게', '건강하게'], emoji: '🥗', description: '밥과 고기, 채소, 살사를 한 그릇에 풍성하게' },
  { id: 159, name: '나초', category: '패스트푸드', moods: ['가볍게', '스트레스', '매콤하게'], emoji: '🧀', description: '바삭한 칩에 치즈와 살사를 듬뿍 얹어서' },

  // --- 메뉴 대확장: 야식/안주 ---
  { id: 160, name: '매운닭꼬치', category: '야식/안주', moods: ['스트레스', '매콤하게'], emoji: '🍢', description: '불향 입힌 닭꼬치에 화끈한 양념을 발라서' },
  { id: 161, name: '해물파전', category: '야식/안주', moods: ['든든하게', '비 오는 날'], emoji: '🥞', description: '오징어와 새우를 넣어 바삭하게 부친 전' },
  { id: 162, name: '콘치즈', category: '야식/안주', moods: ['가볍게', '달달하게'], emoji: '🌽', description: '톡톡 터지는 옥수수와 고소한 치즈의 조합' },
  { id: 163, name: '오징어볶음', category: '야식/안주', moods: ['든든하게', '매콤하게', '스트레스'], emoji: '🦑', description: '쫄깃한 오징어를 매콤한 양념에 볶아낸 맛' },
  { id: 164, name: '버팔로윙', category: '야식/안주', moods: ['스트레스', '매콤하게'], emoji: '🍗', description: '새콤매콤한 소스를 입힌 미국식 닭 날개' },

  // --- 메뉴 대확장: 카페/디저트 ---
  { id: 165, name: '에그타르트', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🥧', description: '바삭한 페이스트리와 부드러운 커스터드 한입' },
  { id: 166, name: '크렘 브륄레', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🍮', description: '바삭한 설탕막 아래 숨은 부드러운 커스터드' },
  { id: 167, name: '판나코타', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍮', description: '생크림을 부드럽게 굳혀 만든 이탈리아 디저트' },
  { id: 168, name: '망고 찹쌀밥', category: '카페/디저트', moods: ['달달하게', '든든하게'], emoji: '🥭', description: '달콤한 망고와 코코넛 찹쌀밥의 이색 조합' },
  { id: 169, name: '약과', category: '카페/디저트', moods: ['달달하게', '가볍게'], emoji: '🍪', description: '꿀 향 가득하고 쫀득한 한국 전통 디저트' },

  // --- 국가별 선택지 추가 ---
  { id: 170, name: '포보', category: '아시안', moods: ['가볍게', '해장', '비 오는 날'], emoji: '🍜', description: '맑고 깊은 소고기 육수로 즐기는 베트남 쌀국수' },
  { id: 171, name: '그린 커리', category: '아시안', moods: ['든든하게', '매콤하게'], emoji: '🍛', description: '허브 향과 코코넛 밀크가 어우러진 태국 커리' },
  { id: 172, name: '달 마크니', category: '아시안', moods: ['건강하게', '든든하게'], emoji: '🥣', description: '렌틸콩을 버터와 향신료로 진하게 끓인 인도 요리' },
  { id: 173, name: '엔칠라다', category: '양식', moods: ['든든하게', '매콤하게'], emoji: '🌯', description: '또띠아에 속재료를 채워 소스와 치즈로 구운 맛' },
  { id: 174, name: '크루아상', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🥐', description: '겹겹이 바삭하고 버터 향 가득한 프랑스 빵' },

  // --- 취향별 선택지 확장: 한식 ---
  { id: 175, name: '묵은지찜', category: '한식', moods: ['든든하게', '매콤하게', '비 오는 날'], emoji: '🥘', description: '푹 익은 묵은지와 부드러운 고기가 어우러진 밥도둑' },
  { id: 176, name: '꼬막비빔밥', category: '한식', moods: ['든든하게', '매콤하게'], emoji: '🍚', description: '쫄깃한 꼬막과 향긋한 양념장을 밥에 쓱쓱' },
  { id: 177, name: '들깨수제비', category: '한식', moods: ['건강하게', '비 오는 날', '든든하게'], emoji: '🥣', description: '고소한 들깨 국물과 쫀득한 수제비의 따뜻한 조합' },
  { id: 178, name: '고등어구이', category: '한식', moods: ['건강하게', '든든하게'], emoji: '🐟', description: '노릇하게 구운 고등어와 따뜻한 밥 한 공기' },
  { id: 179, name: '물회', category: '한식', moods: ['가볍게', '매콤하게', '해장'], emoji: '🐟', description: '신선한 해산물을 새콤하고 시원한 육수에 가득' },

  // --- 취향별 선택지 확장: 중식 ---
  { id: 180, name: '훠궈', category: '중식', moods: ['든든하게', '매콤하게', '스트레스'], emoji: '🍲', description: '얼얼한 홍탕과 담백한 백탕에 재료를 골라 퐁당' },
  { id: 181, name: '경장육슬', category: '중식', moods: ['든든하게', '달달하게'], emoji: '🥩', description: '달큰한 춘장 돼지고기를 얇은 포두부에 싸서' },
  { id: 182, name: '토마토계란볶음', category: '중식', moods: ['가볍게', '건강하게'], emoji: '🍅', description: '새콤한 토마토와 폭신한 달걀의 편안한 한 접시' },
  { id: 183, name: '어향가지', category: '중식', moods: ['든든하게', '매콤하게'], emoji: '🍆', description: '부드러운 가지에 새콤매콤한 어향 소스를 듬뿍' },
  { id: 184, name: '멘보샤', category: '중식', moods: ['가볍게', '스트레스'], emoji: '🍤', description: '바삭한 빵 사이를 탱글한 새우로 꽉 채운 맛' },

  // --- 취향별 선택지 확장: 일식 ---
  { id: 185, name: '장어덮밥', category: '일식', moods: ['든든하게', '달달하게'], emoji: '🍱', description: '윤기 나는 장어구이와 달큰한 소스가 올라간 덮밥' },
  { id: 186, name: '냉라멘', category: '일식', moods: ['가볍게', '해장'], emoji: '🍜', description: '차갑고 산뜻한 육수로 시원하게 즐기는 라멘' },
  { id: 187, name: '가라아게', category: '일식', moods: ['든든하게', '스트레스'], emoji: '🍗', description: '간장 풍미를 머금고 바삭하게 튀긴 일본식 닭튀김' },
  { id: 188, name: '모츠나베', category: '일식', moods: ['든든하게', '비 오는 날', '해장'], emoji: '🍲', description: '고소한 곱창과 채소를 진한 국물에 보글보글' },
  { id: 189, name: '이나리초밥', category: '일식', moods: ['가볍게', '달달하게'], emoji: '🍣', description: '달큰한 유부 속에 새콤한 밥을 알차게 채운 한입' },

  // --- 취향별 선택지 확장: 양식 ---
  { id: 190, name: '라따뚜이', category: '양식', moods: ['가볍게', '건강하게'], emoji: '🍅', description: '알록달록한 채소를 토마토와 허브로 뭉근하게' },
  { id: 191, name: '봉골레 파스타', category: '양식', moods: ['가볍게', '든든하게'], emoji: '🍝', description: '조개의 시원한 감칠맛을 담은 깔끔한 오일 파스타' },
  { id: 192, name: '치킨 파르미자나', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🧀', description: '바삭한 치킨 위에 토마토소스와 치즈를 듬뿍' },
  { id: 193, name: '포케', category: '양식', moods: ['가볍게', '건강하게'], emoji: '🥗', description: '신선한 생선과 채소, 곡물을 한 그릇에 산뜻하게' },
  { id: 194, name: '굴라시', category: '양식', moods: ['든든하게', '비 오는 날', '매콤하게'], emoji: '🥘', description: '파프리카 향과 부드러운 고기가 진하게 어우러진 스튜' },

  // --- 취향별 선택지 확장: 분식 ---
  { id: 195, name: '우동볶이', category: '분식', moods: ['든든하게', '매콤하게', '스트레스'], emoji: '🍜', description: '통통한 우동면에 매콤달콤한 떡볶이 소스를 듬뿍' },
  { id: 196, name: '물쫄면', category: '분식', moods: ['가볍게', '해장'], emoji: '🍜', description: '쫄깃한 면을 새콤하고 시원한 육수와 함께' },
  { id: 197, name: '김치만두', category: '분식', moods: ['가볍게', '매콤하게', '비 오는 날'], emoji: '🥟', description: '잘 익은 김치로 속을 꽉 채운 매콤한 만두' },
  { id: 198, name: '고구마튀김', category: '분식', moods: ['가볍게', '달달하게'], emoji: '🍠', description: '달콤한 고구마를 노릇하고 바삭하게 튀겨서' },
  { id: 199, name: '계란빵', category: '분식', moods: ['가볍게', '달달하게'], emoji: '🍳', description: '폭신한 반죽과 고소한 달걀이 만난 따뜻한 간식' },

  // --- 취향별 선택지 확장: 아시안 ---
  { id: 200, name: '마살라 도사', category: '아시안', moods: ['가볍게', '건강하게', '매콤하게'], emoji: '🥞', description: '바삭한 쌀전병에 향긋한 감자 마살라를 가득' },
  { id: 201, name: '팟카파오무쌉', category: '아시안', moods: ['든든하게', '매콤하게'], emoji: '🍚', description: '바질 향 가득한 태국식 돼지고기 볶음을 밥과 함께' },
  { id: 202, name: '분보후에', category: '아시안', moods: ['든든하게', '해장', '매콤하게'], emoji: '🍜', description: '레몬그라스 향과 얼큰한 국물이 매력적인 베트남 국수' },
  { id: 203, name: '사테', category: '아시안', moods: ['가볍게', '스트레스'], emoji: '🍢', description: '향신료에 재운 고기를 불향 가득하게 구운 꼬치' },
  { id: 204, name: '하이난 치킨라이스', category: '아시안', moods: ['가볍게', '든든하게'], emoji: '🍗', description: '촉촉한 닭고기와 향긋한 밥을 소스와 함께' },

  // --- 취향별 선택지 확장: 패스트푸드 ---
  { id: 205, name: '칠리도그', category: '패스트푸드', moods: ['든든하게', '매콤하게', '스트레스'], emoji: '🌭', description: '핫도그 위에 진한 칠리와 치즈를 아낌없이' },
  { id: 206, name: '어니언링', category: '패스트푸드', moods: ['가볍게', '스트레스'], emoji: '🧅', description: '달큰한 양파를 바삭한 튀김옷에 감싼 사이드' },
  { id: 207, name: '피시버거', category: '패스트푸드', moods: ['가볍게', '든든하게'], emoji: '🍔', description: '바삭한 생선 패티와 산뜻한 타르타르소스의 조합' },
  { id: 208, name: '치킨텐더', category: '패스트푸드', moods: ['가볍게', '스트레스'], emoji: '🍗', description: '부드러운 닭 안심을 바삭하게 튀겨 소스에 콕' },
  { id: 209, name: '페퍼로니 피자', category: '패스트푸드', moods: ['든든하게', '스트레스'], emoji: '🍕', description: '짭짤한 페퍼로니와 고소한 치즈가 가득한 피자' },

  // --- 취향별 선택지 확장: 야식/안주 ---
  { id: 210, name: '무뼈닭발', category: '야식/안주', moods: ['스트레스', '매콤하게'], emoji: '🔥', description: '뼈 없이 편하게 즐기는 화끈하고 쫄깃한 닭발' },
  { id: 211, name: '차돌숙주볶음', category: '야식/안주', moods: ['든든하게', '스트레스'], emoji: '🥩', description: '고소한 차돌박이와 아삭한 숙주를 센 불에 볶아서' },
  { id: 212, name: '명란구이', category: '야식/안주', moods: ['가볍게', '스트레스'], emoji: '🐟', description: '짭조름한 명란을 노릇하게 구워 감칠맛 가득' },
  { id: 213, name: '새우소금구이', category: '야식/안주', moods: ['가볍게', '든든하게'], emoji: '🍤', description: '탱글한 새우를 굵은 소금 위에 담백하게 구워서' },
  { id: 214, name: '김치전', category: '야식/안주', moods: ['비 오는 날', '매콤하게', '든든하게'], emoji: '🥞', description: '잘 익은 김치를 넣어 가장자리까지 바삭하게' },

  // --- 취향별 선택지 확장: 카페/디저트 ---
  { id: 215, name: '바스크 치즈케이크', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🍰', description: '짙게 구운 겉면과 꾸덕한 치즈 속이 매력적인 케이크' },
  { id: 216, name: '카놀리', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🥐', description: '바삭한 페이스트리 안을 달콤한 리코타 크림으로' },
  { id: 217, name: '다쿠아즈', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍪', description: '폭신하고 쫀득한 아몬드 과자에 크림을 샌드' },
  { id: 218, name: '호떡', category: '카페/디저트', moods: ['달달하게', '비 오는 날'], emoji: '🥞', description: '따끈한 반죽 속에서 흑설탕 시럽이 달콤하게' },
  { id: 219, name: '과일 타르트', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🥧', description: '바삭한 타르트 위에 상큼한 제철 과일을 가득' },

  // --- 300가지 메뉴 확장: 한식 ---
  { id: 220, name: '소갈비찜', category: '한식', moods: ['든든하게', '달달하게'], emoji: '🍖', description: '부드러운 갈비에 달큰한 양념이 깊게 밴 특별한 한 끼' },
  { id: 221, name: '알탕', category: '한식', moods: ['해장', '매콤하게', '비 오는 날'], emoji: '🍲', description: '톡톡 터지는 알과 얼큰한 국물이 시원한 맛' },
  { id: 222, name: '오리주물럭', category: '한식', moods: ['든든하게', '매콤하게'], emoji: '🥩', description: '쫄깃한 오리고기를 매콤한 양념에 볶아 푸짐하게' },
  { id: 223, name: '떡만둣국', category: '한식', moods: ['든든하게', '비 오는 날'], emoji: '🥟', description: '쫀득한 떡과 속 찬 만두를 따뜻한 국물에 가득' },
  { id: 224, name: '미역국', category: '한식', moods: ['가볍게', '건강하게'], emoji: '🥣', description: '부드러운 미역과 깊은 국물로 속 편안하게' },
  { id: 225, name: '장칼국수', category: '한식', moods: ['든든하게', '매콤하게', '비 오는 날'], emoji: '🍜', description: '구수하고 얼큰한 장 국물에 쫄깃한 면발' },
  { id: 226, name: '대패삼겹살', category: '한식', moods: ['든든하게', '스트레스'], emoji: '🥓', description: '얇고 고소한 삼겹살을 빠르게 구워 한입' },
  { id: 227, name: '도토리묵무침', category: '한식', moods: ['가볍게', '건강하게', '매콤하게'], emoji: '🥗', description: '탱글한 도토리묵과 채소를 새콤매콤하게' },
  { id: 228, name: '아구찜', category: '한식', moods: ['든든하게', '매콤하게', '스트레스'], emoji: '🐟', description: '쫄깃한 아귀와 아삭한 콩나물에 매운 양념 듬뿍' },

  // --- 300가지 메뉴 확장: 중식 ---
  { id: 229, name: '라조기', category: '중식', moods: ['매콤하게', '스트레스'], emoji: '🍗', description: '바삭한 닭고기에 매콤한 고추 향을 가득 입혀서' },
  { id: 230, name: '팔보채', category: '중식', moods: ['든든하게', '건강하게'], emoji: '🦐', description: '해산물과 채소를 다채롭게 볶아낸 풍성한 한 접시' },
  { id: 231, name: '양장피', category: '중식', moods: ['가볍게', '스트레스'], emoji: '🥗', description: '다양한 재료와 톡 쏘는 겨자소스의 산뜻한 조합' },
  { id: 232, name: '중화냉면', category: '중식', moods: ['가볍게', '해장'], emoji: '🍜', description: '고소한 땅콩소스와 시원한 육수가 만난 여름 별미' },
  { id: 233, name: '홍소육', category: '중식', moods: ['든든하게', '달달하게'], emoji: '🥩', description: '간장 양념에 윤기 나게 졸인 부드러운 돼지고기' },
  { id: 234, name: '새우완탕', category: '중식', moods: ['가볍게', '비 오는 날'], emoji: '🥟', description: '탱글한 새우를 얇은 피에 감싼 따뜻한 한입' },
  { id: 235, name: '계란볶음밥', category: '중식', moods: ['가볍게', '든든하게'], emoji: '🍚', description: '고슬한 밥과 폭신한 달걀로 완성한 담백한 볶음밥' },
  { id: 236, name: '쯔란양고기볶음', category: '중식', moods: ['든든하게', '스트레스'], emoji: '🥩', description: '향긋한 쯔란과 쫄깃한 양고기를 센 불에 볶아서' },
  { id: 237, name: '산라탕', category: '중식', moods: ['해장', '매콤하게', '비 오는 날'], emoji: '🥣', description: '새콤하고 얼큰한 맛이 입맛을 깨우는 중국식 수프' },

  // --- 300가지 메뉴 확장: 일식 ---
  { id: 238, name: '돈코츠라멘', category: '일식', moods: ['든든하게', '해장'], emoji: '🍜', description: '진하고 고소한 돼지뼈 육수에 차슈를 듬뿍' },
  { id: 239, name: '마제소바', category: '일식', moods: ['든든하게', '매콤하게'], emoji: '🍜', description: '진한 양념과 다진 고기를 면에 힘껏 비벼서' },
  { id: 240, name: '사시미', category: '일식', moods: ['가볍게', '건강하게'], emoji: '🐟', description: '신선한 생선 본연의 맛을 깔끔하게 즐기는 한 점' },
  { id: 241, name: '에비후라이', category: '일식', moods: ['가볍게', '스트레스'], emoji: '🍤', description: '통통한 새우를 바삭한 튀김옷에 감싸서' },
  { id: 242, name: '오야코동', category: '일식', moods: ['가볍게', '든든하게'], emoji: '🍚', description: '부드러운 닭고기와 달걀을 밥 위에 촉촉하게' },
  { id: 243, name: '니쿠자가', category: '일식', moods: ['든든하게', '달달하게'], emoji: '🥔', description: '고기와 감자를 달큰한 간장 국물에 포근하게 조려서' },
  { id: 244, name: '유부우동', category: '일식', moods: ['가볍게', '비 오는 날'], emoji: '🍜', description: '달큰한 유부와 따뜻한 국물이 어우러진 우동' },
  { id: 245, name: '함박스테이크', category: '일식', moods: ['든든하게', '스트레스'], emoji: '🍖', description: '육즙 가득한 고기 패티에 진한 소스를 듬뿍' },
  { id: 246, name: '미소라멘', category: '일식', moods: ['든든하게', '비 오는 날'], emoji: '🍜', description: '구수한 된장 풍미와 따뜻한 육수가 매력적인 라멘' },

  // --- 300가지 메뉴 확장: 양식 ---
  { id: 247, name: '트러플 크림 파스타', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🍝', description: '진한 크림소스에 향긋한 트러플 풍미를 더해서' },
  { id: 248, name: '미트볼 스파게티', category: '양식', moods: ['든든하게', '달달하게'], emoji: '🍝', description: '큼직한 미트볼과 진한 토마토소스의 익숙한 행복' },
  { id: 249, name: '시저 샐러드', category: '양식', moods: ['가볍게', '건강하게'], emoji: '🥗', description: '아삭한 로메인과 고소한 드레싱을 가볍게' },
  { id: 250, name: '프렌치 어니언 수프', category: '양식', moods: ['비 오는 날', '든든하게'], emoji: '🥣', description: '달큰한 양파와 녹진한 치즈가 어우러진 따뜻한 수프' },
  { id: 251, name: '뵈프 스트로가노프', category: '양식', moods: ['든든하게', '비 오는 날'], emoji: '🥘', description: '부드러운 소고기와 버섯을 크리미하게 끓인 요리' },
  { id: 252, name: '피쉬앤칩스', category: '양식', moods: ['든든하게', '스트레스'], emoji: '🐟', description: '바삭한 생선튀김과 감자튀김을 푸짐하게' },
  { id: 253, name: '잠발라야', category: '양식', moods: ['든든하게', '매콤하게'], emoji: '🍚', description: '고기와 해산물, 향신료를 풍성하게 볶은 쌀요리' },
  { id: 254, name: '버섯 리조또', category: '양식', moods: ['든든하게', '건강하게'], emoji: '🍄', description: '향긋한 버섯과 부드러운 쌀알이 어우러진 리조또' },
  { id: 255, name: '콥 샐러드', category: '양식', moods: ['가볍게', '건강하게'], emoji: '🥗', description: '채소와 달걀, 닭고기를 알록달록 든든하게' },

  // --- 300가지 메뉴 확장: 분식 ---
  { id: 256, name: '짜장떡볶이', category: '분식', moods: ['달달하게', '든든하게'], emoji: '🍢', description: '쫄깃한 떡에 달큰하고 진한 짜장소스를 듬뿍' },
  { id: 257, name: '국물떡볶이', category: '분식', moods: ['매콤하게', '비 오는 날', '스트레스'], emoji: '🥘', description: '매콤달콤한 국물을 떠먹는 재미까지 있는 떡볶이' },
  { id: 258, name: '치즈김밥', category: '분식', moods: ['가볍게', '든든하게'], emoji: '🍙', description: '고소한 치즈를 속 재료와 함께 알차게 말아서' },
  { id: 259, name: '회오리감자', category: '분식', moods: ['가볍게', '스트레스'], emoji: '🥔', description: '빙글빙글 돌려 깎은 감자를 바삭하게 튀긴 간식' },
  { id: 260, name: '김말이튀김', category: '분식', moods: ['가볍게', '스트레스'], emoji: '🍤', description: '당면을 김에 말아 바삭하게 튀겨낸 떡볶이 단짝' },
  { id: 261, name: '떡라면', category: '분식', moods: ['든든하게', '해장', '비 오는 날'], emoji: '🍜', description: '얼큰한 라면에 쫀득한 떡을 더해 든든하게' },
  { id: 262, name: '비빔만두', category: '분식', moods: ['가볍게', '매콤하게'], emoji: '🥟', description: '바삭한 만두와 새콤매콤한 채소무침의 조합' },
  { id: 263, name: '소떡소떡', category: '분식', moods: ['가볍게', '달달하게'], emoji: '🍢', description: '소시지와 떡을 번갈아 꽂아 매콤달콤하게' },
  { id: 264, name: '컵밥', category: '분식', moods: ['가볍게', '든든하게'], emoji: '🍚', description: '밥과 다양한 토핑을 한 컵에 야무지게 담아서' },

  // --- 300가지 메뉴 확장: 아시안 ---
  { id: 265, name: '인도네시아 렌당', category: '아시안', moods: ['든든하게', '매콤하게'], emoji: '🥘', description: '코코넛과 향신료에 소고기를 오래 졸인 깊은 맛' },
  { id: 266, name: '로띠', category: '아시안', moods: ['가볍게', '달달하게'], emoji: '🫓', description: '겉은 바삭하고 속은 쫄깃한 동남아식 납작빵' },
  { id: 267, name: '파니르 티카', category: '아시안', moods: ['가볍게', '건강하게'], emoji: '🧀', description: '인도식 치즈를 향신료에 재워 노릇하게 구워서' },
  { id: 268, name: '파락 파니르', category: '아시안', moods: ['건강하게', '든든하게'], emoji: '🥬', description: '부드러운 치즈와 시금치 커리의 고소한 조합' },
  { id: 269, name: '카오소이', category: '아시안', moods: ['든든하게', '매콤하게'], emoji: '🍜', description: '코코넛 커리 국물과 바삭한 면을 함께 즐기는 태국 국수' },
  { id: 270, name: '짜조', category: '아시안', moods: ['가볍게', '스트레스'], emoji: '🥟', description: '속 재료를 라이스페이퍼에 말아 바삭하게 튀겨서' },
  { id: 271, name: '껌승', category: '아시안', moods: ['든든하게', '달달하게'], emoji: '🍚', description: '숯불 돼지고기와 밥을 함께 즐기는 베트남 한 접시' },
  { id: 272, name: '뿌팟퐁커리 볶음밥', category: '아시안', moods: ['든든하게', '달달하게'], emoji: '🦀', description: '부드러운 게살 커리와 고슬한 볶음밥의 만남' },
  { id: 273, name: '타코 라이스', category: '아시안', moods: ['가볍게', '든든하게'], emoji: '🍚', description: '매콤한 고기와 채소를 밥 위에 풍성하게' },

  // --- 300가지 메뉴 확장: 패스트푸드 ---
  { id: 274, name: '더블치즈버거', category: '패스트푸드', moods: ['든든하게', '스트레스'], emoji: '🍔', description: '두 장의 패티와 녹진한 치즈로 확실하게 든든한 맛' },
  { id: 275, name: '불고기버거', category: '패스트푸드', moods: ['든든하게', '달달하게'], emoji: '🍔', description: '달큰한 불고기 소스가 익숙하고 편안한 버거' },
  { id: 276, name: '치즈스틱', category: '패스트푸드', moods: ['가볍게', '스트레스'], emoji: '🧀', description: '바삭한 튀김옷 속 치즈가 길게 늘어나는 간식' },
  { id: 277, name: '웨지감자', category: '패스트푸드', moods: ['가볍게', '스트레스'], emoji: '🥔', description: '도톰한 감자를 겉은 바삭하고 속은 포슬하게' },
  { id: 278, name: '바비큐 치킨 피자', category: '패스트푸드', moods: ['든든하게', '달달하게'], emoji: '🍕', description: '달콤한 바비큐 치킨과 치즈가 풍성한 피자' },
  { id: 279, name: '크리스피 치킨버거', category: '패스트푸드', moods: ['든든하게', '스트레스'], emoji: '🍔', description: '바삭한 치킨 패티와 신선한 채소를 한입에' },
  { id: 280, name: '모차렐라 핫도그', category: '패스트푸드', moods: ['가볍게', '달달하게'], emoji: '🌭', description: '쭉 늘어나는 모차렐라 치즈를 바삭한 반죽 속에' },
  { id: 281, name: '고구마 피자', category: '패스트푸드', moods: ['든든하게', '달달하게'], emoji: '🍕', description: '달콤한 고구마 무스와 짭짤한 치즈의 조합' },
  { id: 282, name: '미니 슬라이더', category: '패스트푸드', moods: ['가볍게', '스트레스'], emoji: '🍔', description: '작지만 속은 알찬 한입 크기 미니 버거' },

  // --- 300가지 메뉴 확장: 야식/안주 ---
  { id: 283, name: '닭강정', category: '야식/안주', moods: ['스트레스', '달달하게'], emoji: '🍗', description: '바삭한 닭튀김에 매콤달콤한 소스를 윤기 나게' },
  { id: 284, name: '족발', category: '야식/안주', moods: ['든든하게', '스트레스'], emoji: '🍖', description: '야들하고 쫀득한 고기를 새우젓에 콕 찍어서' },
  { id: 285, name: '홍합탕', category: '야식/안주', moods: ['해장', '비 오는 날', '가볍게'], emoji: '🍲', description: '홍합의 감칠맛이 우러난 맑고 뜨끈한 국물' },
  { id: 286, name: '닭껍질튀김', category: '야식/안주', moods: ['가볍게', '스트레스'], emoji: '🍗', description: '얇고 바삭하게 튀겨 고소함이 가득한 안주' },
  { id: 287, name: '매운어묵탕', category: '야식/안주', moods: ['해장', '매콤하게', '비 오는 날'], emoji: '🍢', description: '쫄깃한 어묵을 얼큰하고 뜨거운 국물과 함께' },
  { id: 288, name: '노가리구이', category: '야식/안주', moods: ['가볍게', '스트레스'], emoji: '🐟', description: '노릇하게 구워 고소하고 쫄깃하게 즐기는 안주' },
  { id: 289, name: '통오징어구이', category: '야식/안주', moods: ['든든하게', '스트레스'], emoji: '🦑', description: '통통한 오징어를 불향 가득하게 구워서' },
  { id: 290, name: '부추전', category: '야식/안주', moods: ['비 오는 날', '가볍게'], emoji: '🥞', description: '향긋한 부추를 얇고 바삭하게 부쳐낸 전' },
  { id: 291, name: '번데기탕', category: '야식/안주', moods: ['비 오는 날', '해장'], emoji: '🥣', description: '짭짤하고 칼칼한 국물이 매력적인 추억의 안주' },

  // --- 300가지 메뉴 확장: 카페/디저트 ---
  { id: 292, name: '슈크림빵', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🥐', description: '폭신한 빵 속에 부드러운 슈크림을 가득' },
  { id: 293, name: '브라우니', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🍫', description: '꾸덕하고 진한 초콜릿 풍미로 기분 좋게' },
  { id: 294, name: '레몬 마들렌', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍋', description: '상큼한 레몬 향을 품은 촉촉한 조개 모양 과자' },
  { id: 295, name: '몽블랑', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🌰', description: '부드러운 밤 크림을 산처럼 풍성하게 올린 디저트' },
  { id: 296, name: '아사이볼', category: '카페/디저트', moods: ['가볍게', '건강하게'], emoji: '🥣', description: '상큼한 아사이와 과일, 그래놀라로 산뜻하게' },
  { id: 297, name: '탕후루', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍓', description: '상큼한 과일에 바삭한 설탕 코팅을 입힌 간식' },
  { id: 298, name: '카스텔라', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍰', description: '폭신하고 촉촉한 달걀 향 가득한 케이크' },
  { id: 299, name: '찰깨빵', category: '카페/디저트', moods: ['가볍게', '달달하게'], emoji: '🍞', description: '고소한 깨 향과 쫀득한 속살이 매력적인 빵' },
  { id: 300, name: '밀푀유', category: '카페/디저트', moods: ['달달하게', '스트레스'], emoji: '🍰', description: '바삭한 페이스트리와 부드러운 크림을 겹겹이' }
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
  '비프 부르기뇽': '프랑스',
  '키슈': '프랑스',
  '버팔로윙': '미국',
  '풀드포크 버거': '미국',
  '부리또 볼': '멕시코',
  '나초': '멕시코',
  '엔칠라다': '멕시코',
  '라따뚜이': '프랑스',
  '봉골레 파스타': '이탈리아',
  '치킨 파르미자나': '이탈리아',
  '포케': '미국',
  '굴라시': '기타',
  '마살라 도사': '인도',
  '팟카파오무쌉': '태국',
  '분보후에': '베트남',
  '사테': '기타',
  '하이난 치킨라이스': '기타',
  '바스크 치즈케이크': '기타',
  '카놀리': '이탈리아',
  '다쿠아즈': '프랑스',
  '호떡': '한국',
  '과일 타르트': '프랑스',
  '프렌치 어니언 수프': '프랑스',
  '뵈프 스트로가노프': '기타',
  '피쉬앤칩스': '기타',
  '잠발라야': '미국',
  '인도네시아 렌당': '기타',
  '로띠': '태국',
  '파니르 티카': '인도',
  '파락 파니르': '인도',
  '카오소이': '태국',
  '짜조': '베트남',
  '껌승': '베트남',
  '뿌팟퐁커리 볶음밥': '태국',
  '타코 라이스': '일본',
  '불고기버거': '한국',
  '모차렐라 핫도그': '한국',
  '고구마 피자': '한국',
  '레몬 마들렌': '프랑스',
  '몽블랑': '프랑스',
  '아사이볼': '기타',
  '탕후루': '중국',
  '카스텔라': '일본',
  '찰깨빵': '한국',
  '밀푀유': '프랑스',
  '반쎄오': '베트남',
  '포보': '베트남',
  '쏨땀': '태국',
  '망고 찹쌀밥': '태국',
  '그린 커리': '태국',
  '버터 치킨 커리': '인도',
  '비리야니': '인도',
  '달 마크니': '인도',
  '미고랭': '기타',
  '크렘 브륄레': '프랑스',
  '판나코타': '이탈리아',
  '약과': '한국',
  '크루아상': '프랑스',
};

export const menus: Menu[] = menuData.map((menu) => ({
  ...menu,
  country: countryByMenuName[menu.name] ?? countryByCategory[menu.category],
}));
