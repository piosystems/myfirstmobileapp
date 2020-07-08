import {Entity, Column, PrimaryGeneratedColumn} from "typeorm/browser";

@Entity('author')
export class Author {

    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @Column({type: 'text'})
    name!: string;

    @Column({type: 'text', nullable: true})
    birthdate!: string;
}