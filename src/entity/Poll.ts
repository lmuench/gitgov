import {Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany} from "typeorm";
import { PollOption } from "./PollOption";

@Entity()
export class Poll extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => PollOption, option => option.poll)
    options: PollOption[];

}
