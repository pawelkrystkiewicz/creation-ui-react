# Use the official Playwright image as base
FROM mcr.microsoft.com/playwright:v1.51.1
# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app
# forward port 3100 to 3100
EXPOSE 3100

# install dependencies into temp directory
# this will cache them and speed up future builds
COPY . .
FROM base AS install
RUN bun install --frozen-lockfile

CMD [ "bun", "run", "test:ct"]


