This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Building and running the app locally with Docker

1. Create a docker file:

```bash
# Dockerfile
FROM node:18-alpine
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application for production
RUN npm run build
# Set the environment variable to run the Next.js application in production mode
ENV NODE_ENV production
ENV PORT 80

# Expose the port that the application will run on
EXPOSE 80

# Start the application
CMD ["npm", "start"]
```

2. Create a .Dockerignore file

```bash
# Ignore node_modules directory
node_modules

# Ignore build artifacts
.next

# Ignore development-related files
.DS_Store
.env
npm-debug.log
```

3. Build the image with docker

```bash
docker build -t mariolisbona/portfolio-v2
```

4. Run the container locally

```bash
docker run -d -p 80:80 mariolisbona/portfolio-v2
```

A container hash id will be output to the temrinal. for example `b102339579a505fec3a5c2ac6d0f55fc744c3d6a8b494dd371a797d415034b40`

You can use this hash to view the container logs

```bash
docker logs b102339579a505fec3a5c2ac6d0f55fc744c3d6a8b494dd371a797d415034b40
```

Open `url: http://localhost:80` to view the application locally

## Deploying the application to an AWS EC2 instance using dockerhub

1. Push the image to dockerbub

Login to dockerhub and push the image to your account

```bash
docker login
docker push mariolisbona/portfolio-v2
```

2. Create an AWS EC2 instance with a key pair
3. Download the key pair and change the permissions to read, write, and execute for this user only

locate the directory of the key pari file `.pem` and change the permissions

```bash
chmod 700 <filename>
```

4. ssh into the EC2 instance

```bash
ssh -i path/to/key-pair-file.pem ec2-user@<EC2 instance public ip address>
```

5. Install docker and enable it

```bash
sudo yum install docker
sudo systemctl start docker
sudo systemctl enable docker
```

5. pull the image from dockerhub

```bash
sudo docker pull mariolisbona/portfolio-v2
```

6. Run the container on your EC2 instance

```bash
sudo docker run -d -p 80:80 mariolisbona/portfolio-v2
```

A container hash id will be output to the temrinal. for example `b102339579a505fec3a5c2ac6d0f55fc744c3d6a8b494dd371a797d415034b40`

You can use this hash to view the container logs

```bash
docker logs b102339579a505fec3a5c2ac6d0f55fc744c3d6a8b494dd371a797d415034b40
```

Open you public IP address shown on your aws ec2 instnace dashboard. This will be a `https://` address. You will need it to be `http://` as SSL is not set up yet.
