-- CreateTable
CREATE TABLE `TemperatureHumidity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `datetime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `temperature` DOUBLE NOT NULL,
    `humidity` DOUBLE NOT NULL,
    `hourOfDay` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
