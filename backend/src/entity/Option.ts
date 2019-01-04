import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Poll } from "./Poll";
import { Vote } from "./Vote";

@Entity()
export class Option extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Poll, poll => poll.options)
  poll: Poll;

  @Column()
  name: string;

  @OneToMany(type => Vote, vote => vote.option)
  votes: Vote[];

  constructor(name: string) {
    super();
    this.name = name;
  }

}
