/*
  Warnings:

  - You are about to drop the column `Password` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `Password`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL;