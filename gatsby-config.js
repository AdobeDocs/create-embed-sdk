/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    siteTitle: 'Adobe Developers',
    author: process.env.AUTHOR || 'Adobe I/O — Adobe Developers',
    creator: process.env.CREATOR || '@adobedevs',
    siteUrl: process.env.SITE_URL || 'https://developer.adobe.com/',
    baseUrl: process.env.BASEURL || '',
    productionDomain: process.env.PRODUCTION_DOMAIN || 'https://www.adobe.io',
    pageImage: process.env.PAGE_IMAGE || 'dcsdk-main.jpg',
    docs: {
      title: 'Get credentials',
      path: 'https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html'
    },
    pages: [
      {
        title: 'Express Embed SDK',
        description: "Express Embed SDK",
        path: 'express-embed-sdk/'
      },
      {
        title: 'Express Editor',
        description: 'Express Editor',
        path: 'express-editor/',
      },
      {
        title: 'Quick Actions',
        description: "Quick Actions",
        path: 'quick-action/'
      },
      {
        title: 'FAQs',
        description: "FAQ",
        path: '/faq'
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/embed-sdk-services/'
};
