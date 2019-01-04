import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Poll } from "./Poll";
import { Vote } from "./Vote";

@Entity()
export class Option extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Poll, poll => poll.options)
  poll: Poll;

  @OneToMany(type => Vote, vote => vote.option)
  votes: Vote[];

}
