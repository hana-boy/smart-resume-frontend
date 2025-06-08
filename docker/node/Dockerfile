# --- Build Stage ---
FROM node:22-alpine3.20 AS builder

WORKDIR /app
COPY ./src .

RUN npm run build

# --- Run Stage ---
FROM node:22-alpine3.20

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]
