(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c="/assets/dog-VLaCEsMH.webp";function l(){const r=document.querySelector("canvas"),o=r==null?void 0:r.getContext("2d"),i=new Image;if(i.src=c,!r||!o)throw new Error("Canvas error...");o.fillStyle="red",o.fillRect(0,0,r.width,r.height),i.onload=()=>{o.drawImage(i,0,0,r.width,r.height)}}l();
