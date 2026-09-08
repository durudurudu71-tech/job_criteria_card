// V0.4 상담분석 기준입니다. 향후 관리자 설정 기능에서 이 값만 변경할 수 있습니다.
const counselingSettings = {
  mustHaveExcessThreshold: 5,
  realityGapThreshold: 3,
  realityLowMax: 3,
  highImportanceThreshold: 8,
  lowFlexibilityThreshold: 3,
  sourceConcentrationThreshold: 0.5,
  readinessLowMax: 4,
  readinessMediumMax: 7,
  maxRecommendedQuestions: 3
};

// 두 조건이 함께 핵심조건으로 선택되었을 때 참고할 상담질문입니다.
const cardCombinationRules = [
  {cards:["A12","A13"],type:"clarify",question:"어떤 업무는 함께하고 어떤 업무는 혼자 집중해서 하고 싶은가요?"},
  {cards:["A20","A21"],type:"clarify",question:"업무내용은 다양하지만 업무방법과 절차는 명확하기를 원하는 것인가요?"},
  {cards:["A22","E09"],type:"clarify",question:"역할과 책임은 명확하지만 그 안에서 업무방법은 자율적으로 결정하고 싶은 것인가요?"},
  {cards:["A12","E05"],type:"clarify",question:"동료와 협업하는 것은 좋지만 상사의 지나친 통제는 원하지 않는다는 의미인가요?"},
  {cards:["A20","F03"],type:"clarify",question:"회사는 체계적이지만 담당업무 자체는 다양하기를 원하는 것인가요?"},
  {cards:["C04","E08"],type:"clarify",question:"성과에 대한 보상은 원하지만 과도한 목표압박이나 경쟁은 피하고 싶은 것인가요?"},
  {cards:["A06","A21"],type:"clarify",question:"업무의 기본 절차는 명확하되 그 안에서 새로운 방법을 생각할 수 있기를 원하는 것인가요?"},
  {cards:["C01","E12"],type:"priority",question:"두 조건을 모두 충족하기 어려운 상황이라면 현재 어느 쪽을 더 우선하시겠어요?"},
  {cards:["C01","B05"],type:"priority",question:"급여가 높아지는 대신 초과근무가 늘어난다면 어느 정도까지 받아들일 수 있나요?"},
  {cards:["F02","B01"],type:"priority",question:"성장 가능성과 안정성 중 현재 시점에서 어느 쪽을 더 우선하고 싶은가요?"}
];

const sourceExplorationQuestions = {
  S3:"가족이나 주변 사람의 기대를 제외한다면 본인은 어떤 조건을 가장 중요하게 선택하시겠어요?",
  S4:"다른 사람과 비교하지 않는다면 지금 선택한 직업기준이 달라질까요?",
  S5:"이 조건은 원하는 직업을 찾기 위한 기준인가요, 불편하거나 걱정되는 상황을 피하기 위한 기준인가요?",
  S6:"과거 경험 때문에 중요해진 조건이 앞으로의 모든 직장에서도 반드시 필요할지 함께 살펴볼까요?",
  S7:"이 조건이 충족되면 얻는 것과 충족되지 않으면 가장 걱정되는 것을 생각해 보면 이유를 조금 더 찾을 수 있을까요?"
};
