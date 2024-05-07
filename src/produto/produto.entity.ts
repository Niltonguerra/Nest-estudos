import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm'
import { ProdutoCaracteristicaEntity } from './produtoCaracteristica.entity'
import { ProdutoImagemEntity } from './produtoImagem.entity'

@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'usuario_id',
    length: 100,
    nullable: false,
  })
  usuarioId: string

  @Column({
    name: 'nome',
    length: 100,
    nullable: false,
  })
  nome: string

  @Column({ name: 'valor', nullable: false })
  valor: number

  @Column({ name: 'quantidade_disponivel', nullable: false })
  quantidadeDisponivel: number;


  @Column({
    name: 'descricao',
    length: 255,
    nullable: false,
  })
  descricao: string

  @Column({
    name: 'categoria',
    length: 100,
    nullable: false,
  })
  categoria: string

  @OneToMany(() => ProdutoCaracteristicaEntity, (produtoCaracteristicaEntity) => produtoCaracteristicaEntity.produto, { cascade: true, eager: true })
  caracteristicas: ProdutoCaracteristicaEntity[]

  @OneToMany(() => ProdutoImagemEntity, (produtoImagemEntity) => produtoImagemEntity.produto, { cascade: true, eager: true })
  imagem: ProdutoImagemEntity[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string
}
