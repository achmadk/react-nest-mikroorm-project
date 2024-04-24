const { PostgreSqlDriver } = require('@mikro-orm/postgresql')

/**
 * @type {import('@mikro-orm/nestjs').MikroOrmModuleOptions}
 */
const config = {
  entities: ['./dist/backend/entities/*.js'],
  entitiesTs: ['./src/backend/entities/*.ts'],
  dbName: 'linkzasiasubmissionachmadkurnianto',
  password: 'samplepassword',
  user: 'sampleusername',
  timezone: '+07.00',
  driver: PostgreSqlDriver
}

module.exports = config