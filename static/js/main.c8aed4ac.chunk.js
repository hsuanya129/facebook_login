(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(8),r=a.n(o),i=(a(15),a(1)),c=a(2),u=a(4),l=a(3),p=a(5),d=(a(6),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Date.parse(this.props.data.created_time),t=new Date(e),a=this.props.data.message?this.props.data.message.replace(/\u21b5/,"<br/>"):"";return s.a.createElement("div",null,s.a.createElement("p",{className:"from"},this.props.data.from?this.props.data.from.name:"By friend"),s.a.createElement("pre",{className:"content"},a,s.a.createElement("br",null),this.props.data.full_picture?s.a.createElement("img",{className:"full_picture",src:this.props.data.full_picture}):""),s.a.createElement("p",{className:"date"},t.toString()))}}]),t}(s.a.Component)),m=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t;return e=""===this.props.user_name?"Login now! Email:aetsfmhjpu_1563950203@tfbnw.net/Password:22342467":"Hello "+this.props.user_name,t="no posts"===this.props.data?s.a.createElement("p",null," You haven't post anything yet."):this.props.data.map(function(e){return s.a.createElement(d,{key:e.id,data:e})}),s.a.createElement("div",null,s.a.createElement("h1",null,e),t)}}]),t}(s.a.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).fetchPosts=function(e){"connected"===e.status?(window.FB.api("/me",function(e){a.setState({user_name:e.name})}),window.FB.api("/me","GET",{fields:"feed{full_picture,created_time,message,from}"},function(e){var t;t=e.feed?e.feed.data:"no posts",a.setState({posts_data:t})})):"unknown"===e.status&&a.setState({posts_data:[],user_name:""})},a.state={posts_data:[],user_name:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.fbAsyncInit=function(){window.FB.init({appId:"2858794564190467",cookie:!0,status:!0,xfbml:!0,version:"v3.3"}),window.FB.getLoginStatus(function(t){e.fetchPosts(t)}),window.FB.Event.subscribe("auth.statusChange",function(t){e.fetchPosts(t)})},function(e,t,a){var n,s=e.getElementsByTagName(t)[0];e.getElementById(a)||((n=e.createElement(t)).id=a,n.src="https://connect.facebook.net/zh_TW/sdk.js",s.parentNode.insertBefore(n,s))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"fb-login-button",scope:"public_profile,email,user_posts","data-width":"","data-size":"large","data-button-type":"login_with","data-auto-logout-link":"true","data-use-continue-as":"true"}),s.a.createElement(m,{data:this.state.posts_data,user_name:this.state.user_name}))}}]),t}(s.a.Component),h=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(f,null))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c8aed4ac.chunk.js.map