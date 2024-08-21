'use client'
import { useState, useEffect } from "react";
import Nav from "@/app/components/navbar";
import { ArrowForwardIcon, ChevronRightIcon, RepeatIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Text, Button, Divider, Heading } from "@chakra-ui/react";

const questions = [
  {
    question: "What year did the idea of banking in Nigeria first emerge under the colonial administration?",
    options: ["1958", "1892", "1960", "2002"],
    correctAnswer: 1,
  },
  {
    question: "Which technology introduced in 1993 played a transformative role in payment processing by automating the recognition of characters on cheques?",
    options: ["NIBSS", "Magnetic Ink Character Recognition (MICR)", "Nigeria Automated Clearing System (NACS)", "EMV Cards"],
    correctAnswer: 1,
  },
  {
    question: "What was the main objective of the Payments System Vision 2020 (PSV2020) launched in 2006?",
    options: ["To introduce mobile banking", "To create a globally recognized and nationally utilized payment system", "To establish the Bank Verification Number (BVN)", "To eliminate physical cash in the economy"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following was a key challenge of the PSV2020 initiative?",
    options: ["Lack of internet access", "Difficulty in adopting the cashless policy by ordinary Nigerians", "The failure of the NUBAN system", "The inability to launch eNaira"],
    correctAnswer: 1,
  },
  {
    question: "What is a central theme of the third phase of Nigeria’s payment system evolution (post-2020)?",
    options: ["Introduction of MICR", "Expansion of the Lagos Stock Exchange", "Realization of the Payments System Vision 2025 (PSV2025)", "Establishment of the first bank in Nigeria"],
    correctAnswer: 2,
  },
];

const CUT_OFF_POINTS = 40; // Define the cutoff points

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [testComplete, setTestComplete] = useState(false);

  useEffect(() => {
    if (timer > 0 && !testComplete) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleSkip();
    }
  }, [timer, testComplete]);

  const handleOptionClick = (index) => {
    if (selectedOption === null && !showCorrectAnswer) {
      setSelectedOption(index);
      setShowCorrectAnswer(true);
      if (index === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 10); // Add points for the correct answer
      }
      setTimeout(() => nextQuestion(), 2000); // Show the correct answer for 2 seconds
    }
  };

  const handleSkip = () => {
    setShowCorrectAnswer(true);
    setTimeout(() => nextQuestion(), 2000); // Show the correct answer for 2 seconds
  };

  const nextQuestion = () => {
    setShowCorrectAnswer(false);
    setSelectedOption(null);
    setTimer(60);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestComplete(true); // Mark test as complete
    }
  };

  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
    setTimer(60);
    setScore(0);
    setTestComplete(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box m={0} p={0}>
      <Nav />

      <Box w={"full"} px={"24px"}>
        {/** info bar */}
        <Box
          w={"full"}
          h={"92px"}
          bg={"#007AFF26"}
          p={"16px"}
          my={"40px"}
          display={["none", "none", "flex", "flex"]}
          gap={"12px"}
          alignItems={"center"}
        >
          {/**name and bio */}
          <Box display={"none"} flexDirection={"column"} color={"#8E8E93"}>
            <Text fontSize={"24px"}>Sales Path</Text>
          </Box>

          <ArrowForwardIcon display={"none"} />

          <Box display={"flex"} flexDirection={"column"} color={"#8E8E93"}>
            <Text fontSize={"30px"}>Industry Knowledge</Text>
          </Box>

          <ArrowForwardIcon />

          <Box display={"flex"} flexDirection={"column"} color={"black"}>
            <Text fontSize={"30px"}>Test</Text>
            <Text>Test for lesson 1</Text>
          </Box>

          <Divider orientation="vertical" borderColor={"black"} />

          <Text fontSize={"12px"} fontWeight={"bolder"}>
            Last Opened: <br /> 23/08
          </Text>
        </Box>

        <Box
          w={"full"}
          h={"100vh"}
          px={"24px"}
          display={"flex"}
          flexDirection={["column", "column", "row", "row"]}
          gap={["54px", "54px", "20px", "20px"]}
        >
          <Box
            w={["100%", "100%", "50%", "50%"]}
            h={"200px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"12px"}
          >
            <Box
              display={"flex"}
              w={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                <Text
                  border={"1px solid black"}
                  p={"8px"}
                  borderRadius={"20px"}
                >
                  <TimeIcon /> 1m per question
                </Text>
                <Text>{questions.length} Questions</Text>
              </Box>
              <ArrowForwardIcon boxSize={12} />
            </Box>

            <Text>
              Double tap on any option to pick the correct answer. Each question
              has 10 points. You need {CUT_OFF_POINTS} points to pass this
              lesson. See your current total points below:
            </Text>

            <Text
              textAlign={"center"}
              w={"120px"}
              p={"8px"}
              bg={"#DF8620"}
              borderRadius={"20px"}
              color={"white"}
            >
              {score} points <StarIcon />
            </Text>
          </Box>

          {!testComplete ? (
            <Box
              w={["100%", "100%", "50%", "50%"]}
              h={"200px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
            >
              <Box display={"flex"} gap={"8px"} alignItems={"center"}>
                <Text
                  p={"12px"}
                  color={"white"}
                  bg={"black"}
                  textAlign={"center"}
                  borderRadius={"8px"}
                >
                  {currentQuestionIndex + 1}
                </Text>
                <Text>{currentQuestion.question}</Text>
              </Box>

              <Box
                display={"grid"}
                gridTemplateRows={"repeat(2, 1fr)"}
                gridTemplateColumns={"repeat(2, 1fr)"}
                gap={"10px"}
              >
                {currentQuestion.options.map((option, index) => (
                  <Box
                    key={index}
                    w={"full"}
                    h={"40px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"1px solid black"}
                    borderRadius={"8px"}
                    p={"40px"}
                    textAlign={"center"}
                    bg={
                      showCorrectAnswer &&
                      index === currentQuestion.correctAnswer
                        ? "green.100"
                        : selectedOption === index
                        ? "red.100"
                        : "white"
                    }
                    onClick={() => handleOptionClick(index)}
                    cursor="pointer"
                    _disabled={{ cursor: "default" }}
                    isDisabled={showCorrectAnswer}
                    fontSize={["10px", "10px", "18px", "18px"]}
                  >
                    <Text>{option}</Text>
                  </Box>
                ))}
              </Box>

              <Button
                bg={"purple"}
                p={"12px"}
                color={"white"}
                w={"200px"}
                onClick={handleSkip}
                isDisabled={showCorrectAnswer}
              >
                Next question <ChevronRightIcon />
              </Button>
            </Box>
          ) : (
            <Box
              w={["100%", "100%", "50%", "50%"]}
              h={"200px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {score >= CUT_OFF_POINTS ? (
                  <>
                    <Heading>Congratulations!</Heading>
                    <Text>You are now competent.</Text>
                    <Text
                      textAlign={"center"}
                      w={"120px"}
                      p={"8px"}
                      bg={"#DF8620"}
                      borderRadius={"20px"}
                      color={"white"}
                    >
                      {score} points <StarIcon />
                    </Text>
                  </>
                ) : (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Heading>Ouch</Heading>
                    <Text>
                      I believe, you should try again, you are delay is not
                      denial{" "}
                    </Text>
                    <Text
                      textAlign={"center"}
                      w={"120px"}
                      p={"8px"}
                      bg={"#DF8620"}
                      borderRadius={"20px"}
                      color={"white"}
                    >
                      {score} points <StarIcon />
                    </Text>
                  </Box>
                )}
              </Box>

              <Button
                bg={score >= CUT_OFF_POINTS ? "#7535FD" : "red.500"}
                color={"white"}
                p={"12px"}
                onClick={
                  score >= CUT_OFF_POINTS
                    ? () => alert("Proceed to next lesson")
                    : restartTest
                }
              >
                {score >= CUT_OFF_POINTS ? (
                  <>
                    Start Next Lesson <ChevronRightIcon ml={2} />
                  </>
                ) : (
                  <>
                    Try again <RepeatIcon ml={2} />
                  </>
                )}
              </Button>
            </Box>
          )}
        </Box>

        <Text fontSize={"lg"} color={"blue.500"} mt={4}>
          Time Remaining: {timer}s
        </Text>
      </Box>
    </Box>
  );
}
