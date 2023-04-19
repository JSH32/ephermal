import { Embedded, Entity, Property } from '@mikro-orm/core';
import { ActiasBaseEntity } from './BaseEntity';
import { UserAuthMethod } from './UserAuthMethod';

/**
 * Users table, stores simple information about a user account.
 */
@Entity()
export class Users extends ActiasBaseEntity {
  @Property({ length: 320, unique: true })
  email!: string;

  @Property({ length: 36, unique: true })
  username!: string;

  @Property({ default: false })
  admin!: boolean;

  @Embedded()
  authMethods: UserAuthMethod[] = [];

  constructor(data: Partial<Users>) {
    super();
    Object.assign(this, data);
  }
}
