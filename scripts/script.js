const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".icon_arrow");
const box = document.querySelector(".box");

const search = (datas, d_key) => {
  return datas.forEach((data, key) => {
    if (d_key === key) {
      data.classList.toggle("active");

      /* box moving */
      if (data.classList.contains("active")) {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
      /**/
    } else if (data.classList.contains("active")) {
      data.classList.remove("active");
    }
  });
};

const showAnswer = (key) => {
  /* question turn bold */
  search(questions, key);

  /* show answer */
  search(answers, key);

  /* move arrow up/down */
  search(arrows, key);
};

/* waiting for click */
questions.forEach((question, index_question) => {
  question.addEventListener("click", () => {
    showAnswer(index_question);
  });
});

arrows.forEach((arrow, index_arrow) => {
  arrow.addEventListener("click", () => {
    showAnswer(index_arrow);
  });
});
