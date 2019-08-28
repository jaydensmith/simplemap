var EtherMaps=function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],p=0,h=[];p<i.length;p++)s=i[p],n[s]&&h.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonpEtherMaps"]=window["webpackJsonpEtherMaps"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;return o.push([0,"chunk-vendors"]),a()}({0:function(e,t,a){e.exports=a("56d7")},"1c37":function(e,t,a){"use strict";var r=a("bfca"),n=a.n(r);t["default"]=n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.config.hideSearch?e._e():a("Search",{attrs:{service:e.config.geoService,"default-value":e.val.address,geo:e.geo},on:{selected:e.onSearchSelected}}),e.config.hideMap?e._e():a("Map",{attrs:{tiles:e.config.mapTiles,token:e.config.mapToken,latLng:{lat:e.val.lat,lng:e.val.lng},zoom:+e.val.zoom,"min-zoom":e.config.minZoom,"max-zoom":e.config.maxZoom},on:{change:e.onMapChange,zoom:e.onZoom}}),e.config.isSettings?e._e():a("Address",{attrs:{hide:e.config.hideAddress,showLatLng:e.config.showLatLng,value:e.val},on:{changed:e.onPartChange,clear:e.onClear}}),e.config.isSettings?e._e():a("input",{attrs:{type:"hidden",name:e.config.name},domProps:{value:JSON.stringify(e.value)}}),e.config.isSettings?a("Fragment",[a("input",{attrs:{type:"hidden",name:e.config.name.replace("__settings__","lat")},domProps:{value:e.value.lat}}),a("input",{attrs:{type:"hidden",name:e.config.name.replace("__settings__","lng")},domProps:{value:e.value.lng}}),a("input",{attrs:{type:"hidden",name:e.config.name.replace("__settings__","zoom")},domProps:{value:e.value.zoom}})]):e._e()],1)},n=[],o=a("db0c"),s=a.n(o),i=(a("7f7f"),a("96cf"),a("3b8d")),c=a("cebc"),l=a("d225"),u=a("b0b4"),p=a("308d"),h=a("6bb5"),b=a("013f"),d=a("4e2b"),m=a("bd86"),g=a("60a3"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vue-autosuggest",{ref:"self",attrs:{suggestions:e.suggestions,"render-suggestion":e.renderSuggestion,"get-suggestion-value":e.getSuggestionValue,"input-props":e.inputProps},on:{selected:e.onSelected}})},v=[],j=(a("386d"),a("2831"));function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return window.Craft.t("simplemap",e,t)}var O={Nominatim:"nominatim",Mapbox:"mapbox",GoogleMaps:"google",AppleMapKit:"apple",Here:"here"},_=O,w=a("795b"),k=a.n(w),x=(a("6b54"),a("a745")),S=a.n(x),M=(a("28a5"),function(){function e(t,a){switch(Object(l["a"])(this,e),Object(m["a"])(this,"number",""),Object(m["a"])(this,"address",""),Object(m["a"])(this,"city",""),Object(m["a"])(this,"postcode",""),Object(m["a"])(this,"county",""),Object(m["a"])(this,"state",""),Object(m["a"])(this,"country",""),a){case _.Nominatim:this._nominatim(t);break;case _.Mapbox:this._mapbox(t);break;case _.GoogleMaps:this._google(t);break;case _.Here:this._here(t);break;default:return this}}return Object(u["a"])(e,[{key:"_nominatim",value:function(e){this.number=this._join([e.house_number,e.address29,-1===["pedestrian","footway","path","road","neighbourhood","suburb","village","town","city_district","city"].indexOf(e.type)?e[e.type]:null]),this.address=this._join([e.pedestrian,e.footway,e.path,e.road,e.neighbourhood,e.suburb]),this.city=this._join([e.village,e.town,e.city_district,e.city]),this.postcode=e.postcode,this.county=e.county,this.state=this._join([e.state_district,e.state]),this.country=e.country}},{key:"_mapbox",value:function(e){e=e.context.reduce(function(e,t){var a=t.id.split(".")[0];return e[a]=t.text,e},Object(m["a"])({number:e.address},e.place_type[0],e.text)),this.number=e.number,this.address=e.address,this.city=e.place,this.postcode=e.postcode,this.county=e.district,this.state=e.region,this.country=e.country}},{key:"_google",value:function(e){S()(e)&&(e=e.reduce(function(e,t){var a=t.types[0];return e[a]=t.long_name,e},{})),this.number=this._join([e.subpremise,e.premise,e.street_number]),this.address=this._join([e.route,e.neighborhood,e.sublocality_level_5,e.sublocality_level_4,e.sublocality_level_3,e.sublocality_level_2,e.sublocality_level_1,e.sublocality]),this.city=this._join([e.postal_town,e.locality]),this.postcode=e.postal_code||e.postal_code_prefix,this.county=e.administrative_area_level_2,this.state=e.administrative_area_level_1,this.country=e.country}},{key:"_here",value:function(e){e=Object(c["a"])({},e,e.additionalData.reduce(function(e,t){return e[t.key]=t.value,e},{})),delete e.additionalData,this.number=e.houseNumber||"",this.address=this._join([e.street,e.district]),this.city=e.city||"",this.postcode=e.postalCode||"",this.county=e.CountyName||e.county||"",this.state=e.StateName||e.state||"",this.country=e.CountryName||e.country||""}},{key:"_join",value:function(e){return e.filter(Boolean).join(", ")}}],[{key:"from",value:function(t){var a=new e;return a.number=t.number||"",a.address=t.address||"",a.city=t.city||"",a.postcode=t.postcode||"",a.county=t.county||"",a.state=t.state||"",a.country=t.country||"",a}}]),e}()),C=a("a4bb"),L=a.n(C),A=(a("ac6a"),function(e){function t(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l["a"])(this,t),e=Object(p["a"])(this,Object(h["a"])(t).call(this,a,_.GoogleMaps)),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_1",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_2",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_3",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_4",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_5",""),Object(m["a"])(Object(b["a"])(e),"airport",""),Object(m["a"])(Object(b["a"])(e),"bus_station",""),Object(m["a"])(Object(b["a"])(e),"colloquial_area",""),Object(m["a"])(Object(b["a"])(e),"establishment",""),Object(m["a"])(Object(b["a"])(e),"floor",""),Object(m["a"])(Object(b["a"])(e),"intersection",""),Object(m["a"])(Object(b["a"])(e),"locality",""),Object(m["a"])(Object(b["a"])(e),"natural_feature",""),Object(m["a"])(Object(b["a"])(e),"neighborhood",""),Object(m["a"])(Object(b["a"])(e),"park",""),Object(m["a"])(Object(b["a"])(e),"parking",""),Object(m["a"])(Object(b["a"])(e),"point_of_interest",""),Object(m["a"])(Object(b["a"])(e),"political",""),Object(m["a"])(Object(b["a"])(e),"post_box",""),Object(m["a"])(Object(b["a"])(e),"postal_code",""),Object(m["a"])(Object(b["a"])(e),"postal_code_prefix",""),Object(m["a"])(Object(b["a"])(e),"postal_town",""),Object(m["a"])(Object(b["a"])(e),"premise",""),Object(m["a"])(Object(b["a"])(e),"room",""),Object(m["a"])(Object(b["a"])(e),"route",""),Object(m["a"])(Object(b["a"])(e),"street_address",""),Object(m["a"])(Object(b["a"])(e),"street_number",""),Object(m["a"])(Object(b["a"])(e),"sublocality",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_1",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_2",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_3",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_4",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_5",""),Object(m["a"])(Object(b["a"])(e),"subpremise",""),Object(m["a"])(Object(b["a"])(e),"train_station",""),Object(m["a"])(Object(b["a"])(e),"transit_station",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_1_short",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_2_short",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_3_short",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_4_short",""),Object(m["a"])(Object(b["a"])(e),"administrative_area_level_5_short",""),Object(m["a"])(Object(b["a"])(e),"airport_short",""),Object(m["a"])(Object(b["a"])(e),"bus_station_short",""),Object(m["a"])(Object(b["a"])(e),"colloquial_area_short",""),Object(m["a"])(Object(b["a"])(e),"establishment_short",""),Object(m["a"])(Object(b["a"])(e),"floor_short",""),Object(m["a"])(Object(b["a"])(e),"intersection_short",""),Object(m["a"])(Object(b["a"])(e),"locality_short",""),Object(m["a"])(Object(b["a"])(e),"natural_feature_short",""),Object(m["a"])(Object(b["a"])(e),"neighborhood_short",""),Object(m["a"])(Object(b["a"])(e),"park_short",""),Object(m["a"])(Object(b["a"])(e),"parking_short",""),Object(m["a"])(Object(b["a"])(e),"point_of_interest_short",""),Object(m["a"])(Object(b["a"])(e),"political_short",""),Object(m["a"])(Object(b["a"])(e),"post_box_short",""),Object(m["a"])(Object(b["a"])(e),"postal_code_short",""),Object(m["a"])(Object(b["a"])(e),"postal_code_prefix_short",""),Object(m["a"])(Object(b["a"])(e),"postal_town_short",""),Object(m["a"])(Object(b["a"])(e),"premise_short",""),Object(m["a"])(Object(b["a"])(e),"room_short",""),Object(m["a"])(Object(b["a"])(e),"route_short",""),Object(m["a"])(Object(b["a"])(e),"street_address_short",""),Object(m["a"])(Object(b["a"])(e),"street_number_short",""),Object(m["a"])(Object(b["a"])(e),"sublocality_short",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_1_short",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_2_short",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_3_short",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_4_short",""),Object(m["a"])(Object(b["a"])(e),"sublocality_level_5_short",""),Object(m["a"])(Object(b["a"])(e),"subpremise_short",""),Object(m["a"])(Object(b["a"])(e),"train_station_short",""),Object(m["a"])(Object(b["a"])(e),"transit_station_short",""),S()(a)&&(a=a.reduce(function(e,t){var a=t.types[0];return e[a]=t.long_name,e},{})),L()(a).forEach(function(t){e[t]=a[t]}),e}return Object(d["a"])(t,e),t}(M));function I(e,t){if(window.hasOwnProperty(e))t();else var a=setInterval(function(){window.hasOwnProperty(e)&&(t(),clearTimeout(a))})}var P,H,R,N,z,G=function(){function e(t){var a=this,r=t.country,n=t.geoService,o=t.geoToken,s=t.locale;Object(l["a"])(this,e),Object(m["a"])(this,"country",null),Object(m["a"])(this,"service",null),Object(m["a"])(this,"token",null),Object(m["a"])(this,"locale",null),Object(m["a"])(this,"google",{service:null,session:null}),Object(m["a"])(this,"apple",{Search:null}),this.country=r?r.toLowerCase():null,this.service=n,this.token=o,this.locale=s,n===_.GoogleMaps?I("google",function(){return a.initGoogle()}):n===_.AppleMapKit&&I("mapkit",function(){return a.initApple(o)})}return Object(u["a"])(e,[{key:"initGoogle",value:function(){this.google={service:new window.google.maps.places.AutocompleteService,session:new window.google.maps.places.AutocompleteSessionToken,geocoder:new window.google.maps.Geocoder,places:new window.google.maps.places.PlacesService(document.createElement("div"))}}},{key:"initApple",value:function(e){window.mapkit.init({authorizationCallback:function(t){return t(e)}}),this.apple={Search:new window.mapkit.Search,Geocoder:new window.mapkit.Geocoder,Coordinate:window.mapkit.Coordinate}}},{key:"search",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t&&""!==t.trim()){e.next=2;break}return e.abrupt("return",[]);case 2:a=[],e.t0=this.service,e.next=e.t0===_.Nominatim?6:e.t0===_.Mapbox?10:e.t0===_.GoogleMaps?14:e.t0===_.AppleMapKit?18:e.t0===_.Here?22:26;break;case 6:return e.next=8,this.searchNominatim(t);case 8:return a=e.sent,e.abrupt("break",27);case 10:return e.next=12,this.searchMapbox(t);case 12:return a=e.sent,e.abrupt("break",27);case 14:return e.next=16,this.searchGoogle(t);case 16:return a=e.sent,e.abrupt("break",27);case 18:return e.next=20,this.searchApple(t);case 20:return a=e.sent,e.abrupt("break",27);case 22:return e.next=24,this.searchHere(t);case 24:return a=e.sent,e.abrupt("break",27);case 26:throw new Error("Unknown geocoding service: "+this.service);case 27:return e.abrupt("return",a);case 28:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchNominatim",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=new URLSearchParams({q:t,format:"jsonv2",limit:5,addressdetails:1,countrycodes:this.country,"accept-language":this.locale}).toString(),e.next=3,fetch("https://nominatim.openstreetmap.org/search?"+a).then(function(e){return e.json()});case 3:return r=e.sent,e.abrupt("return",r.map(function(e){return{address:e.display_name,lat:e.lat,lng:e.lon,parts:new M(Object(c["a"])({},e.address,{type:e.type}),_.Nominatim)}}));case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchMapbox",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a={types:"address,country,postcode,place,locality,district,neighborhood",limit:5,access_token:this.token,language:this.locale},this.country&&(a.country=this.country),r=new URLSearchParams(a).toString(),e.next=5,fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+t+".json?"+r).then(function(e){return e.json()});case 5:return n=e.sent,e.abrupt("return",n.features.map(function(e){return{address:e.place_name,lat:e.center[1],lng:e.center[0],parts:new M(e,_.Mapbox)}}));case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchGoogle",value:function(e){var t=this;return new k.a(function(a){t.google.service.getPlacePredictions({input:e,sessionToken:t.google.session,componentRestrictions:{country:t.country}},function(e){return a(e?e.map(function(e){return{__placeId:e.place_id,address:e.description}}):[])})})}},{key:"searchApple",value:function(e){var t=this;return new k.a(function(a){t.apple.Search.autocomplete(e,function(e,t){a(t.results.slice(0,5).map(function(e){return{address:e.displayLines.join(", "),lat:e.coordinate.latitude,lng:e.coordinate.longitude,parts:new M(null,_.AppleMapKit)}}))})})}},{key:"searchHere",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=new URLSearchParams({app_id:this.token.appId,app_code:this.token.appCode,query:t,country:this.country?this.country.toUpperCase():"",maxresults:5,language:this.locale}).toString(),e.next=3,fetch("https://autocomplete.geocoder.api.here.com/6.2/suggest.json?"+a).then(function(e){return e.json()});case 3:if(r=e.sent,r.hasOwnProperty("suggestions")){e.next=6;break}return e.abrupt("return",[]);case 6:return e.abrupt("return",r.suggestions.map(function(e){return{__placeId:e.locationId,address:e.label}}));case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"reverseNominatim",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.lat,r=t.lng,n=new URLSearchParams({lat:a,lon:r,format:"jsonv2",addressdetails:1,"accept-language":this.locale}).toString(),e.next=4,fetch("https://nominatim.openstreetmap.org/reverse?"+n).then(function(e){return e.json()});case 4:return o=e.sent,e.abrupt("return",{address:o.display_name,lat:a,lng:r,parts:new M(Object(c["a"])({},o.address,{type:o.type}),_.Nominatim)});case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"reverseMapbox",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.lat,r=t.lng,n=new URLSearchParams({types:"address,country,postcode,place,locality,district,neighborhood",limit:1,access_token:this.token,language:this.locale}).toString(),e.next=4,fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+r+","+a+".json?"+n).then(function(e){return e.json()});case 4:return o=e.sent,s=o.features[0],e.abrupt("return",{address:s.place_name,lat:a,lng:r,parts:new M(s,_.Mapbox)});case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"reverseGoogle",value:function(e){var t=this;return new k.a(function(a){t.google.geocoder.geocode({location:e},function(t){var r=t[0];a(Object(c["a"])({address:r.formatted_address},e,{parts:new A(r.address_components)}))})})}},{key:"reverseApple",value:function(e){var t=this,a=e.lat,r=e.lng;return new k.a(function(e){t.apple.Geocoder.reverseLookup(new t.apple.Coordinate(a,r),function(t,n){var o=n.results[0];e({address:o.formattedAddress,lat:a,lng:r,parts:new M(null,_.AppleMapKit)})})})}},{key:"reverseHere",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,o,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.lat,r=t.lng,n=new URLSearchParams({app_id:this.token.appId,app_code:this.token.appCode,mode:"retrieveAddresses",jsonattributes:1,limit:1,prox:"".concat(a,",").concat(r,",1"),language:this.locale}),e.next=4,fetch("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?"+n).then(function(e){return e.json()});case 4:return o=e.sent,s=o.response,i=s.view[0].result[0].location.address,e.abrupt("return",{address:i.label,lat:a,lng:r,parts:new M(i,_.Here)});case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getGooglePlaceDetails",value:function(e,t){var a=this;return new k.a(function(r){a.google.places.getDetails({placeId:e,fields:["geometry","address_component"]},function(e){r({address:t.address,lat:e.geometry.location.lat(),lng:e.geometry.location.lng(),parts:new A(e.address_components)})})})}},{key:"getHerePlaceDetails",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,a){var r,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=new URLSearchParams({app_id:this.token.appId,app_code:this.token.appCode,locationid:t,jsonattributes:1,gen:9,language:this.locale}).toString(),e.next=3,fetch("https://geocoder.api.here.com/6.2/geocode.json?"+r).then(function(e){return e.json()});case 3:return n=e.sent,o=n.response.view[0].result[0].location,e.abrupt("return",Object(c["a"])({},a,{lat:o.displayPosition.latitude,lng:o.displayPosition.longitude,parts:new M(o.address,_.Here)}));case 6:case"end":return e.stop()}},e,this)}));function t(t,a){return e.apply(this,arguments)}return t}()}]),e}(),D=(P=Object(g["a"])({components:{VueAutosuggest:j["a"]},props:{geo:G,service:String,defaultValue:String}}),P((R=function(e){function t(){var e,a;Object(l["a"])(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return a=Object(p["a"])(this,(e=Object(h["a"])(t)).call.apply(e,[this].concat(n))),Object(m["a"])(Object(b["a"])(a),"suggestions",[{data:[]}]),Object(m["a"])(Object(b["a"])(a),"renderSuggestion",function(e){var t=e.item;return t.address}),Object(m["a"])(Object(b["a"])(a),"getSuggestionValue",function(e){return e.item.address}),a}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"onInputChange",value:function(){var e=this,t=null;return function(a){clearTimeout(t),t=setTimeout(Object(i["a"])(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.geo.search(a);case 2:r=t.sent,e.suggestions=[{data:r}];case 4:case"end":return t.stop()}},t)})),500)}}},{key:"onSelected",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:a=t.item,e.t0=this.service,e.next=e.t0===_.GoogleMaps?6:e.t0===_.Here?10:14;break;case 6:return e.next=8,this.geo.getGooglePlaceDetails(a.__placeId,a);case 8:return a=e.sent,e.abrupt("break",14);case 10:return e.next=12,this.geo.getHerePlaceDetails(a.__placeId,a);case 12:return a=e.sent,e.abrupt("break",14);case 14:this.$emit("selected",a);case 15:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"inputProps",get:function(){return{onInputChange:this.onInputChange(),class:"text nicetext fullwidth",placeholder:y("Search for a location"),initialValue:this.initialValue}}}]),t}(g["b"]),H=R))||H),T=D,$=a("2877"),Z=Object($["a"])(T,f,v,!1,null,null,null),V=Z.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.$style.grid},[a("div",{class:e.$style.full},[a("Input",{attrs:{label:e.labels.fullAddress,value:e.value.address,disabled:e.hide},on:{input:function(t){return e.onInput("fullAddress",t)}}}),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.onClear()}}},[e._v("\n\t\t\t"+e._s(e.labels.clear)+"\n\t\t")])],1),e.showLatLng?a("Fragment",[a("Input",{attrs:{label:e.labels.lat,value:e.value.lat},on:{input:function(t){return e.onInput("lat",t)}}}),a("Input",{attrs:{label:e.labels.lng,value:e.value.lng},on:{input:function(t){return e.onInput("lng",t)}}})],1):e._e(),e.hide?e._e():a("Fragment",[a("Input",{attrs:{label:e.labels.number,value:e.value.parts.number},on:{input:function(t){return e.onInput("number",t)}}}),a("Input",{attrs:{label:e.labels.address,value:e.value.parts.address},on:{input:function(t){return e.onInput("address",t)}}}),a("Input",{attrs:{label:e.labels.city,value:e.value.parts.city},on:{input:function(t){return e.onInput("city",t)}}}),a("Input",{attrs:{label:e.labels.postcode,value:e.value.parts.postcode},on:{input:function(t){return e.onInput("postcode",t)}}}),a("Input",{attrs:{label:e.labels.county,value:e.value.parts.county},on:{input:function(t){return e.onInput("county",t)}}}),a("Input",{attrs:{label:e.labels.state,value:e.value.parts.state},on:{input:function(t){return e.onInput("state",t)}}}),a("Input",{attrs:{label:e.labels.country,value:e.value.parts.country},on:{input:function(t){return e.onInput("country",t)}}})],1)],1)},K=[],U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("span",{class:e.$style.name},[e._v("\n\t\t"+e._s(e.label)+"\n\t")]),a("input",{staticClass:"text nicetext fullwidth",attrs:{type:e.type,name:e.name,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t)}}})])},B=[],F=(a("c5f6"),N=Object(g["a"])({props:{label:String,name:String,type:{type:String,default:"text"},value:[String,Number],disabled:Boolean}}),N(z=function(e){function t(){return Object(l["a"])(this,t),Object(p["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(g["b"]))||z),q=F,J=a("1c37");function W(e){this["$style"]=J["default"].locals||J["default"]}var Q,X,Y,ee,te,ae=Object($["a"])(q,U,B,!1,W,null,null),re=ae.exports,ne={functional:!0,render:function(e,t){return t.children}},oe=ne,se=oe,ie=Object($["a"])(se,Q,X,!1,null,null,null),ce=ie.exports,le=(Y=Object(g["a"])({components:{Input:re,Fragment:ce},props:{value:{type:Object,default:{address:"",lat:0,lng:0,parts:{}}},showLatLng:Boolean,fullAddressDirty:Boolean,hide:Boolean}}),Y((te=function(e){function t(){var e,a;Object(l["a"])(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return a=Object(p["a"])(this,(e=Object(h["a"])(t)).call.apply(e,[this].concat(n))),Object(m["a"])(Object(b["a"])(a),"labels",{clear:y("Clear"),fullAddress:y("Full Address"),number:y("Name / Number"),address:y("Street Address"),city:y("Town / City"),postcode:y("Postcode"),county:y("County"),state:y("State"),country:y("Country"),lat:y("Latitude"),lng:y("Longitude")}),a}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"onInput",value:function(e,t){this.$emit("changed",{name:e,value:t.target.value})}},{key:"onClear",value:function(){this.$emit("clear")}}]),t}(g["b"]),ee=te))||ee),ue=le,pe=a("9685");function he(e){this["$style"]=pe["default"].locals||pe["default"]}var be,de,me,ge,fe,ve=Object($["a"])(ue,E,K,!1,he,null,null),je=ve.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.$style.map})},Oe=[],_e=a("268f"),we=a.n(_e),ke=a("d360"),xe=a("e11e"),Se=a.n(xe),Me=(a("2acb"),a("898b"),{Wikimedia:"wikimedia",OpenStreetMap:"openstreetmap",CartoVoyager:"carto.rastertiles/voyager",CartoPositron:"carto.light_all",CartoDarkMatter:"carto.dark_all",MapboxOutdoors:"mapbox.outdoors",MapboxStreets:"mapbox.streets",MapboxLight:"mapbox.light",MapboxDark:"mapbox.dark",GoogleRoadmap:"google.roadmap",GoogleTerrain:"google.terrain",GoogleHybrid:"google.hybrid",MapKitStandard:"mapkit.standard",MapKitMutedStandard:"mapkit.muted",MapKitSatellite:"mapkit.satellite",MapKitHybrid:"mapkit.hybrid",HereNormalDay:"here.normal.day",HereNormalDayGrey:"here.normal.day.grey",HereNormalDayTransit:"here.normal.day.transit",HereReduced:"here.reduced.day",HerePedestrian:"here.pedestrian.day",HereTerrain:"here.terrain.day",HereSatellite:"here.satellite.day",HereHybrid:"here.hybrid.day"}),Ce=Me,Le=(a("6cc5"),be=Object(g["a"])({props:{tiles:String,token:[String,Object],latLng:Object,zoom:Number,minZoom:Number,maxZoom:Number}}),de=Object(g["c"])("latLng",{deep:!0}),be((fe=function(e){function t(){var e,a;Object(l["a"])(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return a=Object(p["a"])(this,(e=Object(h["a"])(t)).call.apply(e,[this].concat(n))),Object(m["a"])(Object(b["a"])(a),"map",null),Object(m["a"])(Object(b["a"])(a),"marker",null),a}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"mounted",value:function(){var e=this;if(this.map=Se.a.map(this.$el,{minZoom:this.minZoom,maxZoom:this.maxZoom,scrollWheelZoom:!1}).setView(this.latLng,this.zoom),this.tiles.indexOf("google")>-1)this._googleMutant();else if(this.tiles.indexOf("mapkit")>-1)this._mapKitMutant();else{var t={attribution:this.tileLayer.attr};this.tileLayer.subdomains&&(t.subdomains=this.tileLayer.subdomains);var a=Se.a.tileLayer(this.tileLayer.url,t);this.map.addLayer(a)}this.map.on("zoom",this.onZoom),this.setMarker();var r=new IntersectionObserver(function(t){t[0].intersectionRatio<=0||e.map.invalidateSize(!0)});r.observe(this.$el)}},{key:"setMarker",value:function(){var e=this;this.marker&&this.map.removeLayer(this.marker),this.marker=Se.a.marker(this.latLng,{icon:this.icon,draggable:!0,autoPan:!0}),this.map.addLayer(this.marker),this.marker.on("dragend",function(){e.$emit("change",e.marker.getLatLng())})}},{key:"onLatChange",value:function(e,t){e.lat===t.lat&&e.lng===t.lng||(this.map.flyTo(this.latLng),this.setMarker())}},{key:"onZoom",value:function(){this.$emit("zoom",this.map.getZoom())}},{key:"_googleMutant",value:function(){var e=this;I("google",function(){Se.a.gridLayer.googleMutant({type:e.tiles.split(".")[1]}).addTo(e.map)})}},{key:"_mapKitMutant",value:function(){var e=this;I("mapkit",function(){Se.a.mapkitMutant({type:e.tiles.split(".")[1],authorizationCallback:function(t){return t(e.token)},language:window.Craft.language}).addTo(e.map)})}},{key:"tileLayer",get:function(){var e=Se.a.Browser.retina?"@2x.png":".png",t=Se.a.Browser.retina?"512":"256",a=this.tiles.split(/\.(.+)/)[1];switch(this.tiles){case Ce.Wikimedia:return{url:"https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}".concat(e),attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>, &copy; <a href="https://maps.wikimedia.org" target="_blank" rel="noreferrer">Wikimedia</a>'};case Ce.OpenStreetMap:return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>'};case Ce.CartoVoyager:case Ce.CartoPositron:case Ce.CartoDarkMatter:return{url:"https://{s}.basemaps.cartocdn.com/".concat(a,"/{z}/{x}/{y}").concat(e),attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution" target="_blank" rel="noreferrer">CARTO</a>'};case Ce.MapboxOutdoors:case Ce.MapboxStreets:case Ce.MapboxLight:case Ce.MapboxDark:return{url:"https://api.tiles.mapbox.com/v4/mapbox.".concat(a,"/{z}/{x}/{y}").concat(e,"?access_token=").concat(this.token),attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>, &copy; <a href="https://www.mapbox.com/" target="_blank" rel="noreferrer">Mapbox</a>'};case Ce.HereNormalDay:case Ce.HereNormalDayGrey:case Ce.HereNormalDayTransit:case Ce.HereReduced:case Ce.HerePedestrian:return{url:"https://{s}.base.maps.api.here.com/maptile/2.1/maptile/newest/".concat(a,"/{z}/{x}/{y}/").concat(t,"/png8?app_id=").concat(this.token.appId,"&app_code=").concat(this.token.appCode),attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>, &copy; <a href="https://here.com/" target="_blank" rel="noreferrer">Here</a>',subdomains:"1234"};case Ce.HereTerrain:case Ce.HereSatellite:case Ce.HereHybrid:return{url:"https://{s}.aerial.maps.api.here.com/maptile/2.1/maptile/newest/".concat(a,"/{z}/{x}/{y}/").concat(t,"/png8?app_id=").concat(this.token.appId,"&app_code=").concat(this.token.appCode),attr:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>, &copy; <a href="https://here.com/" target="_blank" rel="noreferrer">Here</a>',subdomains:"1234"};default:throw new Error("Unknown map tiles service: "+this.tiles)}}},{key:"icon",get:function(){return Se.a.divIcon({html:'<svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="41" viewBox="0 0 47 82"><path fill="#E7433B" d="M23.5036141,0 C10.5440829,0 0,10.5437082 0,23.5027789 C0,24.4175793 0.0650869313,25.3179165 0.159101388,26.1423217 C0.867825751,35.0299879 5.03338935,41.3938173 9.43760504,48.1336911 C15.1833347,56.9164988 21.6920278,62.0913384 21.6920278,80.1920939 C21.6920278,81.1900581 22.5019985,82 23.4999981,82 C24.4979978,82 25.3079685,81.1900581 25.3079685,80.1920939 C25.3079685,62.0949542 31.8166616,56.9201146 37.5623912,48.1336911 C41.9702229,41.3938173 46.1321705,35.0299879 46.833663,26.2074063 C46.9385253,25.3179165 46.9999963,24.4175793 46.9999963,23.499163 C47.0072282,10.5437082 36.4631453,0 23.5036141,0 Z M23,33 C18.0392,33 14,28.9608 14,24 C14,19.0392 18.0392,15 23,15 C27.9608,15 32,19.0392 32,24 C32,28.9608 27.9608,33 23,33 Z"/></svg>',iconSize:[23.5,41],iconAnchor:[11.75,41],className:""})}}]),t}(g["b"]),ge=fe,Object(ke["a"])(ge.prototype,"onLatChange",[de],we()(ge.prototype,"onLatChange"),ge.prototype),me=ge))||me),Ae=Le,Ie=a("f3c8");function Pe(e){this["$style"]=Ie["default"].locals||Ie["default"]}var He,Re,Ne,ze=Object($["a"])(Ae,ye,Oe,!1,Pe,null,null),Ge=ze.exports,De=(He=Object(g["a"])({props:{options:{type:String}},components:{Search:V,Address:je,Map:Ge,Fragment:ce}}),He((Ne=function(e){function t(){var e,a;Object(l["a"])(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return a=Object(p["a"])(this,(e=Object(h["a"])(t)).call.apply(e,[this].concat(n))),Object(m["a"])(Object(b["a"])(a),"config",{isSettings:!1,name:"",hideSearch:!1,hideMap:!1,hideAddress:!1,showLatLng:!1,minZoom:3,maxZoom:20,mapTiles:"wikimedia",mapToken:"",geoService:"nominatim",geoToken:"",locale:"en"}),Object(m["a"])(Object(b["a"])(a),"value",{address:"",zoom:15,lat:null,lng:null,parts:new M}),Object(m["a"])(Object(b["a"])(a),"geo",null),Object(m["a"])(Object(b["a"])(a),"fullAddressDirty",!1),Object(m["a"])(Object(b["a"])(a),"defaultValue",null),a}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"created",value:function(){var e=JSON.parse(this.$props.options),t=e.config,a=e.value,r=e.defaultValue,n=t.geoService===_.GoogleMaps;this.config=t,this.value=a,this.value.parts=n?new A(a.parts):M.from(a.parts),this.defaultValue=r,this.defaultValue.parts=n?new A:new M,this.geo=new G(t)}},{key:"onSearchSelected",value:function(e){this.value=Object(c["a"])({},this.value,e)}},{key:"onMapChange",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this.value.zoom,e.t0=this.config.geoService,e.next=e.t0===_.Nominatim?4:e.t0===_.Mapbox?8:e.t0===_.GoogleMaps?12:e.t0===_.AppleMapKit?16:e.t0===_.Here?20:24;break;case 4:return e.next=6,this.geo.reverseNominatim(t);case 6:return this.value=e.sent,e.abrupt("break",25);case 8:return e.next=10,this.geo.reverseMapbox(t);case 10:return this.value=e.sent,e.abrupt("break",25);case 12:return e.next=14,this.geo.reverseGoogle(t);case 14:return this.value=e.sent,e.abrupt("break",25);case 16:return e.next=18,this.geo.reverseApple(t);case 18:return this.value=e.sent,e.abrupt("break",25);case 20:return e.next=22,this.geo.reverseHere(t);case 22:return this.value=e.sent,e.abrupt("break",25);case 24:throw new Error("Unknown geo service: "+this.config.geoService);case 25:this.value.zoom=a,this.fullAddressDirty=!1;case 27:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"onZoom",value:function(e){this.value.zoom=e}},{key:"onPartChange",value:function(e){var t=e.name,a=e.value;"fullAddress"===t?(this.value.address=a,this.fullAddressDirty=""!==a):"lat"===t||"lng"===t?this.value[t]=a:(this.value.parts[t]=a,""!==this.value.address&&this.fullAddressDirty||(this.value.address=s()(this.value.parts).filter(Boolean).join(", ")))}},{key:"onClear",value:function(){this.value={address:"",zoom:15,lat:null,lng:null,parts:new M}}},{key:"val",get:function(){return null===this.value.lat?this.defaultValue:this.value}}]),t}(g["b"]),Re=Ne))||Re),Te=De,$e=Object($["a"])(Te,r,n,!1,null,null,null),Ze=$e.exports,Ve={install:function(e){e.filter("t",y),e.component("simple-map",Ze)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Ve)},"6bca":function(e,t,a){e.exports={grid:"Address_grid_3Vxrg",full:"Address_full_2Hoxx"}},9685:function(e,t,a){"use strict";var r=a("6bca"),n=a.n(r);t["default"]=n.a},b4c0:function(e,t,a){e.exports={map:"Map_map_2NpD9"}},bfca:function(e,t,a){e.exports={name:"Input_name_3DpMZ"}},f3c8:function(e,t,a){"use strict";var r=a("b4c0"),n=a.n(r);t["default"]=n.a}});
//# sourceMappingURL=app.js.map