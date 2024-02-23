import { AnswerQuestionUseCase } from './answer-question'

test('Create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase()
  const { answer } = await answerQuestion.execute({
    content: 'New Answer',
    questionId: '1',
    instructorId: '2',
  })
  expect(answer.content).toEqual('New Answer')
})
