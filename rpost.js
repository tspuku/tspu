var randomRelatedIndex,showRelatedPost;!function(a,e,t){var i={widgetTitle:"<h3 class='title dt'>Related Posts</h3>",widgetStyle:1,homePage:"http://www.fineshopdesign.com",numPosts:7,summaryLength:320,titleLength:"auto",thumbnailSize:200,noImage:"data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",containerId:"related-posts",newTabLink:!1,moreText:"Visit Now",callBack:function(){}};for(var l in relatedPostConfig)i[l]="undefined"==relatedPostConfig[l]?i[l]:relatedPostConfig[l];var s=function(a){var i=e.createElement("script");i.async="async",i.rel="preload",i.src=a,t.appendChild(i)},d=function(a){var e,t,i=a.length;if(0===i)return!1;for(;--i;)e=Math.floor(Math.random()*(i+1)),t=a[i],a[i]=a[e],a[e]=t;return a},r="object"==typeof labelArray&&labelArray.length>0?"/-/"+d(labelArray)[0]:"",n=function(a){var t,l,s,r,n,c=gId(i.containerId),o=d(a.feed.entry),m=i.widgetStyle,v='<div class="rPst">'+i.widgetTitle+'<ul class="s-'+m+' scrlH">',u=i.newTabLink?' target="_blank"':"",h=i.moreText;if(c){for(var g=0;g<i.numPosts&&g!=o.length;g++){l=o[g].title.$t,s="auto"!==i.titleLength&&i.titleLength<l.length?l.substring(0,i.titleLength)+"&hellip;":l,r="media$thumbnail"in o[g]&&!1!==i.thumbnailSize?o[g].media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+(\-c)?/,"/s"+i.thumbnailSize).replace(/\=s[0-9]+(\-c)?/,"=s"+i.thumbnailSize):i.noImage,month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Y=(date=o[g].published.$t.substring(0,10)).substring(0,4),e=date.substring(5,7),D=date.substring(9,10),M=month[parseInt(e-1)],n="summary"in o[g]&&i.summaryLength>0?o[g].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,i.summaryLength)+"&hellip;":"";for(var p=0,b=o[g].link.length;p<b;p++)t="alternate"==o[g].link[p].rel?o[g].link[p].href:"#";2==m?v+='<li><div class="i"><div class="pThmb"><a class="thmb" aria-label="'+s+'" href="'+t+'" title="'+l+'"><div style="background-image: url('+r+')"></div></a></div><div class="iTtl aTtl"><a href="'+t+'" '+u+">"+s+"</a></div></div></li>":3==m?v+='<li><div class="i"><div class="pThmb"><a class="thmb" aria-label="'+s+'" href="'+t+'" title="'+l+'"><div style="background-image: url('+r+')"></div></a></div><div class="iTtl aTtl"><a href="'+t+'" '+u+' data-date="'+M+" "+D+", "+Y+'" data-text="'+h+'">'+s+"</a></div></div></li>":4==m?v+='<li><div class="i"><div class="pThmb"><a class="thmb" aria-label="'+s+'" href="'+t+'" title="'+l+'"><div style="background-image: url('+r+')"></div></a></div><div class="iTtl aTtl"><a href="'+t+'" '+u+">"+s+'</a></div><div class="pSnpt">'+n+'</div><div class="pInf pSml" data-date="'+M+" "+D+", "+Y+'"></div></div></li>':v+='<li><div class="iF"><div class="pThmb"><a class="thmb" aria-label="'+s+'" href="'+t+'" title="'+l+'"><div style="background-image: url('+r+')"></div></a></div><div class="pCtnt"><div class="pInr"><div class="iTtl aTtl"><a href="'+t+'" '+u+">"+s+'</a></div><div class="pSnpt">'+n+'</div><div class="pInf pSml" data-date="'+M+" "+D+", "+Y+'"></div></div></div></div></li>'}c.innerHTML=v+="</ul></div>",i.callBack()}};randomRelatedIndex=function(a){var e,t=a.feed.openSearch$totalResults.$t-i.numPosts,l=Math.floor(Math.random()*((e=t>0?t:1)-1+1))+1;s(i.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+r+"?alt=json-in-script&orderby=updated&start-index="+l+"&max-results="+i.numPosts+"&callback=showRelatedPost")},showRelatedPost=n,s(i.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+r+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")}(window,document,gTN("head")[0]);
