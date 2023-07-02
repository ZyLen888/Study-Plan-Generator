import openaiClient from "./api.js";

const generate = async (planDesc) => {
  const daVinci = async (planDesc) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a 7 days study plan within 500 words, with for specific recommended books (1 book each day), recommended courses with publisher attached, resources and actions: ${planDesc}.`,
      max_tokens: 1000,
      temperature: 0,
    });
    return response.data.choices[0].text;
  };

  const studyPlan = await daVinci(planDesc);
  return studyPlan;
};

export default generate;
