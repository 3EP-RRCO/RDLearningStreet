const lessons = [
  {
    title: "Meet USDA Rural Development",
    icon: "🌾",
    time: "10 min",
    summary: "Agency mission, program structure, and local offices",
    intro: "Ranger RD opens the gate: Rural Development is a USDA mission area that supports rural communities through housing, community facilities, business, and utility programs.",
    content: `
      <div class="lesson-body">
        <h3>What the agency does</h3>
        <p>USDA Rural Development administers programs intended to improve economic opportunity and quality of life in rural America. This academy focuses on its single-family housing work, especially Section 502 Direct.</p>
        <div class="callout"><strong>Ranger RD says:</strong> “First identify the program, then find the current rule. Don't assume every USDA program has the same eligibility standards.”</div>
        <h3>What local offices do</h3>
        <p>Rural Development field offices provide program information and administer or support program delivery according to their assigned responsibilities. A local office can help clarify where an application belongs and which current procedures apply.</p>
        <h3>Packager's role</h3>
        <ul><li>Help applicants understand the process and organize a complete, accurate file within the packager's authorized role.</li><li>Use current official guidance rather than relying on memory or outdated checklists.</li><li>Never promise approval, a particular interest rate, or a payment amount.</li></ul>
        <div class="scenario"><strong>Scenario:</strong> A family asks whether USDA can help buy a home in a rural community. Your first step is to identify which USDA housing program they mean, then verify current borrower, income, property, and application requirements.</div>
      </div>`,
    quiz: {
      question: "A household asks about a USDA home loan. What should you do first?",
      options: ["Assume every USDA housing program has the same rules", "Identify the specific program and consult current official guidance", "Promise that a rural address guarantees eligibility"],
      answer: 1,
      explain: "Correct. USDA has multiple programs with different structures and requirements. Identify the program before applying its rules."
    }
  },
  {
    title: "Choose the Correct Program",
    icon: "🧭",
    time: "15 min",
    summary: "Section 502 Direct vs. Guaranteed vs. Section 504",
    intro: "Homey the House and Ranger RD sort three program folders. The names sound related, but their purposes and delivery models differ.",
    content: `
      <div class="lesson-body">
        <h3>Know the basic distinction</h3>
        <ul><li><strong>Section 502 Direct:</strong> USDA makes the loan directly to an eligible borrower, subject to program rules.</li><li><strong>Section 502 Guaranteed:</strong> A participating private lender makes the loan and USDA provides a guarantee under the program.</li><li><strong>Section 504:</strong> A separate program that may provide eligible very-low-income rural homeowners with repair loans and, for qualifying applicants, grants. Its eligibility and terms differ from Section 502.</li></ul>
        <div class="callout"><strong>Memory hook:</strong> Direct = USDA is the lender. Guaranteed = private lender plus USDA guarantee. Section 504 = eligible home repair assistance.</div>
        <h3>Why the distinction matters</h3>
        <p>Application pathways, underwriting, eligibility rules, forms, and professional requirements may differ. Do not transfer a rule from one program to another unless the official guidance says it applies.</p>
        <div class="scenario"><strong>Scenario:</strong> An applicant says, “My bank told me about a USDA Guaranteed loan, but I want to work with a Direct Loan packager.” Clarify which program they want to pursue and verify the appropriate process before collecting or representing requirements.</div>
      </div>`,
    quiz: {
      question: "Which statement best describes Section 502 Direct?",
      options: ["A private lender makes the loan and USDA guarantees it", "USDA makes the loan directly to an eligible borrower", "It is only a home repair grant"],
      answer: 1,
      explain: "Correct. Section 502 Direct is made by USDA to eligible borrowers. Guaranteed loans and Section 504 repair assistance are distinct programs."
    }
  },
  {
    title: "Qualify the Borrower",
    icon: "👥",
    time: "20 min",
    summary: "Household circumstances, eligibility, credit, and repayment",
    intro: "Packager Pat reminds us that borrower eligibility is a set of checks, not one magic number.",
    content: `
      <div class="lesson-body">
        <h3>Think in separate eligibility questions</h3>
        <ul><li>Does the household meet the current income rules for the specific program and location?</li><li>Does the applicant meet citizenship or eligible-status requirements under current rules?</li><li>Can the applicant demonstrate the required repayment ability and acceptable creditworthiness under applicable standards?</li><li>Does the applicant meet the program's homeownership and other borrower requirements?</li></ul>
        <p>Income limits and rules can vary by household size, county, and program. Credit standards and acceptable documentation must be checked in current USDA guidance. Do not treat a single score or a broad “low income” description as an automatic approval or denial.</p>
        <div class="callout"><strong>Pat's rule:</strong> Collect facts carefully, document the source, and flag questions for the appropriate USDA or qualified program contact. Do not invent exceptions.</div>
        <div class="scenario"><strong>Scenario:</strong> An applicant's income appears below a published limit, but their file is missing documentation about household income and current debts. The correct response is to identify missing evidence and follow the current checklist, not to declare the household qualified.</div>
      </div>`,
    quiz: {
      question: "An applicant appears to be below an income limit. What does that establish?",
      options: ["Automatic loan approval", "Only one part of the eligibility picture; other requirements and documentation still matter", "That credit and repayment do not need review"],
      answer: 1,
      explain: "Correct. Income is only one part of eligibility. Borrower, credit, repayment, property, and documentation rules must also be addressed."
    }
  },
  {
    title: "Follow the Money",
    icon: "🦉",
    time: "20 min",
    summary: "Annual income, adjusted annual income, repayment income, and payment assistance",
    intro: "Professor Numbers separates three concepts that are easy to blend together but serve different purposes.",
    content: `
      <div class="lesson-body">
        <h3>Three income concepts</h3>
        <ul><li><strong>Annual income:</strong> Household income counted under the program's rules for eligibility purposes.</li><li><strong>Adjusted annual income:</strong> Annual income after allowable deductions under the program's rules, used for certain calculations.</li><li><strong>Repayment income:</strong> Income considered available to support repayment under applicable underwriting rules. It is not necessarily the same as annual household income.</li></ul>
        <p>These are study-level definitions. The exact inclusions, exclusions, deductions, time periods, and documentation rules must be taken from the current Section 502 Direct handbook and applicable guidance.</p>
        <h3>Payment assistance</h3>
        <p>Eligible Section 502 Direct borrowers may qualify for payment assistance under current program rules. Do not promise a subsidy or quote an amount until the current rules, verified information, and official calculation process have been applied.</p>
        <div class="callout"><strong>Professor Numbers says:</strong> “Name the calculation before you touch the calculator.” Always label the figure you are working with and cite the rule behind it.</div>
        <div class="scenario"><strong>Scenario:</strong> A household has wages plus another income source and may qualify for an allowable deduction. Do not simply subtract every expense from gross pay. Identify the relevant income definition, check whether each source or deduction is treated as allowed, and document it.</div>
      </div>`,
    quiz: {
      question: "Why should a packager distinguish annual income from repayment income?",
      options: ["They always have identical values", "They serve different program purposes and may be calculated differently", "Repayment income means only the applicant's cash savings"],
      answer: 1,
      explain: "Correct. Income definitions can differ by purpose. Follow current USDA rules for the specific calculation."
    }
  },
  {
    title: "Inspect the Home and Location",
    icon: "🏡",
    time: "15 min",
    summary: "Rural location, property eligibility, and acceptable use",
    intro: "Homey the House points out that an eligible map location is an important check, but it does not automatically make every property eligible.",
    content: `
      <div class="lesson-body">
        <h3>Separate location from property</h3>
        <ul><li><strong>Location:</strong> Verify the address using the current official USDA property eligibility tool and the correct program.</li><li><strong>Property and dwelling:</strong> Review current requirements for the type, condition, use, and acceptability of the property.</li><li><strong>Borrower and transaction:</strong> Confirm that the intended purchase and applicant circumstances fit the program's current rules.</li></ul>
        <p>Do not rely on a postal city name, a real-estate listing, or a previous eligibility result as definitive proof. Save the date and results of official checks and confirm questions with USDA.</p>
        <div class="callout"><strong>Homey's reminder:</strong> “A green dot on a map is not a complete property approval.”</div>
        <div class="scenario"><strong>Scenario:</strong> A listing appears in an eligible area, but it is unclear whether the property's condition and intended use meet program requirements. Record the location result and separately verify property acceptability under current guidance.</div>
      </div>`,
    quiz: {
      question: "A home's address appears eligible in the USDA map tool. What can you conclude?",
      options: ["The loan is approved", "The location check is encouraging, but other borrower, property, and transaction requirements remain", "No further property review is needed"],
      answer: 1,
      explain: "Correct. Location eligibility is only one part of the process; all applicable program requirements still need review."
    }
  },
  {
    title: "Package the Application",
    icon: "📋",
    time: "20 min",
    summary: "File quality, documentation, professional boundaries, and certification",
    intro: "Packager Pat brings the file folder. A strong package is accurate, organized, complete for its stage, and honest about what is still missing.",
    content: `
      <div class="lesson-body">
        <h3>Core packaging habits</h3>
        <ul><li>Use the current USDA application checklist, forms, and instructions.</li><li>Confirm that information is consistent across forms and supporting documents.</li><li>Identify missing, outdated, unclear, or conflicting evidence rather than silently guessing.</li><li>Protect personal and financial information and use secure, authorized channels.</li><li>Keep clear notes about sources, follow-ups, and unresolved questions.</li><li>Never promise approval or misstate a fact to make an application appear eligible.</li></ul>
        <h3>Training and certification</h3>
        <p>Training, examination, employer or intermediary arrangements, and other qualification requirements are controlled by the current official program. Confirm the latest eligibility and onboarding steps directly with USDA's official Direct Loan Application Packager Resources and training provider. This study site itself does not confer certification.</p>
        <div class="callout"><strong>Professional boundary:</strong> A packager helps prepare an application within the authorized role. USDA makes program determinations and loan decisions.</div>
        <div class="scenario"><strong>Scenario:</strong> A document conflicts with what the applicant entered on a form. Pause, ask for clarification, document the resolution, and follow current instructions. Do not choose whichever number makes the file look better.</div>
      </div>`,
    quiz: {
      question: "A supporting document conflicts with information on an application form. What is the best response?",
      options: ["Ignore the document", "Change the form without asking", "Resolve and document the discrepancy using current procedures"],
      answer: 2,
      explain: "Correct. A reliable package addresses inconsistencies transparently and follows current instructions."
    }
  }
];

const grid = document.getElementById("lesson-grid");
const view = document.getElementById("lesson-view");
const completed = new Set(JSON.parse(localStorage.getItem("rdls-completed") || "[]"));
let activeLesson = 0;
let answered = false;

function saveProgress() {
  localStorage.setItem("rdls-completed", JSON.stringify([...completed]));
  renderProgress();
  renderCards();
}
function renderProgress() {
  const n = completed.size;
  document.getElementById("progress-count").textContent = `${n} of ${lessons.length} complete`;
  document.getElementById("progress-fill").style.width = `${n / lessons.length * 100}%`;
  const bar = document.getElementById("progress-bar");
  bar.setAttribute("aria-valuenow", n);
}
function renderCards() {
  grid.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const done = completed.has(i);
    const article = document.createElement("article");
    article.className = `lesson-card${done ? " done" : ""}`;
    article.innerHTML = `
      <div class="card-meta"><span>LESSON ${i + 1}</span><span>${done ? "✓ Complete" : lesson.time}</span></div>
      <div class="lesson-icon" aria-hidden="true">${lesson.icon}</div>
      <h3>${lesson.title}</h3>
      <p>${lesson.summary}</p>
      <button class="button ${done ? "secondary" : "primary"}" data-open="${i}">${done ? "Review lesson" : "Open lesson"} →</button>`;
    grid.appendChild(article);
  });
  grid.querySelectorAll("[data-open]").forEach(btn => btn.addEventListener("click", () => openLesson(Number(btn.dataset.open))));
}
function openLesson(i) {
  activeLesson = i;
  answered = false;
  const lesson = lessons[i];
  document.getElementById("lesson-kicker").textContent = `LESSON ${i + 1} OF ${lessons.length}`;
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-intro").textContent = lesson.intro;
  document.getElementById("lesson-content").innerHTML = lesson.content;
  document.getElementById("quiz-question").textContent = lesson.quiz.question;
  const options = document.getElementById("quiz-options");
  options.innerHTML = "";
  lesson.quiz.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "quiz-option";
    label.innerHTML = `<input type="radio" name="quiz-answer" value="${index}"><span>${option}</span>`;
    options.appendChild(label);
  });
  const feedback = document.getElementById("quiz-feedback");
  feedback.textContent = "";
  feedback.className = "quiz-feedback";
  document.getElementById("check-answer").classList.remove("hidden");
  document.getElementById("next-question").classList.add("hidden");
  document.getElementById("complete-checkbox").checked = completed.has(i);
  document.getElementById("next-lesson-button").textContent = i === lessons.length - 1 ? "Back to lessons ↑" : "Next lesson →";
  view.classList.remove("hidden");
  document.getElementById("lessons").classList.add("hidden");
  document.querySelector(".character-strip").classList.add("hidden");
  view.scrollIntoView({ behavior: "smooth", block: "start" });
}
document.getElementById("back-button").addEventListener("click", () => {
  view.classList.add("hidden");
  document.getElementById("lessons").classList.remove("hidden");
  document.querySelector(".character-strip").classList.remove("hidden");
  document.getElementById("lessons").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("check-answer").addEventListener("click", () => {
  if (answered) return;
  const selected = document.querySelector('input[name="quiz-answer"]:checked');
  const feedback = document.getElementById("quiz-feedback");
  if (!selected) {
    feedback.textContent = "Choose an answer first, then check it.";
    feedback.className = "quiz-feedback incorrect";
    return;
  }
  answered = true;
  const quiz = lessons[activeLesson].quiz;
  const correct = Number(selected.value) === quiz.answer;
  feedback.textContent = `${correct ? "Correct! " : "Not quite. "}${quiz.explain}`;
  feedback.className = `quiz-feedback ${correct ? "correct" : "incorrect"}`;
  document.getElementById("check-answer").classList.add("hidden");
  document.getElementById("next-question").classList.remove("hidden");
});
document.getElementById("next-question").addEventListener("click", () => {
  if (activeLesson < lessons.length - 1) openLesson(activeLesson + 1);
  else {
    view.classList.add("hidden");
    document.getElementById("lessons").classList.remove("hidden");
    document.querySelector(".character-strip").classList.remove("hidden");
    document.getElementById("lessons").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("complete-checkbox").addEventListener("change", e => {
  if (e.target.checked) completed.add(activeLesson);
  else completed.delete(activeLesson);
  saveProgress();
});
document.getElementById("next-lesson-button").addEventListener("click", () => {
  if (activeLesson < lessons.length - 1) openLesson(activeLesson + 1);
  else {
    view.classList.add("hidden");
    document.getElementById("lessons").classList.remove("hidden");
    document.querySelector(".character-strip").classList.remove("hidden");
    document.getElementById("lessons").scrollIntoView({ behavior: "smooth" });
  }
});
renderProgress();
renderCards();
