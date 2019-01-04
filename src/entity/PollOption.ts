import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinTable } from "typeorm";
import { Poll } from "./Poll";

@Entity()
export class PollOption extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Poll, poll => poll.options)
  poll: Poll;

}
