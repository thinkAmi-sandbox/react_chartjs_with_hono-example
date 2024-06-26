/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const StaticpiechartwithpartoflegendmissingLazyImport = createFileRoute(
  '/static_pie_chart_with_part_of_legend_missing',
)()
const StaticpiechartwithhtmllegendonclickLazyImport = createFileRoute(
  '/static_pie_chart_with_html_legend_on_click',
)()
const StaticpiechartwithhtmllegendLazyImport = createFileRoute(
  '/static_pie_chart_with_html_legend',
)()
const DynamicpiechartwithhtmllegendLazyImport = createFileRoute(
  '/dynamic_pie_chart_with_html_legend',
)()
const ChartLazyImport = createFileRoute('/chart')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const StaticpiechartwithpartoflegendmissingLazyRoute =
  StaticpiechartwithpartoflegendmissingLazyImport.update({
    path: '/static_pie_chart_with_part_of_legend_missing',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/static_pie_chart_with_part_of_legend_missing.lazy').then(
      (d) => d.Route,
    ),
  )

const StaticpiechartwithhtmllegendonclickLazyRoute =
  StaticpiechartwithhtmllegendonclickLazyImport.update({
    path: '/static_pie_chart_with_html_legend_on_click',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/static_pie_chart_with_html_legend_on_click.lazy').then(
      (d) => d.Route,
    ),
  )

const StaticpiechartwithhtmllegendLazyRoute =
  StaticpiechartwithhtmllegendLazyImport.update({
    path: '/static_pie_chart_with_html_legend',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/static_pie_chart_with_html_legend.lazy').then(
      (d) => d.Route,
    ),
  )

const DynamicpiechartwithhtmllegendLazyRoute =
  DynamicpiechartwithhtmllegendLazyImport.update({
    path: '/dynamic_pie_chart_with_html_legend',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/dynamic_pie_chart_with_html_legend.lazy').then(
      (d) => d.Route,
    ),
  )

const ChartLazyRoute = ChartLazyImport.update({
  path: '/chart',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/chart.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/chart': {
      preLoaderRoute: typeof ChartLazyImport
      parentRoute: typeof rootRoute
    }
    '/dynamic_pie_chart_with_html_legend': {
      preLoaderRoute: typeof DynamicpiechartwithhtmllegendLazyImport
      parentRoute: typeof rootRoute
    }
    '/static_pie_chart_with_html_legend': {
      preLoaderRoute: typeof StaticpiechartwithhtmllegendLazyImport
      parentRoute: typeof rootRoute
    }
    '/static_pie_chart_with_html_legend_on_click': {
      preLoaderRoute: typeof StaticpiechartwithhtmllegendonclickLazyImport
      parentRoute: typeof rootRoute
    }
    '/static_pie_chart_with_part_of_legend_missing': {
      preLoaderRoute: typeof StaticpiechartwithpartoflegendmissingLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  ChartLazyRoute,
  DynamicpiechartwithhtmllegendLazyRoute,
  StaticpiechartwithhtmllegendLazyRoute,
  StaticpiechartwithhtmllegendonclickLazyRoute,
  StaticpiechartwithpartoflegendmissingLazyRoute,
])

/* prettier-ignore-end */
