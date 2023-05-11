-- AlterTable
CREATE SEQUENCE brands_id_seq;
ALTER TABLE "brands" ALTER COLUMN "id" SET DEFAULT nextval('brands_id_seq');
ALTER SEQUENCE brands_id_seq OWNED BY "brands"."id";

-- AlterTable
CREATE SEQUENCE galeries_id_seq;
ALTER TABLE "galeries" ALTER COLUMN "id" SET DEFAULT nextval('galeries_id_seq');
ALTER SEQUENCE galeries_id_seq OWNED BY "galeries"."id";
