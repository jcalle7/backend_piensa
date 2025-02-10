/*
  Warnings:

  - Added the required column `totalLiters` to the `datos_sensores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "datos_sensores" ADD COLUMN     "totalLiters" DOUBLE PRECISION NOT NULL DEFAULT 0;
