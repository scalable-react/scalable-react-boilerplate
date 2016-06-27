// Brilliant network wrapper courteousy of
// https://github.com/pburtchaell/redux-promise-middleware
// Works to create requests to a network resource and wraps the requests in
// A promise.  This works great with redux promise middlewares
// See the actions for post to see it in action located in ../actions/post.js
import request from './request';

/**
 * @function Network
 * @description Factory function to create a object that can send
 * requests to a specific resource on the server.
 * @param {string} resource The resource used for config
 */
 const Network = resource => {
   const buildUrl = ({ id, resource } = {}) => {
     let parameters = [
       'http://localhost:3000',
       'api'
     ];

     if (resource) parameters.concat([resource]);
     if (id) parameters.concat([id]);
     return parameters.join('/');
   };

   // Default option for every request
   const defaultOptions = {
     mode: 'cors',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
   };

   return {

     /**
      * @function post
      * @description Make a POST request.
      * @param {string} path
      * @param {object} body
      * @param {object} options
      * @returns {promise}
      */
     post: (path, body, options = {}) => {
       return request(buildURL(path), Object.assign(
         options,
         defaultOptions,
         {
           method: 'POST',
           body: JSON.stringify(body)
         }
       ));
     },

     /**
      * @function get
      * @description Make a GET request.
      * @param {string} path
      * @param {object} options
      * @returns {promise}
      */
     get: (path, options = {}) => {
       return request(buildUrl(path), Object.assign(
         options,
         defaultOptions,
         { method: 'GET' }
       ));
     },

     /**
      * @function edit
      * @description Make a PUT request.
      * @param {string} path
      * @param {object} body
      * @param {object} options
      * @returns {promise}
      */
     update: (path, body, options = {}) => {
       return request(buildUrl(path), Object.assign(
         options,
         defaultOptions,
         { method: 'PUT' }
       ));
     },

     /**
      * @function delete
      * @description Make a DELETE request.
      * @param {string} path
      * @param {object} options
      * @returns {promise}
      */
     delete: (path, options = {}) => {
       return request(buildUrl(path), Object.assign(
         options,
         defaultOptions,
         { method: 'DELETE' }
       ));
     },

     ping: () => request(buildURL(), { method: 'GET' })
   };
 };

 export default Network;
