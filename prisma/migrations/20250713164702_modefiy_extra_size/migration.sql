/*
  Warnings:

  - The values [Fruity] on the enum `ExtraIngredients` will be removed. If these variants are still used in the database, this will fail.
  - The values [MEDUIM] on the enum `ProductSizes` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- AlterEnum
BEGIN;
CREATE TYPE "ExtraIngredients_new" AS ENUM ('CHEESE', 'BACON', 'TOMATO', 'ONION', 'PEPPER');
ALTER TABLE "Extra" ALTER COLUMN "name" TYPE "ExtraIngredients_new" USING ("name"::text::"ExtraIngredients_new");
ALTER TYPE "ExtraIngredients" RENAME TO "ExtraIngredients_old";
ALTER TYPE "ExtraIngredients_new" RENAME TO "ExtraIngredients";
DROP TYPE "ExtraIngredients_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ProductSizes_new" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');
ALTER TABLE "Size" ALTER COLUMN "name" TYPE "ProductSizes_new" USING ("name"::text::"ProductSizes_new");
ALTER TYPE "ProductSizes" RENAME TO "ProductSizes_old";
ALTER TYPE "ProductSizes_new" RENAME TO "ProductSizes";
DROP TYPE "ProductSizes_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
