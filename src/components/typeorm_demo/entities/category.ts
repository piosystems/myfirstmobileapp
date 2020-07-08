import {Entity, PrimaryGeneratedColumn, Column} from "typeorm/browser";

@Entity('category')
export class Category {

    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @Column({type: 'text'})
    name!: string;

}