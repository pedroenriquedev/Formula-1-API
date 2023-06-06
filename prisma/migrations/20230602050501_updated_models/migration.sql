/*
  Warnings:

  - You are about to drop the column `lap_time` on the `Qualifying` table. All the data in the column will be lost.
  - You are about to drop the column `quali_time` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `sprint_time` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `dnf` on the `RaceResult` table. All the data in the column will be lost.
  - You are about to drop the column `dnf` on the `SprintResult` table. All the data in the column will be lost.
  - Added the required column `q1` to the `Qualifying` table without a default value. This is not possible if the table is not empty.
  - Added the required column `q2` to the `Qualifying` table without a default value. This is not possible if the table is not empty.
  - Added the required column `q3` to the `Qualifying` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fastest_lap_speed` to the `RaceResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_in_milliseconds` to the `RaceResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fastest_lap_speed` to the `SprintResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_in_milliseconds` to the `SprintResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Qualifying" DROP COLUMN "lap_time",
ADD COLUMN     "q1" TEXT NOT NULL,
ADD COLUMN     "q2" TEXT NOT NULL,
ADD COLUMN     "q3" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "quali_time",
DROP COLUMN "sprint_time",
DROP COLUMN "time";

-- AlterTable
ALTER TABLE "RaceResult" DROP COLUMN "dnf",
ADD COLUMN     "fastest_lap_speed" TEXT NOT NULL,
ADD COLUMN     "time_in_milliseconds" TEXT NOT NULL,
ALTER COLUMN "time" SET DATA TYPE TEXT,
ALTER COLUMN "fastest_lap_time" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SprintResult" DROP COLUMN "dnf",
ADD COLUMN     "fastest_lap_speed" TEXT NOT NULL,
ADD COLUMN     "time_in_milliseconds" TEXT NOT NULL,
ALTER COLUMN "time" SET DATA TYPE TEXT,
ALTER COLUMN "fastest_lap_time" SET DATA TYPE TEXT;
