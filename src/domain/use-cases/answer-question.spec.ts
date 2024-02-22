import { AnswerQuestionUseCase } from './answer-question'
import { expect, test } from 'vitest'

test('Create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()
  const { answer } = answerQuestion.execute({
    content: 'New Answer',
    questionId: '1',
    instructorId: '2',
  })
  expect(answer.getContent()).toEqual('New Answer')
})
