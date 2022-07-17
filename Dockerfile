FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXICTURBO/Toxic-Alexa_V4  /TOXICTURBO/Toxic-Alexa_V4

WORKDIR /TOXICTURBO/Toxic-Alexa_V4

ENV TZ=Africa/Harare

RUN npm install

RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
