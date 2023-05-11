#!/usr/bin/env bash
# exit on error
set -o errexit

npm i
npm run build
npx prisma migrate dev