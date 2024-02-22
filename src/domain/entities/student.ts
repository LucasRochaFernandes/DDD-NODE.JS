import { Entity } from '../../core/entities/entity'

interface StudentProps {
  name: string
  ra: string
  cpf: string
}

export class Student extends Entity<StudentProps> {
  get name(): string {
    return this.props.name
  }
}
