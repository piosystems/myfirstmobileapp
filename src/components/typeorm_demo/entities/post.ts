import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm/browser";
import {Category} from "./category";
import {Author} from "./author"

@Entity('post')
export class Post {

    @PrimaryGeneratedColumn({type: 'int'})
    id!: number;

    @Column({type: 'text'})
    title!: string;

    @Column("text")
    text!: string;

    @ManyToMany(type => Category, {
      cascade: ['insert']
    })
    @JoinTable()
    categories!: Category[];

    @ManyToOne(type => Author, {
      cascade: ['insert']
    })
    author!: Author;
}