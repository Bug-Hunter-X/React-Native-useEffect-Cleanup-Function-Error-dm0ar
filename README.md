# React Native useEffect Cleanup Function Error

This repository demonstrates a common error in React Native applications related to the `useEffect` hook's cleanup function. The error arises when attempting to access component state variables after the component has unmounted, resulting in unexpected behavior or crashes.

## The Problem

The provided `bug.js` file shows an example where a `setInterval` is used within `useEffect` to update a counter. The cleanup function tries to log the `count` variable, which leads to an error after the component unmounts because `count` no longer exists in memory.

## The Solution

The `bugSolution.js` file provides a solution. To avoid this error, ensure that any references to component state within the cleanup function are either removed or handled appropriately. In this case, logging the count is simply removed, so the cleanup function no longer accesses the state.