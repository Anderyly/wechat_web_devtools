'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a,b,d){return new Promise((f)=>{a({type:h.SIMULATOR_SET_AUTHORIZE_CONFIRM,data:{show:!0,scopeList:d.scopeList,imageUrl:d.imageUrl,appName:d.appName,callback:async(a,d)=>{a=a&&d[0].checked;let{body:g}=await c({url:`${e.jsOperateWXDATAURL}`,method:'post',body:JSON.stringify({data:JSON.stringify(b.args.data||{}),grant_scope:d[0].scope,opt:a?1:2}),needToken:1,needAppID:1});return a?f({errMsg:`${b.api}:ok`,data:JSON.parse(g.data)}):f({errMsg:`${b.api}:fail auth deny`})}}})})}async function b(a,b,d){return new Promise((f)=>{a({type:h.SIMULATOR_SET_AUTHORIZE_CONFIRM,data:_extends({},d,{show:!0,callback:async(a,d)=>{let g=[];d.forEach((a)=>{!a.checked||g.push(a.scope)});let{body:h}=await c({url:`${e.jsAuthorizeConfirmURL}`,method:'post',body:JSON.stringify({scope:g,opt:a?1:2}),needToken:1,needAppID:1});return h.baseresponse&&0===h.baseresponse.errcode?void f({errMsg:`${b.api}:ok`}):void f({errMsg:`${b.api}:fail`})}})})})}const c=require('./15ba1827c7f6564a45df6bd44da3a977.js'),d=require('./3bfffbe88b3d923921f851c0697974fe.js'),e=require('./f171257bbcaef547a3cf27266ccb0db2.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),h=require('./0634ee2ebd3e560d9d4804ecc960160f.js');module.exports={login:async function(a,b){let{body:d}=await c({url:`${e.jsLoginURL}`,method:'post',body:JSON.stringify({scope:['snsapi_base']}),needToken:1,needAppID:1});return{errMsg:`${b.api}:ok`,code:d.code}},refreshSession:async function(a,b){let{body:d}=await c({url:`${e.jsRefreshSessionURL}`,method:'post',needToken:1,needAppID:1});return{errMsg:`${b.api}:ok`,expireIn:d.session_expire_in,err_code:d.baseresponse.errcode}},operateWXData:async function(b,d){let{body:h}=await c({url:`${e.jsOperateWXDATAURL}`,method:'post',body:JSON.stringify({data:JSON.stringify(d.args.data||{})}),needToken:1,needAppID:1,needCheckErrCode:-1}),i=h.baseresponse;if(i){let c=h.baseresponse.errcode;if(0==c)return{errMsg:`${d.api}:ok`,data:JSON.parse(h.data)};if(c==g.NEED_CONFORM)return await a(b,d,{imageUrl:h.appicon_url,appName:h.appname,scopeList:[h.scope]});let e=f.parseCgiErrorCode(c,i.errmsg);return{errMsg:`${d.api}:fail ${e}`}}},authorize:async function(a,d){let{body:h}=await c({url:`${e.jsAuthorizeURL}`,method:'post',body:JSON.stringify({scope:d.args.scope||[]}),needCheckErrCode:-1,needToken:1,needAppID:1}),i=h.baseresponse;if(i){let c=i.errcode;if(0==c)return{errMsg:`${d.api}:ok`,body:h};if(c==g.NEED_CONFORM)return await b(a,d,{imageUrl:h.appicon_url,appName:h.appname,scopeList:h.scope_list});let e=f.parseCgiErrorCode(c,i.errmsg);return{errMsg:`${d.api}:fail ${e}`}}return{errMsg:`${d.api}:fail system error`}},openWeRunSetting:async function(a,b){let{body:f}=await c({url:`${e.checkWeRunState}`,method:'post',body:JSON.stringify({appid:d.getProjectAppID()}),needToken:1,needAppID:1}),g=f.state,i=f.wording||'\u7528\u6237\u672A\u5F00\u542F\u5FAE\u4FE1\u8FD0\u52A8\uFF0C\u8BF7\u5728\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u5F00\u542F';return 1==g?{errMsg:`${b.api}:ok`}:(a({type:h.SIMULATOR_SET_CONFIRM,data:{show:!0,content:content,showCancel:!1,confirmText:'\u5173\u95ED'}}),{errMsg:`${b.api}:fail ${i}`})},chooseInvoiceTitle:async function(a,b){return{errMsg:`${b.api}:ok`,invoiceTitleInfo:JSON.stringify({type:0,title:'\u5E7F\u5DDE\u817E\u8BAF\u79D1\u6280\u6709\u9650\u516C\u53F8',taxNumber:'91440101327598294H',companyAddress:'\u5E7F\u5DDE\u5E02\u6D77\u73E0\u533A\u65B0\u6E2F\u4E2D\u8DEF397\u53F7\u81EA\u7F1672\u53F7(\u5546\u4E1A\u8857F5-1)',telephone:'020-81167888',bankName:'\u62DB\u5546\u94F6\u884C\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u5E7F\u5DDE\u5E02\u4F53\u80B2\u4E1C\u8DEF\u652F\u884C',bankAccount:'1209 0928 2210 301'})}}}}(require('lazyload'),require);