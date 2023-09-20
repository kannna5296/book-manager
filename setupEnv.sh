#!/bin/bash

# Domain
echo "VITE_API_BASE_PATH=$VITE_API_BASE_PATH" >> .env.development

# Firebase
echo "VITE_FB_API_KEY=$VITE_FB_API_KEY" >> .env.development
echo "VITE_FB_AUTH_DOMAIN=$VITE_FB_AUTH_DOMAIN" >> .env.development
echo "VITE_FB_DATABASE_URL=$VITE_FB_DATABASE_URL" >> .env.development
echo "VITE_FB_PROJECT_ID=$VITE_FB_PROJECT_ID" >> .env.development
echo "VITE_FB_STORAGE_BUCKET=$VITE_FB_STORAGE_BUCKET" >> .env.development
echo "VITE_FB_MESSAGING_SENDER_ID=$VITE_FB_MESSAGING_SENDER_ID" >> .env.development
echo "VITE_FB_APP_ID=$VITE_FB_APP_ID" >> .env.development