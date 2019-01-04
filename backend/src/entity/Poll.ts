import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { Option } from "./Option";

@Entity()
export class Poll extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Option, option => option.poll, { cascade: true })
  options: Option[];

}
