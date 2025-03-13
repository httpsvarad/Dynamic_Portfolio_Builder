// import { relations } from "drizzle-orm";

// const { pgTable, serial, varchar, text } = require("drizzle-orm/pg-core");

// export const userInfo = pgTable('userInfo', {
//     id: serial('id').primaryKey(),
//     name: varchar('name').notNull(),
//     email: varchar('email').notNull(),
//     username: varchar('username'),
//     bio: text('bio'),
//     linkedin: varchar('linkedin'),
//     github: varchar('github')
// });

// export const project = pgTable('project', {
//     id: serial('id').primaryKey(),
//     name: varchar('name'),
//     desc: text('desc'),
//     url: varchar('url').notNull(),
//     emailref: varchar('emailref')
// })

// export const userProjectRelation = relations(userInfo, ({ many }) => (
//     {
//        project: many(project)
//     }
// ))

// export const postRelation=relations(project, ({one})=>(
//     {
//         user:one(userInfo, {fields:[project.emailref], references:[userInfo.email]})
//     }
// ))



import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar, text, integer } from 'drizzle-orm/pg-core';


export const userInfo = pgTable('userInfo', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    username: varchar('username'),
    bio: text('bio'),
    linkedin: varchar('linkedin'),
    github: varchar('github'),
    theme: varchar('theme').default('light'),
    imageurl: varchar('imageurl'),
    resume: varchar('resume'),
    profiledesc: text('profiledesc'),

});

export const project = pgTable('project', {
    id: serial('id').primaryKey(),
    name: varchar('name'),
    tech: varchar('tech'),
    label: varchar('label'),
    desc: text('desc'),
    url: varchar('url').notNull(),
    emailref: varchar('emailref'),
    userref:integer('userref').references(()=>userInfo?.id)
});

export const userProjectRelation = relations(userInfo, ({ many }) => ({
    project: many(project)
}));

export const postRelation = relations(project, ({ one }) => ({
    user: one(userInfo, { fields: [project.userref], references: [userInfo.id] })
}));
