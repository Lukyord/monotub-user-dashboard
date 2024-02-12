-- CreateTable
CREATE TABLE "Monotub" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userIDs" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Monotub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemperatureHumidity" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "hourOfDay" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "monotubId" TEXT NOT NULL,

    CONSTRAINT "TemperatureHumidity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TemperatureHumidity_monotubId_date_hourOfDay_key" ON "TemperatureHumidity"("monotubId", "date", "hourOfDay");

-- AddForeignKey
ALTER TABLE "TemperatureHumidity" ADD CONSTRAINT "TemperatureHumidity_monotubId_fkey" FOREIGN KEY ("monotubId") REFERENCES "Monotub"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
