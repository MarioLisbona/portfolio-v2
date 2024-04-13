This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Find IP address: `ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'`

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
ENV PORT 3000

# Expose the port that the application will run on
EXPOSE 3000

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
docker run -d -p 3000:3000 mariolisbona/portfolio-v2
```

A container hash id will be output to the temrinal. for example `b102339579a505fec3a5c2ac6d0f55fc744c3d6a8b494dd371a797d415034b40`

You can use this hash to view the container logs

```bash
docker logs b102339579a505fec3a5c2ac6d0f55fc744c3d6a8b494dd371a797d415034b40
```

Open `url: http://localhost:3000` to view the application locally

## Deploying the application to an AWS EC2 instance using dockerhub

1. Push the image to dockerbub

Login to dockerhub and push the image to your account

```bash
docker login
docker push mariolisbona/portfolio-v2
```

1. Create an AWS EC2 instance with a key pair
2. Use Ubuntu as the OS
3. Download the key pair and change the permissions to read, write, and execute for this user only

locate the directory of the key pari file `.pem` and change the permissions

```bash
chmod 700 <filename>
```

4. ssh into the EC2 instance

```bash
ssh -i path/to/key-pair-file.pem ubuntu@<EC2 instance public ip address>
```

5. Update the instance, install docker and enable it

```bash
sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
```

5. pull the image from dockerhub

```bash
sudo docker pull mariolisbona/portfolio-v2
```

6. Run the container on your EC2 instance

```bash
sudo docker run -d -p 3000:3000 mariolisbona/portfolio-v2
```

A container hash id will be output to the temrinal. for example `b102339579a505fec3a5c2ac6d0f55fc744c3d6a8b494dd371a797d415034b40`

You can use this hash to view the container logs

```bash
docker logs b102339579a505fec3a5c2ac6d0f55fc744c3d6a8b494dd371a797d415034b40
```

Open you public IP address shown on your aws ec2 instnace dashboard. This will be a `https://` address. You will need it to be `http://` as SSL is not set up yet.

7. Install nginx

```bash
sudo apt install nginx
```

You should see the `Welcome to Nginx` page now when you visit `http://<you-public-ip>`. This means the nginx server is running but still needs to be configured.

8. Configure the nginx reverse proxy

First you will need to edit the configuration file

```bash
sudo nano /etc/nginx/sites-available/default
```

Your server block should be as follows:

```bash
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/html;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name _;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection ‘upgrade’;
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
      }
```

In the location, you just set up your reverse proxy to ensure that when you visit port 80, it loads your application running on port 3000.

In addition, you can add your domain name to the `server_name` to set what NGINX should listen for alongside your port settings. Update the `server_name` property

```bash
server_name codamarieart.com www.codamarieart.com;
```

save the config file by holding `ctl-o` then hit `enter`. hold `ctl-x` to exit.

9. Test the NGINX configuration and restart the NGINX service

```bash
sudo nginx -t
```

You should see the following output:

```bash
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Restart the service

```bash
sudo service nginx restart
```

There will be no output from the command line.

Navigate to `http://<you-public-ip>` and you should see the application running.

10. Setting up SSL certificate using LetsEncrypt

Install certbot and needed packages

```bash
sudo apt install certbot python3-certbot-nginx
```

Run certbot on the domains for this application

```bash
sudo certbot --nginx -d codamarieart.com -d www.codamarieartlcom
```

The SSL certificate has been generated and succefully deployed. You should be able to visit `www.codamarieartlcom` or `codamarieart.com` and see the deployed application.
