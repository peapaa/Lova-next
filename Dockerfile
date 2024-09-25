# Bước 1: Build image  
FROM node:18-alpine AS builder  

# Thiết lập thư mục làm việc  
WORKDIR /app  

# Sao chép package.json và cài đặt dependencies  
COPY package*.json ./  
RUN npm install --frozen-lockfile  

# Sao chép mã nguồn vào container  
COPY . .

# Build ứng dụng Next.js (với src/app structure)  
RUN npm run build  

# Bước 2: Chạy ứng dụng  
FROM node:18-alpine AS runner  
WORKDIR /app  

# Sao chép các tệp cần thiết từ quá trình build  
COPY --from=builder /app/ ./  

# Khởi động ứng dụng Next.js  
EXPOSE 3000  
CMD ["npm", "run", "start"]