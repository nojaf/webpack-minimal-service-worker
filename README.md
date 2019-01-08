# webpack with service worker bundle.

## Build

> yarn

> yarn webpack -p

## Run

> yarn webpack-dev-server

## Problem

The registration of the SW in Chrome shows an error somewhere arround `self["webpackHotUpdate"]`. It is sometimes undefined.