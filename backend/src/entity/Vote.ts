import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm";
import { Option } from "./Option";

@Entity()
export class Vote extends BaseEntity {

  @ManyToOne(type => Option, option => option.votes, { onDelete: 'CASCADE' })
  option: Option;

  @PrimaryGeneratedColumn()
  id: number;

}
