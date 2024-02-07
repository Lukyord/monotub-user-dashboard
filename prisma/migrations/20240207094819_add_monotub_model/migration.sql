/*
  Warnings:

  - You are about to alter the column `monotubId` on the `temperaturehumidity` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[monotubId,date,hourOfDay]` on the table `TemperatureHumidity` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `TemperatureHumidity_date_hourOfDay_monotubId_key` ON `temperaturehumidity`;

-- AlterTable
ALTER TABLE `temperaturehumidity` MODIFY `monotubId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Monotub` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `TemperatureHumidity_monotubId_date_hourOfDay_key` ON `TemperatureHumidity`(`monotubId`, `date`, `hourOfDay`);

-- AddForeignKey
ALTER TABLE `TemperatureHumidity` ADD CONSTRAINT `TemperatureHumidity_monotubId_fkey` FOREIGN KEY (`monotubId`) REFERENCES `Monotub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
