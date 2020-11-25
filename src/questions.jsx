const questions = [
  {
    question: "What's your favourite programing language?",
    optionOne: "Python",
    optionTwo: "Java",
    optionThree: "JavaScript",
    optionOneCount: 7,
    optionTwoCount: 4,
    optionThreeCount: 6,
  },
  {
    question: "How do you instantiate an array in Java?",
    optionOne: "int arr[] = new int(3);",
    optionTwo: "int arr[];",
    optionThree: "int arr[3] = {1,2,3};",
    optionOneCount: 7,
    optionTwoCount: 4,
    optionThreeCount: 9,
  },
  {
    question:
      " Which of the following is a correct way to declare a multidimensional array in Java?",
    optionOne: "int[] arr;",
    optionTwo: "int arr[[]];",
    optionThree: "int[][]arr;",
    optionOneCount: 7,
    optionTwoCount: 4,
    optionThreeCount: 8,
  },
  {
    question:
      " Which of the following is a correct way to declare a multidimensional array in Java?",
    optionOne: "int[] arr;",
    optionTwo: "int arr[[]];",
    optionThree: "int[][]arr;",
    optionOneCount: 7,
    optionTwoCount: 4,
    optionThreeCount: 8,
  },
  {
    question:
      " Which of the following is a correct way to declare a multidimensional array in Java?",
    optionOne: "int[] arr;",
    optionTwo: "int arr[[]];",
    optionThree: "int[][]arr;",
    optionOneCount: 7,
    optionTwoCount: 4,
    optionThreeCount: 8,
  },
  {
    question:
      " Which of the following is a correct way to declare a multidimensional array in Java?",
    optionOne: "int[] arr;",
    optionTwo: "int arr[[]];",
    optionThree: "int[][]arr;",
    optionOneCount: 7,
    optionTwoCount: 4,
    optionThreeCount: 8,
  },
  {
    question:
      " Which of the following is a correct way to declare a multidimensional array in Java?",
    optionOne: "int[] arr;",
    optionTwo: "int arr[[]];",
    optionThree: "int[][]arr;",
    optionOneCount: 7,
    optionTwoCount: 4,
    optionThreeCount: 8,
  },
];

export function getQuestions() {
  return questions;
}

export function getQuestion(id) {
  return questions.find((m) => m._id === id);
}
