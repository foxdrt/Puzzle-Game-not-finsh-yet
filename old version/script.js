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
// scores
let rightAnswerScore = 0;
let wrongAnswerScore = 0;
let bestScore = 0;
const randomQ = function (arr) {
  const randomIndex = Math.trunc(Math.random() * arr.length);
  return arr[randomIndex];
};
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
}
function whenWin() {
  winScreen.classList.toggle("hidden");
  rightAnswerEl.textContent = `Right Answers:${rightAnswerScore}`;
  wrongAnswerEl.textContent = `Wrong Answers:${wrongAnswerScore}`;
  if (rightAnswerScore > bestScore) {
    bestScoreEl.textContent = `Best Score:${rightAnswerScore}`;
  }
}
let min = 2;
let sc = 59;
function updateTimer() {
  let string = `${String(min).padStart(2, "0")}:${String(sc).padStart(2, "0")}`;
  timer.textContent = string;

  if (sc > 0) {
    sc--;
  } else {
    if (min > 0) {
      sc = 59;
      min--;
    } else {
      // Two minutes have passed, call whenWin
      whenWin();
      return;
    }
  }

  // Schedule the next update after 1 second
  setTimeout(updateTimer, 1000);
}

// Start the timer update
updateTimer();
const questions = [
  {
    Questions: "ما هو نظام التشغيل الأكثر استخدامًا في العالم حاليًا؟",
    A: "أ) Windows",
    B: "ب) Linux",
    C: "ج) macOS",
    D: "د) Android",
    rightanswer: "A",
  },
  {
    Questions: "ماذا يعني اختصار CPU في علم الحاسوب؟",
    A: "أ) Central Processing Unit",
    B: "ب) Computer Processing Unit",
    C: "ج) Central Processor Unit",
    D: "د) Central Peripheral Unit",
    rightanswer: "A",
  },
  {
    Questions: "ما هو HTML اختصارًا لـ؟",
    A: "أ) HyperText Markup Language",
    B: "ب) HyperTransfer Text Language",
    C: "ج) HighText Machine Language",
    D: "د) HyperText Mainframe Language",
    rightanswer: "A",
  },
  {
    Questions: "ما هو اختصار CSS في تطوير الويب؟",
    A: "أ) Creative Style Sheets",
    B: "ب) Computer Style Sheets",
    C: "ج) Colorful Style Sheets",
    D: "د) Cascading Style Sheets",
    rightanswer: "D",
  },
  {
    Questions: "من هو مؤسس شركة Apple؟",
    A: "أ) Bill Gates",
    B: "ب) Steve Jobs",
    C: "ج) Mark Zuckerberg",
    D: "د) Jeff Bezos",
    rightanswer: "B",
  },
  {
    Questions: "ما هو اختصار API في علم الحاسوب؟",
    A: "أ) Application Programming Interface",
    B: "ب) Advanced Programming Interface",
    C: "ج) Application Process Integration",
    D: "د) Automated Programming Interface",
    rightanswer: "A",
  },
  {
    Questions: "ما هو لغة البرمجة التي تستخدم لتطوير تطبيقات Android؟",
    A: "أ) Java",
    B: "ب) Swift",
    C: "ج) C++",
    D: "د) Kotlin",
    rightanswer: "A",
  },
  {
    Questions:
      "ما هي تقنية الذكاء الاصطناعي التي تسمح للأنظمة بتعلم بدون تدخل بشري؟",
    A: "أ) Machine Learning",
    B: "ب) Deep Learning",
    C: "ج) Artificial Intelligence",
    D: "د) Neural Networks",
    rightanswer: "A",
  },
  {
    Questions: "ما هي وحدة قياس سرعة المعالج؟",
    A: "أ) Hertz",
    B: "ب) Byte",
    C: "ج) Watt",
    D: "د) Volt",
    rightanswer: "A",
  },
  {
    Questions: "ما هو اختصار URL في علم الحوسبة؟",
    A: "أ) Universal Resource Locator",
    B: "ب) Uniform Resource Locator",
    C: "ج) Unified Resource Locator",
    D: "د) Universal Retrieval Locator",
    rightanswer: "B",
  },
  {
    Questions: "ما هو اسم لغة برمجة تستخدم أساسًا في تطوير تطبيقات الويب؟",
    A: "أ) Python",
    B: "ب) Ruby",
    C: "ج) PHP",
    D: "د) Objective-C",
    rightanswer: "C",
  },
  {
    Questions: "ما هو اسم الجيل الخامس من شبكات الاتصال اللاسلكية؟",
    A: "أ) 4G",
    B: "ب) 3G",
    C: "ج) 5G",
    D: "د) 2G",
    rightanswer: "C",
  },
  {
    Questions: "ما هو اختصار SQL في علم الحوسبة؟",
    A: "أ) Structured Language",
    B: "ب) Simple Language",
    C: "ج) Systematic Language",
    D: "د) Structured Query Language",
    rightanswer: "D",
  },
  {
    Questions: "ما هو اختصار GUI في علم الحوسبة؟",
    A: "أ) Graphical User Interface",
    B: "ب) General User Interface",
    C: "ج) Geographical User Interface",
    D: "د) General User Integration",
    rightanswer: "A",
  },
  {
    Questions: "من هو مؤسس Facebook؟",
    A: "أ) Bill Gates",
    B: "ب) Steve Jobs",
    C: "ج) Mark Zuckerberg",
    D: "د) Jeff Bezos",
    rightanswer: "C",
  },
  {
    Questions: "ما هو اسم أحد أشهر محركات البحث على الإنترنت؟",
    A: "أ) Yahoo",
    B: "ب) Bing",
    C: "ج) DuckDuckGo",
    D: "د) Baidu",
    rightanswer: "B",
  },
  {
    Questions: "ما هي لغة البرمجة التي تستخدم لتطوير تطبيقات iOS؟",
    A: "أ) Java",
    B: "ب) Swift",
    C: "ج) C++",
    D: "د) Kotlin",
    rightanswer: "B",
  },
  {
    Questions: "ما هو اسم لغة برمجة تم تطويرها بواسطة شركة Google؟",
    A: "أ) Java",
    B: "ب) Swift",
    C: "ج) Go",
    D: "د) Kotlin",
    rightanswer: "C",
  },
  {
    Questions: "ما هو اختصار IDE في تطوير البرمجيات؟",
    A: "أ) Integrated Development Environment",
    B: "ب) Intelligent Design Environment",
    C: "ج) Interactive Development Environment",
    D: "د) Integrated Deployment Environment",
    rightanswer: "A",
  },
  {
    Questions: "ما هي تقنية الواقع الافتراضي؟",
    A: "أ) Virtual Reality",
    B: "ب) Augmented Reality",
    C: "ج) Mixed Reality",
    D: "د) Artificial Reality",
    rightanswer: "A",
  },
  {
    Questions: "ما هو اختصار VPN في علم الحاسوب؟",
    A: "أ) Virtual Personal Network",
    B: "ب) Very Private Network",
    C: "ج) Virtual Private Network",
    D: "د) Verified Personal Network",
    rightanswer: "C",
  },
  {
    Questions: "ما هو تقنية Blockchain تقريبًا مرتبطة بها؟",
    A: "أ) Cryptocurrency",
    B: "ب) Machine Learning",
    C: "ج) Virtual Reality",
    D: "د) Artificial Intelligence",
    rightanswer: "A",
  },
  {
    Questions: "ما هو مفهوم 'الإنترنت of Things'؟",
    A: "أ) توصيل الأشياء بالإنترنت",
    B: "ب) إنترنت الأشياء",
    C: "ج) تطوير الأشياء على الإنترنت",
    D: "د) إنشاء الأشياء باستخدام الإنترنت",
    rightanswer: "B",
  },
  {
    Questions: "ما هو اختصار API في علم الحاسوب؟",
    A: "أ) Application Programming Interface",
    B: "ب) Advanced Programming Interface",
    C: "ج) Application Process Integration",
    D: "د) Automated Programming Interface",
    rightanswer: "A",
  },
  {
    Questions: "ما هي تقنية 5G في الاتصالات اللاسلكية؟",
    A: "أ) 5th Generation",
    B: "ب) 5 Gigahertz",
    C: "ج) 5 Global",
    D: "د) 5 Grid",
    rightanswer: "A",
  },
  {
    Questions:
      "ما هي لغة البرمجة التي تُستخدم بشكل رئيسي في تطوير تطبيقات Google Android؟",
    A: "أ) Java",
    B: "ب) Swift",
    C: "ج) Kotlin",
    D: "د) C#",
    rightanswer: "A",
  },
  {
    Questions: "ما هو مفهوم 'Big Data'؟",
    A: "أ) مجموعة كبيرة من البيانات",
    B: "ب) تحليل البيانات الكبيرة",
    C: "ج) تخزين البيانات بشكل كبير",
    D: "د) إدارة البيانات بشكل كبير",
    rightanswer: "A",
  },
  {
    Questions: "ما هي لغة البرمجة التي تم إطلاقها بواسطة Facebook؟",
    A: "أ) Python",
    B: "ب) Ruby",
    C: "ج) PHP",
    D: "د) Hack",
    rightanswer: "D",
  },
  {
    Questions: "ما هي تقنية الطباعة ثلاثية الأبعاد؟",
    A: "أ) 2D Printing",
    B: "ب) 4D Printing",
    C: "ج) 3D Printing",
    D: "د) 1D Printing",
    rightanswer: "C",
  },
];

function game(event) {
  let question = randomQ(questions);
  showText(
    question.A,
    question.B,
    question.C,
    question.D,
    question.Questions,
    question.Img
  );
  if (event.target !== startBtn) {
    if (question.rightanswer === event.target.classList[1]) {
      rightAnswerScore++;
      console.log(
        event.target.classList[1],
        question.rightanswer,
        question,
        event.target
      );
    } else {
      wrongAnswerScore++;
      console.log(
        event.target.classList[1],
        question.rightanswer,
        question,
        event.target
      );
    }
  }
}
A.addEventListener("click", game);
B.addEventListener("click", game);
C.addEventListener("click", game);
D.addEventListener("click", game);
startBtn.addEventListener("click", (event) => {
  container.classList.toggle("hidden");
  startBtn.classList.add("hidden");
  const startQ = randomQ(questions);
  showText(startQ.A, startQ.B, startQ.C, startQ.D, startQ.Questions);
  if (
    startQ.rightanswer === event.target.classList[1] &&
    event.target !== startBtn
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
    if (event.target !== startBtn) {
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
});
