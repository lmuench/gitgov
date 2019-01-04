import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Poll } from "./Poll";
import { Vote } from "./Vote";

@Entity()
export class Option extends BaseEntity {

  @ManyToOne(type => Poll, poll => poll.options)
  poll: Poll;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Vote, vote => vote.option, { cascade: true } )
  votes: Vote[];

  constructor(name: string) {
    super();
    this.name = name;
  }

}
