import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 20 })
  author: string;

  @Column('text')
  content: string;

  @Column({ default: '' })
  thumb_url: string;

  @Column('tinyint')
  type: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_timestamp'})
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_timestamp'})
  update_time: Date;
}