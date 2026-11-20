// 생물 동정 퀴즈 문제 데이터
// - answer: 정답 이름 (choices 안에 반드시 포함)
// - choices: 보기 4개 (화면에서는 매번 순서가 섞여서 나옴)
// - image: images/ 폴더 기준 경로
// 조류·어류는 questions 배열에 문제를 추가하면 메인 화면에서 자동으로 활성화됩니다.

window.QUIZ_DATA = {
  birds: {
    name: "조류",
    emoji: "🐦",
    questions: []
  },
  fish: {
    name: "어류",
    emoji: "🐟",
    questions: []
  },
  insects: {
    name: "곤충",
    emoji: "🦋",
    questions: [
      { id: "ins-01", image: "images/insects/japanese-carpenter-ant.jpg", answer: "일본왕개미",
        choices: ["일본왕개미", "곰개미", "한국홍가슴개미", "털왕개미"] },
      { id: "ins-02", image: "images/insects/cicada.webp", answer: "참매미",
        choices: ["참매미", "말매미", "애매미", "털매미"] },
      { id: "ins-03", image: "images/insects/shield-bug.jpg", answer: "큰광대노린재",
        choices: ["큰광대노린재", "붉은점노린재", "좀광대노린재", "민광대노린재"] },
      { id: "ins-04", image: "images/insects/swallowtail.jpg", answer: "호랑나비",
        choices: ["호랑나비", "긴꼬리제비나비", "남방제비나비", "산호랑나비"] },
      { id: "ins-05", image: "images/insects/honeybee.jpg", answer: "양봉꿀벌",
        choices: ["양봉꿀벌", "호박벌", "뒤영벌", "말벌"] },
      { id: "ins-06", image: "images/insects/carrion-beetle.jpg", answer: "큰넓적송장벌레",
        choices: ["큰넓적송장벌레", "넓적송장벌레", "검정송장벌레", "송장벌레"] },
      { id: "ins-07", image: "images/insects/spangle.jpg", answer: "긴꼬리제비나비",
        choices: ["긴꼬리제비나비", "남방제비나비", "호랑나비", "제비나비"] },
      { id: "ins-08", image: "images/insects/eggfly.jpg", answer: "남방오색나비",
        choices: ["남방오색나비", "흰점오색나비", "줄나비", "흰줄나비"] },
      { id: "ins-09", image: "images/insects/yellow-legged-hornet.jpg", answer: "등검은말벌",
        choices: ["등검은말벌", "장수말벌", "말벌", "털보말벌"] },
      { id: "ins-10", image: "images/insects/tiger-beetle.jpg", answer: "길앞잡이",
        choices: ["길앞잡이", "아이누길앞잡이", "산길앞잡이", "참길앞잡이"] }
    ]
  }
};
