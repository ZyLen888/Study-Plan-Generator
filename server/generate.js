import openaiClient from "./api.js";

const generate = async (planDesc) => {
  const daVinci = async (planDesc) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a month (4 weeks) worth of study plan within 500 words, outlined by weeks, with for specific recommended books, resources and actions: ${planDesc}.`,
      max_tokens: 500,
      temperature: 0,
    });
    return response.data.choices[0].text;
  };

  const studyPlan = await daVinci(planDesc);
  return studyPlan;
};

export default generate;
