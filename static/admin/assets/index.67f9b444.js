import{e as s,j as r,T as a,d as l,R as u,a as f}from"./vendor.a4f8aec3.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};p();function m(){s.exports.setEditing(!0);const n="https://content.tinajs.io/content/eb6f1d9a-c35d-40b3-8488-d39b4bf7d5fb/github/dev";return r(s.exports.TinaEditProvider,{editMode:r(a,{apiURL:n,children:r(l.exports.TinaAdmin,{})}),children:r("div",{children:"Need to be in edit mode!"})})}u.render(r(f.StrictMode,{children:r(m,{})}),document.getElementById("root"));
