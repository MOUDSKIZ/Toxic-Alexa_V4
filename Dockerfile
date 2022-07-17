FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TURBOHYPER/Toxic-Alexa_V4  /TURBOHYPER/Toxic-Alexa_V4

WORKDIR /TURBOHYPER/Toxic-Alexa_V4

ENV TZ=Africa/Harare

RUN npm install

RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
