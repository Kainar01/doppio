import { BaseEntity } from '@/common/entities/base.entity';
import { TableName } from '@/common/enums/table';
import { DepotEntity } from '@/modules/depot/entities/depot.entity';
import { Check, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import type { Route } from '../interfaces/route.interface';

@Entity(TableName.ROUTE)
@Check('"departureDepotId" <> "destinationDepotId"')
export class RouteEntity extends BaseEntity implements Route {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  routeId!: number;

  @Column('int')
  departureDepotId!: number;

  @Column('int')
  destinationDepotId!: number;

  @Column('varchar')
  name!: string;

  @Column('decimal', { comment: 'Fee per kg in percentage' })
  fee!: number;

  @Column('int', { nullable: true })
  estimatedDeliveryDays!: number | null;

  @Column('text', { nullable: true })
  description!: string | null;

  @ManyToOne(() => DepotEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'departureDepotId' })
  departureDepot?: DepotEntity;

  @ManyToOne(() => DepotEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'destinationDepotId' })
  destinationDepot?: DepotEntity;
}