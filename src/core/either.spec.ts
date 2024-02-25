import { ResourceNotFoundError } from '@/domain/forum/application/use-cases/errors/resource-not-found'
import { Either, Left, Right, left, right } from './either'

function doSomething(
  isSuccess: boolean,
): Either<ResourceNotFoundError, number> {
  if (isSuccess) {
    return right(10)
  }
  return left(new ResourceNotFoundError())
}

describe('Either', () => {
  test('success result', () => {
    const result = doSomething(true)
    if (result instanceof Right) {
      expect(typeof result.value).toBe('number')
    }
    expect(result).instanceOf(Right)
  })
  test('error result', () => {
    const result = doSomething(false)
    expect(result).instanceOf(Left)
    expect(result.value).instanceOf(ResourceNotFoundError)
  })
})
