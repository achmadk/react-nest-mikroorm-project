import { Entity, PrimaryKey } from "@mikro-orm/postgresql";

@Entity()
export class UserDraft {
  // @ts-ignore
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  uuid!: string
}