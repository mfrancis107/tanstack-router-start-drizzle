/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as LayoutImport } from './routes/_layout'
import { Route as DeferredImport } from './routes/deferred'
import { Route as PostsImport } from './routes/posts'
import { Route as RedirectImport } from './routes/redirect'
import { Route as LayoutLayout2Import } from './routes/_layout/_layout-2'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as PostsIndexImport } from './routes/posts.index'
import { Route as LayoutLayout2LayoutAImport } from './routes/_layout/_layout-2/layout-a'
import { Route as LayoutLayout2LayoutBImport } from './routes/_layout/_layout-2/layout-b'
import { Route as PostsPostIdDeepImport } from './routes/posts_.$postId.deep'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const DeferredRoute = DeferredImport.update({
  path: '/deferred',
  getParentRoute: () => rootRoute,
} as any)

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const RedirectRoute = RedirectImport.update({
  path: '/redirect',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLayout2Route = LayoutLayout2Import.update({
  id: '/_layout-2',
  getParentRoute: () => LayoutRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const LayoutLayout2LayoutARoute = LayoutLayout2LayoutAImport.update({
  path: '/layout-a',
  getParentRoute: () => LayoutLayout2Route,
} as any)

const LayoutLayout2LayoutBRoute = LayoutLayout2LayoutBImport.update({
  path: '/layout-b',
  getParentRoute: () => LayoutLayout2Route,
} as any)

const PostsPostIdDeepRoute = PostsPostIdDeepImport.update({
  path: '/posts/$postId/deep',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/deferred': {
      id: '/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof DeferredImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/redirect': {
      id: '/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectImport
      parentRoute: typeof rootRoute
    }
    '/_layout/_layout-2': {
      id: '/_layout/_layout-2'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutLayout2Import
      parentRoute: typeof LayoutImport
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
    '/_layout/_layout-2/layout-a': {
      id: '/_layout/_layout-2/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayout2LayoutAImport
      parentRoute: typeof LayoutLayout2Import
    }
    '/_layout/_layout-2/layout-b': {
      id: '/_layout/_layout-2/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayout2LayoutBImport
      parentRoute: typeof LayoutLayout2Import
    }
    '/posts/$postId/deep': {
      id: '/posts/$postId/deep'
      path: '/posts/$postId/deep'
      fullPath: '/posts/$postId/deep'
      preLoaderRoute: typeof PostsPostIdDeepImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LayoutRoute: LayoutRoute.addChildren({
    LayoutLayout2Route: LayoutLayout2Route.addChildren({
      LayoutLayout2LayoutARoute,
      LayoutLayout2LayoutBRoute,
    }),
  }),
  DeferredRoute,
  PostsRoute: PostsRoute.addChildren({ PostsPostIdRoute, PostsIndexRoute }),
  RedirectRoute,
  PostsPostIdDeepRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/deferred",
        "/posts",
        "/redirect",
        "/posts/$postId/deep"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/_layout-2"
      ]
    },
    "/deferred": {
      "filePath": "deferred.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/redirect": {
      "filePath": "redirect.tsx"
    },
    "/_layout/_layout-2": {
      "filePath": "_layout/_layout-2.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/_layout-2/layout-a",
        "/_layout/_layout-2/layout-b"
      ]
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx",
      "parent": "/posts"
    },
    "/posts/": {
      "filePath": "posts.index.tsx",
      "parent": "/posts"
    },
    "/_layout/_layout-2/layout-a": {
      "filePath": "_layout/_layout-2/layout-a.tsx",
      "parent": "/_layout/_layout-2"
    },
    "/_layout/_layout-2/layout-b": {
      "filePath": "_layout/_layout-2/layout-b.tsx",
      "parent": "/_layout/_layout-2"
    },
    "/posts/$postId/deep": {
      "filePath": "posts_.$postId.deep.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
