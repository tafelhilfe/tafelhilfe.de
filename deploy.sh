#!/bin/bash

export AWS_ACCESS_KEY_ID="AKIATEFDUVES27DR3QM5"
export AWS_SECRET_ACCESS_KEY="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"
export AWS_BUCKET_NAME="dev.tafelhilfe.de"
export AWS_CLOUDFRONT="E2B06ODZ5PK06E"

# Load nvm (node version manager), install node (version in .nvmrc), and npm install packages
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use
# Npm install if not already.
[ ! -d "node_modules" ] && npm install

npm run generate
gulp deploy
