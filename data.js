// 생물 동정 퀴즈 문제 데이터
// - answer: 정답 이름 (choices 안에 반드시 포함)
// - choices: 보기 4개 (화면에서는 매번 순서가 섞여서 나옴)
// - image: images/ 폴더 기준 경로
// 조류·어류는 questions 배열에 문제를 추가하면 메인 화면에서 자동으로 활성화됩니다.

window.QUIZ_DATA = {
  birds: {
    name: "조류",
    emoji: "🐦",
    questions: [
      { id: "bird-01", image: "images/birds/nuthatch.jpg", answer: "동고비",
        choices: ["동고비", "쇠동고비", "오색딱다구리", "나무발발이"] },
      { id: "bird-02", image: "images/birds/kestrel.jpg", answer: "황조롱이",
        choices: ["쇠황조롱이", "황조롱이", "매", "참매"] },
      { id: "bird-03", image: "images/birds/lesser-sand-plover.jpg", answer: "왕눈물떼새",
        choices: ["흰물떼새", "큰왕눈물떼새", "왕눈물떼새", "흰목물떼새"] },
      { id: "bird-04", image: "images/birds/spoonbill.jpg", answer: "저어새",
        choices: ["중대백로", "왜가리", "노랑부리저어새", "저어새"] },
      { id: "bird-05", image: "images/birds/scops-owl.jpg", answer: "소쩍새",
        choices: ["소쩍새", "큰소쩍새", "수리부엉이", "올빼미"] },
      { id: "bird-06", image: "images/birds/cuckoo.jpg", answer: "뻐꾸기",
        choices: ["검은등뻐꾸기", "뻐꾸기", "매사촌", "새매"] },
      { id: "bird-07", image: "images/birds/yellow-breasted-bunting.jpg", answer: "검은머리촉새",
        choices: ["노랑턱멧새", "꼬까참새", "검은머리촉새", "촉새"] },
      { id: "bird-08", image: "images/birds/olive-backed-pipit.jpg", answer: "힝둥새",
        choices: ["밭종다리", "풀밭종다리", "나무밭종다리", "힝둥새"] },
      { id: "bird-09", image: "images/birds/yellow-browed-warbler.jpg", answer: "노랑눈썹솔새",
        choices: ["노랑눈썹솔새", "쇠솔새", "산솔새", "노랑허리솔새"] },
      { id: "bird-10", image: "images/birds/blue-and-white-flycatcher.jpg", answer: "큰유리새",
        choices: ["쇠유리새", "큰유리새", "하늘유리새", "파랑딱새"] }
    ]
  },
  fish: {
    name: "어류",
    emoji: "🐟",
    questions: [
      { id: "fish-01", image: "images/fish/dark-sleeper-goby.jpg", answer: "민물검정망둑",
        choices: ["민물검정망둑", "밀어", "민물두줄망둑", "말뚝망둥어"] },
      { id: "fish-02", image: "images/fish/flathead.jpg", answer: "강주걱양태",
        choices: ["강주걱양태", "쏨뱅이", "그물베도라치", "광어"] },
      { id: "fish-03", image: "images/fish/korean-bitterling.jpg", answer: "각시붕어",
        choices: ["각시붕어", "피라미", "붕어", "납자루"] },
      { id: "fish-04", image: "images/fish/knife-bitterling.jpg", answer: "칼납자루",
        choices: ["칼납자루", "갈겨니", "참붕어", "꺽지"] },
      { id: "fish-05", image: "images/fish/korean-perch.jpg", answer: "꺽지",
        choices: ["꺽지", "배스", "쏘가리", "블루길"] },
      { id: "fish-06", image: "images/fish/striped-spined-loach.jpg", answer: "참종개",
        choices: ["참종개", "돌고기", "미꾸라지", "메기"] },
      { id: "fish-07", image: "images/fish/gudgeon-sarcocheilichthys.jpg", answer: "모래주사",
        choices: ["모래주사", "송사리", "참갈겨니", "은어"] },
      { id: "fish-08", image: "images/fish/hangang-bitterling.jpg", answer: "한강납줄개",
        choices: ["한강납줄개", "잉어", "나일틸라피아", "모래무지"] },
      { id: "fish-09", image: "images/fish/sculpin.jpg", answer: "한둑중개",
        choices: ["한둑중개", "강준치", "연어", "칠성장어"] },
      { id: "fish-10", image: "images/fish/stickleback.jpg", answer: "가시고기",
        choices: ["가시고기", "참마자", "돌마자", "숭어"] }
    ]
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
