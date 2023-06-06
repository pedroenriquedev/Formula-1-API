/*
  Warnings:

  - You are about to drop the column `laps` on the `Race` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Race" DROP COLUMN "laps",
ALTER COLUMN "time" SET DATA TYPE TIME,
ALTER COLUMN "quali_time" SET DATA TYPE TIME,
ALTER COLUMN "sprint_time" SET DATA TYPE TIME;
