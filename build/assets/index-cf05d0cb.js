import{R as T,j as r,F as b}from"./index-31541b49.js";import{l as c}from"./index-9658cc5f.js";const v=0,B=100,j=({min:a=v,max:s=B,inputValue:l=[],className:o="",trackClassName:d="",thumbClassName:i="",thumbChildren:u="",trackColors:g,trackBackground:k={},...h})=>{const[n,m]=T.useState(l||[]),S=({props:e,isDragged:t})=>r("div",{...e,class:i,children:u}),f=({props:e,children:t})=>r("div",{className:o,style:{...e.style},children:r("div",{ref:e.ref,className:d,style:{background:c.getTrackBackground({values:n,colors:g,min:a,max:s,...k}),alignSelf:"center"},children:t})});return r(b,{children:r(c.Range,{values:n,min:a,max:s,onChange:e=>m(e),renderThumb:S,renderTrack:f,...h})})};export{j as S};
