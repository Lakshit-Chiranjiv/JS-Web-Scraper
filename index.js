const PORT = 4000;

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://naruto.fandom.com/wiki/Category:Episodes';

axios.get(url)
    .then(res => {
        const site_html = res.data;
        const $ = cheerio.load(site_html);
        const episodes = [];

        //cheerio doesn't support arrow functions
        $('.category-page__member-link',site_html).each(function() {
            const site_base_url = 'https://naruto.fandom.com';
            const epname = $(this).text();
            const eplink = site_base_url + $(this).attr('href');

            const ep_obj = { episode_name : epname , episode_link : eplink };
            // const ep_obj2 = { epname , eplink };
            episodes.push(ep_obj);
        })
        console.log(episodes);
    })
    .catch(err => console.log(err));   

app.listen(PORT, () => console.log(`server running on port ${PORT}`));