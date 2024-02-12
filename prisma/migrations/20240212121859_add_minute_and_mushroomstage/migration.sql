/*
  Warnings:

  - Added the required column `minute` to the `TemperatureHumidity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mushroomStage` to the `TemperatureHumidity` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MushroomStage" AS ENUM ('INOCULATION', 'COLONIZATION', 'FRUITING', 'HARVESTING');

-- AlterTable
ALTER TABLE "TemperatureHumidity" ADD COLUMN     "minute" INTEGER NOT NULL,
ADD COLUMN     "mushroomStage" "MushroomStage" NOT NULL;
