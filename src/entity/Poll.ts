import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { Option } from "./Option";
import { Vote } from "./Vote";

@Entity()
export class Poll extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Option, option => option.poll, { cascade: true })
  options: Option[];

  @OneToMany(type => Vote, vote => vote.poll, { cascade: true })
  votes: Vote[];

}
