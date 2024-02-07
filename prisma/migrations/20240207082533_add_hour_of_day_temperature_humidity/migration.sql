/*
  Warnings:

  - You are about to drop the column `datetime` on the `temperaturehumidity` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[date,hourOfDay]` on the table `TemperatureHumidity` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `TemperatureHumidity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `temperaturehumidity` DROP COLUMN `datetime`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `date` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TemperatureHumidity_date_hourOfDay_key` ON `TemperatureHumidity`(`date`, `hourOfDay`);
