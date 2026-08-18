import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const documents = sqliteTable("documents", {
    id: text("id").primaryKey(),

    filename: text("filename").notNull(),
    hash: text("hash").notNull(),
    mimetype: text("mime_type").notNull(),
    size: integer("size").notNull(),
    storagePath: text("storage_path").notNull(),

    status: text("status").notNull(),

    category: text("category"),
    summary: text("summary"),

    createdAt: integer("created_at", { mode : "timestamp"}).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});