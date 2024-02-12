/*
  Warnings:

  - Changed the type of `mushroomStage` on the `TemperatureHumidity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TemperatureHumidity" DROP COLUMN "mushroomStage",
ADD COLUMN     "mushroomStage" TEXT NOT NULL;

-- DropEnum
DROP TYPE "MushroomStage";
