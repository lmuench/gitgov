import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm";
import { Poll } from "./Poll";
import { Option } from "./Option";

@Entity()
export class Vote extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Poll, poll => poll.votes)
  poll: Poll;

  @ManyToOne(type => Option, option => option.votes)
  option: Option;

}
