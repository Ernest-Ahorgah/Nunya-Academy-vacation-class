const questions = [
  {
    question : "1. Which of the following best defines computer hardware?",
    options: ["Programs and applications", "Physical parts of a computer system", "Instructions given to the computer", "None of the above"],
    answer: "Physical parts of a computer system",
    explanation: "Answer: b. Hardware refers to the physical, tangible parts of a computer that you can see and touch."
  },
  {
    question: "2. Which device is considered an input device?",
    options: ["Monitor", "Keyboard", "Printer", "Speaker"],
    answer: "Keyboard",
    explanation: "Answer: b. A keyboard is used for typing commands and data, making it an input device."
  },
  {
    question: "3. Which of the following is not an output device?",
    options: ["Printer", "Monitor", "Scanner", "Speakers"],
    answer: "Scanner",
    explanation: "Answer: c. A scanner is an input device, while the others are output devices."
  },
  {
    question: "4. The device that converts paper documents into digital form is:",
    options: ["Printer", "Scanner", "Projector", "Mouse"],
    answer: "Scanner",
    explanation: "Answer: b. A scanner digitizes physical documents for use on a computer."
  },
  {
    question: "5. Which component is often called the 'brain' of the computer?.",
    options: ["Motherboard", "CPU", "RAM", "Hard Disk"],
    answer: "CPU",
    explanation: "Answer: b. The CPU executes instructions and processes data, functioning as the brain of the system."
  },
  {
    question: "6. What is the main purpose of RAM in a computer?.",
    options: ["Permanent storage", "Running temporary data and programs", "Connecting hardware components", "Producing output"],
    answer: "Running temporary data and programs",
    explanation: "Answer: b. RAM temporarily stores data and instructions being actively used, which makes it volatile but fast."
  },
  {
    question: "7. Which type of memory is permanent and cannot be erased easily?.",
    options: ["RAM", "ROM", "Cache", "Hard Disk"],
    answer: "ROM",
    explanation: "Answer: b. ROM stores essential instructions permanently and is not volatile like RAM."
  },
  {
    question: "8. Which of the following is not a storage device?.",
    options: ["Hard Disk", "USB Flash Drive", "CD/DVD", "Projector"],
    answer: "Projector",
    explanation: "Answer: d. A projector is an output device, not a storage device."
  },
  {
    question: "9. The motherboard is also known as:",
    options: ["The system unit", "The communication backbone", "The permanent memory", "The input device"],
    answer: "The communication backbone",
    explanation: "Answer: b. The motherboard connects all components and allows them to communicate."
  },
  {
    question: "10. Which of these converts electricity from an outlet into usable power for the computer?.",
    options: ["RAM", "CPU", "PSU", "ROM"],
    answer: "PSU",
    explanation: "Answer: c. The Power Supply Unit provides stable power to hardware components."
  },
  {
    question: "11. Hardware can be seen and touched, unlike software.",
    options: ["True", "False", "Both true and False", "None of the above"],
    answer: "True",
    explanation: "Answer: True. Hardware is physical, while software is intangible. "
  },

  {
    question: "12. The monitor is considered an input device.",
    options: ["True", "False", "Both true and False", "None of the above"],
    answer: "False",
    explanation: "Answer: Monitor is an output devices that display signals received from the motherboard."
  },

  {
    question: "13. RAM is permanent memory that stores data even whn power is off..",
    options: ["True", "False", "True or False", "None of the above"],
    answer: "False",
    explanation: "Answer: False. RAM is volatile and loses its contents when the power is off."
  },
  {
    question: "14. A USB flash drive is an example of portable storage.",
    options: ["True", "False", "True or False", "None of the above"],
    answer: "True",
    explanation: "Answer: True. It allows data to be stored and carried easily."
  },
   {
    question: "15. The CPU only stores data but does not process it.",
    options: ["True", "False", "True or False", "None of the above"],
    answer: "False",
    explanation: "Answer: False. The CPU processes instructions and data, acting as the brain of the coputer."
  },
  {
    question: "16. The __________ produces hard copies of documents.",
    options: ["Monitor", "mouse", "Keyboard", "Printer"],
    answer: "Printer",
    explanation: "Answer: Printer. Printers transfer digital documents into physical form."
  },
  {
    question: "17. The __________ is the main circuit board that connects the CPU, memory, and storage.",
    options: ["Motherboard", "mouse", "Keyboard", "Printer"],
    answer: "Motherboard",
    explanation: "Answer: Motherboard. It acts as the main communication hub."
  },
  {
    question: "18. _________ memory stores essential startup instructions permanently.",
    options: ["RAM", "Cache", "ROM", "Flash Drive"],
    answer: "ROM",
    explanation: "Answer: ROM. It contains data needed to boot the system."
  },
  {
    question: "19. The __________ is the part of the computer that houses the CPU, motherboard, memory, and other internal hardware.",
    options: ["CPU", "RAM", "System Unit", "Flash Drive"],
    answer: "System Unit",
    explanation: "Answer: System Unit. It contains the core hardware components."
  },
  {
    question: "20. A __________ is used to control the on-screen pointer.",
    options: ["CPU", "Mouse", "Keboard", "PSU"],
    answer: "Mouse",
  },

   {
    question: "THE FOLLOWING QUESTIONS ARE INTENDED FOR ELECTIVE I.C.T AND COPUTER SCIENCE STUDENTS. FOR NOW, NO EXPLAINATION IS GIVEN, WE WILL DISCUSS THIS IN OUR NEXT SESSION. ATTEPMT ALL QUESTIONS. Remeber: All numerical value answers are given in binary form.",
    
  },

{
    question : "1. In writing a machine code for a CPU, binary instruction sets defined by the programmer operate on operands stored in storage components called...",
    options: ["Stack", "Registers", "Control Unit(CU)", "Arithmetic Logic Unit(ALU)"],
    answer: "Registers"
  },
  {
    question: "2. A programmer defined 110111 instruction set as an 'ADDITION' operator for ARM x86 CPU, what will be the content of a register R3 after the result of addition operation on R1 with value 5 and R2 with value 24?. Thus R3= 110111 R1,R2?. Leave your answer in binary base 2 form.",
    options: ["1111110", "11101", "110011", "100001"],
    answer: "11101"
  },
  {
    question: "3. A C langauge programmer developed an application to take user input and write the content to a screen, which header file should he include in his program to accoplish this?",
    options: ["stdio.h", "stdout.h", "stdio", "iostream"],
    answer: "stdio.h"
  },
  {
    question: "4. Which of the follwoing is an exteneded version of C language?",
    options: ["C#", "C++", "COBOL", "Python"],
    answer: "C++"
  },
  {
    question: "5. C# pronouned 'C Sharp' is a Programming language developed by which Organization?",
    options: ["IBM", "Google", "Microsoft", "Bell Labs"],
    answer: "Microsoft"
  },
  {
    question: "6. What is the starting point of a program in C++?",
    options: ["Start", "Static Void Main", "Main()", "main()"],
    answer: "main()"
  },
  {
    question: "7. The .NET framework helps make C# program excutable in other operating system environments. True or False?",
    options: ["True", "False", "None of the above", "Cannot say"],
    answer: "True"
  },
  {
    question: "8. Which of the following is a programming language designed to be used for making webpages interactive?",
    options: ["Java", "C++", "Javascript", "C"],
    answer: "Javascript"
  },
  {
    question: "9. Programs written in machine language are",
    options: ["CPU dependent", "CPU independent", "Universal", "written in English"],
    answer: "CPU independent"
  },
  {
    question: "10. In designing an AMD x64 CPU, A programmer defined 1111101 as a 'CUT' instruction set. As an assistant programmer, how do you move a value stored in register R4 with address 0x00 to Register R7 address 0x01 using machine langauge based on the instruction set defined by your senior programmer?",
    options: ["1111101 R4,R7", "1111101 0x010, 0x01", "1111101 0x00 0x01", "1111101 1111101 0x00"],
    answer: "1111101 R4,R7"
  },
   {
    question: "11. MOV R2,R4, JMP R7, DEC R6, EXIT 00.  is an example of a program statement written in.......?",
    options: ["Machine language", "Python", "Assembly language", "C++"],
    answer: "Assembly language"
  },
  {
    question: "12. .... is a prefered language used in development of AI and Expert systems such as ChatGPT, perplexity, Deepseek, Qwen, Copilot etc. ",
    options: ["C#", "C", "COBOL", "Python"],
    answer: "Python"
  },
  {
    question: "13. A switch statement execute a block of code if a certain condition is met, else .....",
    options: ["Default block of code is excuted", "the program exits", "the compiler or the interpreter fails", "the program throws an error "],
    answer: "Default block of code is excuted"
  },
  {
    question: "14. You need a program called...... to translate a C++ code to binary code for a CPU to understand ",
    options: ["Interpreter", "Compiler", "Assembler", ".Net framework"],
    answer: "Compiler"
  },
  {
    question: "15. A C language was developed to be used for.....?",
    options: ["Web applications", "Linux based OS developent", "Cloud torage", "Desktop applications"],
    answer: "Desktop applications"
  },
  {
    question: "16. In Programming, A boolean expression evaluates to either..... based on a specific condition",
    options: ["True", "False", "True or False", "None"],
    answer: "True or False"
  },
  {
    question: "17. In python programming language, if A=10 and B=5. What will be the output of A**B?. Leave your anwer in binary base 2.",
    options: ["10000", "1000000", "100000", "110000"],
    answer: "100000"
  },
  {
    question: "18. std::cout<<'Nunya Academy' is an example of a program statement written in .....",
    options: ["Java", "Python", "COBOL", "C++"],
    answer: "C++"
  },
  {
    question: "19. A programming language that uses mneumonics to represent binary instructions that operate on registers during program execution is called.... ",
    options: ["Assembly language", "Go language", "Rust", "Basic"],
    answer: "Assembly language"
  },
  {
    question: "20. Indentation is a crucial thing to observe in ..... Language to avoid bug.",
    options: ["C", "C++", "COBOL", "Python"],
    answer: "Python"
  },

   {
    question: "END OF TEST",
    answer: "SEE YOU IN CLASS NEXT WEEK"
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options")
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");
const currentScoreDisplay = document.getElementById("current-score");
const totalQuestionsDisplay = document.getElementById("total-questions");
const explanationContainer = document.getElementById("explanation-container");
const explanationText = document.getElementById("explanation-text");

totalQuestionsDisplay.textContent = questions.length;

function showQuestion(index) {
  const q = questions[index];
  questionBox.innerText = q.question;
  optionsBox.innerHTML = "";
  explanationContainer.classList.add("hidden");

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(btn, q.answer, q.explanation);
    optionsBox.appendChild(btn);
  });

  // Disable/enable previous button
  prevBtn.disabled = index === 0;
  // Disable/enable next button
  nextBtn.disabled = index === questions.length - 1;
  
  // Update current question display
  document.querySelector(".current-question").textContent = index + 1;
}

function selectAnswer(button, correctAnswer, explanation) {
  const allButtons = document.querySelectorAll(".option-btn");
  allButtons.forEach(btn => btn.disabled = true);

  if (button.innerText === correctAnswer) {
    button.classList.add("correct");
    score++;
    currentScoreDisplay.textContent = score;
  } else {
    button.classList.add("wrong");
    allButtons.forEach(btn => {
      if (btn.innerText === correctAnswer) btn.classList.add("correct");
    });
  }

  // Show explanation
  explanationText.textContent = explanation;
  explanationContainer.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  showQuestion(currentQuestion);
});

prevBtn.addEventListener("click", () => {
  currentQuestion--;
  showQuestion(currentQuestion);
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.innerText = `You scored ${score} out of ${questions.length}`;
}

// Initialize

showQuestion(currentQuestion);
