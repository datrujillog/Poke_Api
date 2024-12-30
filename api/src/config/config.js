'use strict';

// import dotenv from 'dotenv';

import 'dotenv/config'


const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    urlMongodb: process.env.DATABASE_URL || 'mongodb://mongodb:27017'

};

export default config;