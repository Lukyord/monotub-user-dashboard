/*
  Warnings:

  - A unique constraint covering the columns `[date,hourOfDay,monotubId]` on the table `TemperatureHumidity` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `monotubId` to the `TemperatureHumidity` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `TemperatureHumidity_date_hourOfDay_key` ON `temperaturehumidity`;

-- AlterTable
ALTER TABLE `temperaturehumidity` ADD COLUMN `monotubId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TemperatureHumidity_date_hourOfDay_monotubId_key` ON `TemperatureHumidity`(`date`, `hourOfDay`, `monotubId`);
