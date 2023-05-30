-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT NOT NULL,
    "current_team_id" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Constructor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "Constructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Circuit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Circuit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "year" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Race" (
    "id" TEXT NOT NULL,
    "seasonYear" INTEGER NOT NULL,
    "round" INTEGER NOT NULL DEFAULT 0,
    "circuitId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "laps" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "quali_date" DATE NOT NULL,
    "quali_time" TIME NOT NULL,
    "sprint_date" DATE,
    "sprint_time" TIME,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Qualifying" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "lap_time" TIME(6) NOT NULL,
    "raceId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "constructorId" TEXT NOT NULL,

    CONSTRAINT "Qualifying_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaceResult" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "grid_position" INTEGER NOT NULL,
    "dnf" BOOLEAN,
    "end_position" INTEGER NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,
    "laps" INTEGER NOT NULL,
    "time" TIME(6) NOT NULL,
    "fastest_lap" INTEGER NOT NULL,
    "fastest_lap_time" TIME(6) NOT NULL,
    "raceId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "constructorId" TEXT NOT NULL,

    CONSTRAINT "RaceResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SprintResult" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "grid_position" INTEGER NOT NULL,
    "dnf" BOOLEAN,
    "end_position" INTEGER NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,
    "laps" INTEGER NOT NULL,
    "time" TIME(6) NOT NULL,
    "fastest_lap" INTEGER NOT NULL,
    "fastest_lap_time" TIME(6) NOT NULL,
    "raceId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "constructorId" TEXT NOT NULL,

    CONSTRAINT "SprintResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Driver_first_name_last_name_key" ON "Driver"("first_name", "last_name");

-- CreateIndex
CREATE UNIQUE INDEX "Constructor_name_country_key" ON "Constructor"("name", "country");

-- CreateIndex
CREATE UNIQUE INDEX "Circuit_city_state_country_key" ON "Circuit"("city", "state", "country");

-- CreateIndex
CREATE UNIQUE INDEX "Season_year_key" ON "Season"("year");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_current_team_id_fkey" FOREIGN KEY ("current_team_id") REFERENCES "Constructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_seasonYear_fkey" FOREIGN KEY ("seasonYear") REFERENCES "Season"("year") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_circuitId_fkey" FOREIGN KEY ("circuitId") REFERENCES "Circuit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualifying" ADD CONSTRAINT "Qualifying_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualifying" ADD CONSTRAINT "Qualifying_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Qualifying" ADD CONSTRAINT "Qualifying_constructorId_fkey" FOREIGN KEY ("constructorId") REFERENCES "Constructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceResult" ADD CONSTRAINT "RaceResult_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceResult" ADD CONSTRAINT "RaceResult_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceResult" ADD CONSTRAINT "RaceResult_constructorId_fkey" FOREIGN KEY ("constructorId") REFERENCES "Constructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SprintResult" ADD CONSTRAINT "SprintResult_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SprintResult" ADD CONSTRAINT "SprintResult_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SprintResult" ADD CONSTRAINT "SprintResult_constructorId_fkey" FOREIGN KEY ("constructorId") REFERENCES "Constructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
