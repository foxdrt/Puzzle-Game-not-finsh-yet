const div = document.querySelectorAll(".Div");
const windowEl = document.querySelector(".Window");
const topicEl = document.getElementById("Topic");
const description = document.getElementById("Description");
const overFlow = document.querySelector(".overflow");
const closeBtn = document.getElementById("closeBtn");
const playBtn = document.getElementById("playbtn");
const A = document.querySelector(".A");
const B = document.querySelector(".B");
const C = document.querySelector(".C");
const D = document.querySelector(".D");
const questionEL = document.getElementById("question");
const imageEl = document.getElementById("img");
const rightAnswerEl = document.getElementById("rightAnswerScore");
const wrongAnswerEl = document.getElementById("wrongAnswerScore");
const bestScoreEl = document.getElementById("bestScore");
const timer = document.getElementById("timer");
const container = document.querySelector(".container");
const winScreen = document.getElementById("gameEndScreen");
const startBtn = document.getElementById("Start");
const playAgainBtn = document.getElementById("PlayAgain");
const containerHome = document.querySelector(".containerHome");
const topicname = ["Cars", "Anime"];
const questionFunction = [Cars, AnimeQuestion];
let min, sc, rightAnswerScore, wrongAnswerScore, bestScore;

function replay() {
  min = 1;
  sc = 59;
  rightAnswerScore = 0;
  wrongAnswerScore = 0;
  bestScore = 0;
  containerHome.classList.remove("hidden");
  winScreen.classList.add("hidden");
  container.classList.add("hidden");
}
replay();

function showText(Aq, Bq, Cq, Dq, Q, img) {
  A.textContent = Aq;
  B.textContent = Bq;
  C.textContent = Cq;
  D.textContent = Dq;
  questionEL.textContent = Q;
  if (img) {
    imageEl.src = img;
    imageEl.classList.toggle("hidden");
  } else {
    imageEl.src = "";
    imageEl.classList.add("hidden");
  }
  console.log("updated");
}
function whenWin() {
  winScreen.classList.remove("hidden");
  rightAnswerEl.textContent = `Right Answers:${rightAnswerScore}`;
  wrongAnswerEl.textContent = `Wrong Answers:${wrongAnswerScore}`;
  if (rightAnswerScore > bestScore) {
    bestScore = rightAnswerScore;
    bestScoreEl.textContent = `Best Score:${rightAnswerScore}`;
  }
}

function updateTimer() {
  let string = `0${min}:${sc}`;
  timer.textContent = string;
  if (sc > 0) {
    sc--;
  } else {
    if (min > 0) {
      sc = 59;
      min--;
    } else {
      whenWin();
      return;
    }
  }
  setTimeout(updateTimer, 1000);
}

for (let i = 0; i < div.length; i++) {
  div[i].addEventListener("click", function (event) {
    if (event.target === div[i]) {
      windowEl.classList.remove("hidden");
      topicEl.textContent = event.target.children[0].innerHTML;
      overFlow.classList.remove("hidden");

      if (topicname.indexOf(event.target.children[0].innerHTML) !== -1) {
        console.log(
          questionFunction[
            topicname.indexOf(event.target.children[0].innerHTML)
          ]()
        );
      } else {
        console.log(-1);
      }
    }
  });
}

function randomQuestion(arr) {
  const randomIndex = Math.trunc(Math.random() * arr.length);
  return arr[randomIndex];
}
function Cars() {
  const questions = [
    {
      Questions: "ما هو الجزء الرئيسي لنظام الدفع في السيارة؟",
      A: "أ) المحرك",
      B: "ب) العجلات",
      C: "ج) الكراسي",
      D: "د) المصابيح الأمامية",
      rightanswer: "A",
    },
    {
      Questions: "ما هي الشركة المصنعة للسيارات الفاخرة 'رولز رويس'؟",
      A: "أ) تويوتا",
      B: "ب) فورد",
      C: "ج) بي إم دبليو",
      D: "د) فيات",
      rightanswer: "C",
    },
    {
      Questions: "ما هو العنصر الذي يحول الوقود إلى طاقة في السيارة؟",
      A: "أ) المحرك",
      B: "ب) البطارية",
      C: "ج) العجلات",
      D: "د) الكراسي",
      rightanswer: "A",
    },
    {
      Questions: "ما هي الشركة التي تنتج السيارة الرياضية '911'؟",
      A: "أ) بورش",
      B: "ب) مرسيدس بنز",
      C: "ج) أودي",
      D: "د) لامبورغيني",
      rightanswer: "A",
    },
    {
      Questions: "ما هو العنصر الذي يساعد في تقليل الاحتكاك داخل المحرك؟",
      A: "أ) الزيت",
      B: "ب) الوقود",
      C: "ج) الماء",
      D: "د) الهواء",
      rightanswer: "A",
    },
    {
      Questions: "ما هي الشركة التي تنتج السيارة الرياضية 'GT-R'؟",
      A: "أ) تويوتا",
      B: "ب) نيسان",
      C: "ج) هوندا",
      D: "د) مازدا",
      rightanswer: "B",
    },
    {
      Questions:
        "ما هو الجزء الذي يقوم بتحويل الحركة الدورانية للمحرك إلى حركة خطية في السيارة؟",
      A: "أ) العمود المرفقي",
      B: "ب) العمود الكامن",
      C: "ج) البستم",
      D: "د) الكرنك",
      rightanswer: "A",
    },
    {
      Questions:
        "ما هو الجزء الذي يقوم بتحويل الحركة الخطية إلى حركة دورانية في السيارة؟",
      A: "أ) العمود المرفقي",
      B: "ب) العمود الكامن",
      C: "ج) البستم",
      D: "د) الكرنك",
      rightanswer: "A",
    },
    {
      Questions: "ما هو الجزء الذي يقوم بتوفير الهواء للمحرك في السيارة؟",
      A: "أ) فلتر الهواء",
      B: "ب) البطارية",
      C: "ج) العجلات",
      D: "د) المصابيح الأمامية",
      rightanswer: "A",
    },
    {
      Questions: "ما هو الجزء الذي يقوم بتوفير الوقود للمحرك في السيارة؟",
      A: "أ) البطارية",
      B: "ب) المحرك",
      C: "ج) العجلات",
      D: "د) خزان الوقود",
      rightanswer: "D",
    },
    {
      Questions:
        "ما هو الجزء الذي يقوم بتحويل الطاقة الكهربائية إلى طاقة ميكانيكية في السيارة؟",
      A: "أ) المحرك",
      B: "ب) البطارية",
      C: "ج) المولد",
      D: "د) الكراسي",
      rightanswer: "C",
    },
    {
      Questions:
        "ما هو الجزء الذي يقوم بتحويل الطاقة الميكانيكية إلى طاقة كهربائية في السيارة؟",
      A: "أ) المحرك",
      B: "ب) البطارية",
      C: "ج) المولد",
      D: "د) الكراسي",
      rightanswer: "C",
    },
    {
      Questions:
        "ما هو الجزء الذي يقوم بتحويل الطاقة الكهربائية إلى طاقة حرارية في السيارة؟",
      A: "أ) المحرك",
      B: "ب) البطارية",
      C: "ج) المولد",
      D: "د) المكيف",
      rightanswer: "D",
    },
    {
      Questions:
        "ما هو الجزء الذي يقوم بتحويل الطاقة الحرارية إلى طاقة كهربائية في السيارة؟",
      A: "أ) المحرك",
      B: "ب) البطارية",
      C: "ج) المولد",
      D: "د) الكراسي",
      rightanswer: "C",
    },
    {
      Questions:
        "ما هو الجزء الذي يقوم بتحويل الطاقة الكهربائية إلى طاقة صوتية في السيارة؟",
      A: "أ) المحرك",
      B: "ب) البطارية",
      C: "ج) المولد",
      D: "د) السماعات",
      rightanswer: "D",
    },
    {
      Questions:
        "ما هو الجزء الذي يقوم بتحويل الطاقة الصوتية إلى طاقة كهربائية في السيارة؟",
      A: "أ) المحرك",
      B: "ب) البطارية",
      C: "ج) الميكروفون",
      D: "د) الكراسي",
      rightanswer: "C",
    },
  ];
  return randomQuestion(questions);
}
function AnimeQuestion() {
  const questions = [
    {
      Questions: "ما هو الأنمي الذي يتميز بوجود الشينيغامي؟",
      A: "أ) ناروتو",
      B: "ب) بليتش",
      C: "ج) ون بيس",
      D: "د) دراغون بول",
      rightanswer: "B",
    },
    {
      Questions: "من هو الشخصية الرئيسية في أنمي 'هجوم العمالقة'؟",
      A: "أ) إيرين ييغر",
      B: "ب) ناروتو أوزوماكي",
      C: "ج) لوفي",
      D: "د) غوكو",
      rightanswer: "A",
    },
    {
      Questions: "ما هو الأنمي الذي يتضمن القراصنة والبحث عن كنز ون بيس؟",
      A: "أ) ناروتو",
      B: "ب) بليتش",
      C: "ج) ون بيس",
      D: "د) دراغون بول",
      rightanswer: "C",
    },
    {
      Questions: "ما هو الأنمي الذي يتضمن النينجا والتقنيات الخاصة؟",
      A: "أ) ناروتو",
      B: "ب) بليتش",
      C: "ج) ون بيس",
      D: "د) دراغون بول",
      rightanswer: "A",
    },
    {
      Questions: "من هو الشخصية الرئيسية في أنمي 'ون بنش مان'؟",
      A: "أ) سايتاما",
      B: "ب) ناروتو أوزوماكي",
      C: "ج) لوفي",
      D: "د) غوكو",
      rightanswer: "A",
    },
    {
      Questions: "ما هو الأنمي الذي يتضمن السايانز والكي؟",
      A: "أ) ناروتو",
      B: "ب) بليتش",
      C: "ج) ون بيس",
      D: "د) دراغون بول",
      rightanswer: "D",
    },
    {
      Questions: "من هو الشخصية الرئيسية في أنمي 'فيري تيل'؟",
      A: "أ) ناتسو دراغنيل",
      B: "ب) ناروتو أوزوماكي",
      C: "ج) لوفي",
      D: "د) غوكو",
      rightanswer: "A",
    },
    {
      Questions: "ما هو الأنمي الذي يتضمن الألكيمياء والفلسفة؟",
      A: "أ) ناروتو",
      B: "ب) بليتش",
      C: "ج) الخيميائي الفولاذي",
      D: "د) دراغون بول",
      rightanswer: "C",
    },
    {
      Questions: "من هو الشخصية الرئيسية في أنمي 'ديث نوت'؟",
      A: "أ) لايت ياغامي",
      B: "ب) ناروتو أوزوماكي",
      C: "ج) لوفي",
      D: "د) غوكو",
      rightanswer: "A",
    },
    {
      Questions: "من هو الشخصية الرئيسية في أنمي 'كود غياس'؟",
      A: "أ) ليلوش لامبيروج",
      B: "ب) ناروتو أوزوماكي",
      C: "ج) لوفي",
      D: "د) غوكو",
      rightanswer: "A",
    },
    {
      Questions: "ما هو الأنمي الذي يتضمن الروبوتات العملاقة؟",
      A: "أ) ناروتو",
      B: "ب) بليتش",
      C: "ج) نيون جينيسيس إيفانجيليون",
      D: "د) دراغون بول",
      rightanswer: "C",
    },
    {
      Questions: "من هو الشخصية الرئيسية في أنمي 'كاوبوي بيبوب'؟",
      A: "أ) سبايك سبيجل",
      B: "ب) ناروتو أوزوماكي",
      C: "ج) لوفي",
      D: "د) غوكو",
      rightanswer: "A",
    },
    {
      Questions: "ما هو الأنمي الذي يتضمن مغامرات في الفضاء الخارجي؟",
      A: "أ) ستينز؛ غيت",
      B: "ب) كاوبوي بيبوب",
      C: "ج) هايكيو",
      D: "د) أتاك أون تايتن",
      rightanswer: "B",
    },
    {
      Questions: "ما هو الأنمي الذي يتضمن الكرة الطائرة؟",
      A: "أ) ستينز؛ غيت",
      B: "ب) كاوبوي بيبوب",
      C: "ج) هايكيو",
      D: "د) أتاك أون تايتن",
      rightanswer: "C",
    },
    {
      Questions: "من هو الشخصية الرئيسية في أنمي 'ستينز؛ غيت'؟",
      A: "أ) رينتارو أوكابي",
      B: "ب) سبايك سبيجل",
      C: "ج) شويو هيناتا",
      D: "د) إيرين ييغر",
      rightanswer: "A",
    },
    {
      Questions: "ما اسم هذا الشخصيه",
      A: "أ) توني تشوبر",
      B: "ب) سبايك سبيجل",
      C: "ج) جينبي",
      D: "د) سابو ",
      Img: "https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/2c1c983100e7df5b55e16d6541291ab2.jpe",
      rightanswer: "C",
    },
    {
      Questions: "ما اسم هذا الشخصيه",
      A: "أ) كافنديش ",
      B: "ب) دوفلامنغو",
      C: "ج) جينبي",
      D: "د) سيلفر رايلي",
      Img: "https://pm1.aminoapps.com/6676/6f24789f65aad717d7b16915d1ffe002a6c2ae36_hq.jpg",
      rightanswer: "B",
    },
  ];

  return randomQuestion(questions);
}
playBtn.addEventListener("click", (event) => {
  container.classList.remove("hidden");
  containerHome.classList.add("hidden");
  windowEl.classList.add("hidden");
  overFlow.classList.add("hidden");
  const parent = event.target.parentNode.children[0].innerHTML;

  if (topicname.indexOf(parent) !== -1) {
    var startQ = questionFunction[topicname.indexOf(parent)]();
    showText(startQ.A, startQ.B, startQ.C, startQ.D, startQ.Questions);
    if (
      startQ.rightanswer === event.target.classList[1] &&
      event.target !== playBtn
    ) {
      rightAnswerScore++;
      rightAnswerEl.textContent = `Right Answers:${rightAnswerScore}`;
      console.log(
        event.target.classList[1],
        startQ.rightanswer,
        startQ,
        event.target
      );
    } else {
      if (event.target !== playBtn) {
        wrongAnswerScore++;
        wrongAnswerEl.textContent = `Wrong Answers:${wrongAnswerScore}`;
        console.log(
          event.target.classList[1],
          startQ.rightanswer,
          startQ,
          event.target
        );
      }
    }
    updateTimer();
  }
});
closeBtn.addEventListener("click", () => {
  overFlow.classList.toggle("hidden");
  windowEl.classList.toggle("hidden");
});
function game(event) {
  const parent = windowEl.children[0].innerHTML;
  const question = questionFunction[topicname.indexOf(parent)]();

  showText(
    question.A,
    question.B,
    question.C,
    question.D,
    question.Questions,
    question.Img
  );

  if (event.target !== playBtn) {
    if (question.rightanswer === event.target.classList[1]) {
      rightAnswerScore++;
    } else {
      wrongAnswerScore++;
    }
  }
}

A.addEventListener("click", game);
B.addEventListener("click", game);
C.addEventListener("click", game);
D.addEventListener("click", game);
playAgainBtn.addEventListener("click", replay);
