import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany, Column } from 'typeorm';
import { Option } from './Option';

@Entity()
export class Poll extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  issue: string;

  @OneToMany(type => Option, option => option.poll, { cascade: true })
  options: Option[];

}
