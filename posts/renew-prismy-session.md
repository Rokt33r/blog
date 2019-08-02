---
icon: 🍪
title: Renew prismy session
date: 2019-07-23
tags: [prismy, cookie, session, jwt]
category: dev-note
---

The current prerelease version(v0.0.1-2) of prismy-session is working like
express-session. It means, cookie session should be presented as a separated
module like `prismy-cookie-session`. But I don't like this way. It caused
modules using session should take care all of cases. So I want to provide some
generalized api from prismy-session. So the other modules don't need to care too
much.

## Usage scenario

Let's think about the below scenarios in this article. I think most of issues of
other scenarios are also covered by them. Let's see.

1. Use Redis
2. Use Cookie only
3. Use JWT Cookie
4. Without Cookie?(Optional)

Also for each scenario, they should

1. Retreive sesion data.
2. Update session data.(and extend expiration time)
3. Touch session.(Extend expiration time without updating any data)
4. Destroy session.
5. Regenerate session.(Destory session and update session data)

### Use Redis

- Session id is stored in Cookie and it should be signed.
- Session id should be considered as null if its signature is invalid.
- Session data is stored in Redis.
- TTL(Time to live) should be set to both Cookie and Redis.

#### Retreive session data

1. Get session id from cookie
  - If it does not exist, return null and don't do anything below.
2. Get session data from Redis store with the session id

#### Update session data

If new session data is null, it means destorying session.

Else ...

1. Get session id
  - If it does not exist, generate and set a new session id.
2. Store session data to Redis store for the session id.

#### Touch session

1. Get session id from cookie
  - If it does not exist, don't do anything.
2. Update expiration date of session data in Redis store for the id.
3. Set session id with renewed expiration date.

#### Destroy session

1. Get session id
  - If it does not exist, don't do anything below.
2. Delete session data in Redis store for the id.
3. Reset session id in Cookie.

#### Regenerate session

It is almost same to updating session data. The only difference is deleting previous session data from db.(Redis)

1. Clean up previous session data
  - Get session id.
    - If session id does not exist, skip this step.
  - Delete session data in Redis store for the id.
3. Set new session id to Cookie.
4. Set new session data to Redis store.

### Use Cookie only

- Session data will be stored directly into Cookie. So session id won't be needed.
- Session data should be signed.
- Session data should be considered as null if its signature is invalid.

#### Retreive session data

1. Get session data from cookie.

#### Update session data

1. Set new session data to Cookie.

#### Touch session

1. Update expiration date of Cookie.(Set same value again)

#### Destroy session

1. Set new session id to Cookie.

#### Regenerate session

Since we don't use session id here, it is same to update session data.

### Use JWT Cookie

- Most of things are same to the case, *Use Cookie only*.
- Cookie value should be updated when touching because JWT can also persist expiration date. But this can be optional.

#### Retreive session data

1. Get session data from cookie.
  - If jwt is invalid,

#### Update session data

1. Set new session data to Cookie.

#### Touch session

1. Update expiration date of Cookie.(Set same value again)

#### Destroy session

1. Set new session id to Cookie.

#### Regenerate session

Since we don't use session id here, it is same to update session data.

### Without Cookie

If we expose whole context to internal store, it could fetch session id from other place than cookies like `Authorization: Bearer ****` header.

## Define roles

`prismy-session` should expose session management apis. How actually session is stored and managed is defined as a strategy, `prismy-session-strategy-*`.

### Conclusions

- `prismy-session` : Abstract session api which requiring strategy.
- `prismy-session-strategy-cookie`
- `prismy-session-strategy-jwt-cookie`
- `prismy-session-strategy-external-store`
- `prismy-sesison-external-store-redis`
