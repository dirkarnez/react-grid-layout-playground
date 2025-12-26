@echo off

set PATH=^
%USERPROFILE%\Downloads\node-v24.11.0-win-x64\node-v24.11.0-win-x64;


npm i --force &&^
npm install --force @swc/core -D &&^
npx webpack --config webpack-examples.config.js


@REM  &&^
@REM npm run-script build-example