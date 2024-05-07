import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { ProdutoEntity } from './produto.entity'

@Entity('produto_imagens')
export class ProdutoImagemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    name: 'url',
    length: 100,
    nullable: false,
  })
  url: string

  @Column({
    name: 'descricao',
    length: 100,
    nullable: false,
  })
  descricao: string

  @ManyToOne(() => ProdutoEntity, (produto) => produto.imagem, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  produto: ProdutoEntity
}

// a propriedade orphanedRowAction é para informar que, caso um registro nesse campo não tenha um
// relacionamento é para ele ser excluido do banco de dados.
