# Reach Web Service

It's like Nginx merged with Deno/NodeJS, built in database, logging/error handling, SMTP client & native module system.  Written in Rust.

This is the next generation javascript runtime, built to take ideas to production in the lowest time possible.

- Built in NoSQL style database with RocksDB or CouchDB backend.
- Supports Virtual Hosts, SSL, LetsEncrypt, file hosting and reverse proxy.
- Supports Actions/Events & Filters like Wordpress (in application API)
- Brute force protection.

**Libraries:**
- Javascript Runtime: Deno
- Database backend: https://crates.io/crates/rocksdb with https://github.com/meilisearch/MeiliSearch
- Database Key & Value storage format: https://crates.io/crates/no_proto
- Web server: https://crates.io/crates/hyper
- Initial Native Modules: RocksDB/MeiliSearch Database, HTTP Client, Docker Manager, File System, Database
- Core functions: 
    - SMTP (has JS API)
    - Logging (has JS API)
    - Lets Encrypt https://crates.io/crates/acme-client
    - Virtual Hosts (JS can request new blank virtual hosts)
    - Every virtual host is expected to have /json endpoint for database requests, a /ws endpont for websockets, every other URL is for rendering.
    - Actions/Events & Filters (JS API)  Should have namespaces for multisite support.

## Motivation / Summary

GCP, AWS, Azure and other services provide a buffet of various services that plug into one another in various, complicated ways.  The end result is you need to be pretty knowledgable and experienced to use and deploy these services correctly, however even experienced engineers seem to get choice paralysis sometimes due to the sheer volume of options.

Besides having so many choices, being vendor locked to a specific cloud provider is a nightmare waiting to happen.

On the other end, self hosting everything on Virtual Machines is tedious work that nobody is willing or sometimes able to do, especially at larger volumes.

Reach Web Service is designed as a all-in-one solution that handles almost all the use case scenarios for small to medium size web services/aplications with no external dependencies.  You should be able to install Reach Web Service on a server, install a Reach App, then go.  The serverless style nature of the apps will allow us to build larger, more scalable versions of Reach Web Service in the near future and deploy the existing apps to larger scale with zero effort.

All of the complex choices you're normally faced with when building a typical web service will have common sense defaults in RWS that fit a majority of small to medium sized deployments.  The database, for example, will not be the most performant, highly scalable, robust database on the market.  But it doesn't need to be for 99.99% of use cases.  It just needs to be complex and useful enough to get people off the ground.

Further, the idea is not to replace complicated planet scale systems like Kubernetes or ScyllaDB, but provide a platform that will allow businesses to have a web service solution that will scale from 0 to medium scale with no effort.  Large scale will continue to be a difficult problem that must be suited to the business and application.

Security should be handled automatically with sane defaults where possible and at the uppermost level of configuration when possible.  For example, LetsEncrypt support will be provided for all virtual hosts from the beginning with auto renewing certificates.

## Project Plan

### 1. RWS Control Panel / Dash Board
### 2. Complete Application API
### 3. Native Modules