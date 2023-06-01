/*
  Warnings:

  - You are about to drop the column `state` on the `Circuit` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[city,country]` on the table `Circuit` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_current_team_id_fkey";

-- DropIndex
DROP INDEX "Circuit_city_state_country_key";

-- AlterTable
ALTER TABLE "Circuit" DROP COLUMN "state";

-- AlterTable
ALTER TABLE "Driver" ALTER COLUMN "current_team_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Race" ALTER COLUMN "time" SET DATA TYPE TIMETZ,
ALTER COLUMN "quali_time" SET DATA TYPE TIMETZ,
ALTER COLUMN "sprint_time" SET DATA TYPE TIMETZ;

-- CreateIndex
CREATE UNIQUE INDEX "Circuit_city_country_key" ON "Circuit"("city", "country");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_current_team_id_fkey" FOREIGN KEY ("current_team_id") REFERENCES "Constructor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
