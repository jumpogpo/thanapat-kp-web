# ใช้ Bun official image เป็น base image
FROM oven/bun:latest as base

# กำหนด working directory ใน container
WORKDIR /app

# Stage สำหรับ dependencies
FROM base AS deps
# ติดตั้ง dependencies สำหรับ node-gyp (จำเป็นสำหรับบาง packages)
RUN apt-get update -y && apt-get install -y python3 build-essential

# คัดลอกไฟล์ที่เกี่ยวข้องกับ dependencies
COPY package.json bun.lock* ./

# ติดตั้ง dependencies
RUN bun install --frozen-lockfile

# Stage สำหรับ build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# เซ็ต environment variable เป็น production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Build application
RUN bun run build

# Stage สำหรับ production
FROM base AS runner
WORKDIR /app

# เซ็ต environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# สร้าง non-root user เพื่อความปลอดภัย
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# คัดลอกไฟล์ที่จำเป็น
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# เปิด port ที่ต้องการใช้
EXPOSE 3000

# ตั้งค่า environment variable สำหรับ host
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# เริ่มต้น application ด้วย Bun
CMD ["bun", "server.js"] 