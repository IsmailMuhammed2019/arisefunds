FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js to export static files
RUN npm run build

# Production image, copy the exported files and serve them
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the static export directory
COPY --from=builder /app/out ./out

# Install dynamic/static HTTP server tool
RUN npm install -g serve

USER nextjs

EXPOSE 3000

ENV PORT=3000

# Serve static files on port 3000
CMD ["serve", "out", "-l", "3000"]
