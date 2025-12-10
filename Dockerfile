FROM oven/bun:latest AS base

WORKDIR /app

# Dependencies stage
FROM base AS deps

RUN apt-get update -y && \
    apt-get install -y python3 build-essential && \
    rm -rf /var/lib/apt/lists/*

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

# Builder stage
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL} \
    NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

RUN bun run build && \
    if [ -f .next/trace ]; then \
        grep -rlF 'version:"15.5.7"' .next/static/chunks | xargs sed -i 's/version:"15\.5\.7"/version:""/g' && \
    fi

# Runner stage
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["bun", "server.js"]