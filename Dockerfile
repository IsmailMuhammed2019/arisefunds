FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the static website files to the nginx html directory
COPY . /usr/share/nginx/html/

# Expose port 80 (internal to the container)
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
