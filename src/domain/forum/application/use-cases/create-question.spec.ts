import { InMemoryQuestionsRespository } from 'test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let InMemoryQuestionRepository: InMemoryQuestionsRespository
let sut: CreateQuestionUseCase

describe('Create a Question', () => {
  beforeEach(() => {
    InMemoryQuestionRepository = new InMemoryQuestionsRespository()
    sut = new CreateQuestionUseCase(InMemoryQuestionRepository)
  })
  it('Should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '123',
      title: 'New Question',
      content: 'Question Content',
    })
    expect(question.id).toBeTruthy()
  })
})
