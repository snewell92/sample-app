FROM node:18-alpine

WORKDIR app

COPY dist/ .
COPY package.json .
COPY node_modules/ node_modules/

ENV PORT=80

CMD ["node", "index.js"]
