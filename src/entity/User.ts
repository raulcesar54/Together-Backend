import { Exclude } from 'class-transformer'
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
class User {
  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Exclude()
  @Column()
  password: string

  @Column()
  email: string

  @Column()
  admin: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export { User }
