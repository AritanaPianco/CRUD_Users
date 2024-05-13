import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (table) {
         table.increments('id').primary;
         table.string('name').notNullable();
         table.string('email').notNullable().unique();
         table.string('profissao').notNullable();
         table.string('password').notNullable();
         table.timestamps();
       });
 }
 
 
 export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
 }

