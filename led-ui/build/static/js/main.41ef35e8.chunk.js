(this["webpackJsonpled-ui"]=this["webpackJsonpled-ui"]||[]).push([[0],{33:function(t,e,s){t.exports=s(72)},38:function(t,e,s){},39:function(t,e,s){},68:function(t,e){},71:function(t,e,s){},72:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),i=s(31),o=s.n(i),c=(s(38),s(5)),r=s(6),u=s(8),l=s(7),d=s(9),h=(s(39),function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).handleStateChangeClick=function(e){void 0!==t.props.socket?t.props.socket.emit("device-status-change-request",JSON.stringify({key:t.props.id,status:!t.state.status})):console.log("There is no socket available")},t.handleDestroyClick=function(e){void 0!==t.props.socket?t.props.socket.emit("device-remove",JSON.stringify({key:t.props.id})):console.log("There is no socket available")},t.state={status:void 0},t}return Object(d.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;void 0===this.state.status&&this.setState({status:this.props.status}),void 0!==this.props.socket&&this.props.socket.on("device-status-changed",(function(e){var s=JSON.parse(e);s.key===t.props.id&&t.setState({status:s.status})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"device"},a.a.createElement("h1",null,this.props.name),a.a.createElement("h3",{className:void 0!==this.state.status&&this.state.status?"active":"inactive"},this.state.status?"Actif":"Inactif"),a.a.createElement("button",{onClick:this.handleStateChangeClick,className:void 0!==this.state.status&&this.state.status?"inactive":"active"},void 0!==this.state.status&&this.state.status?"\xc9teindre":"Allumer"),a.a.createElement("button",{onClick:this.handleDestroyClick,className:"inactive"},"Supprimer"))}}]),e}(a.a.Component)),v=s(32),p=s.n(v),f=(s(71),function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).fetchDevices=function(e,s){fetch(s+"list-devices").then((function(s){s.json().then((function(s){t.setState({devices:s,webSocket:e})})).catch((function(s){console.log(s),t.setState({webSocket:e})}))})).catch((function(s){console.log(s),t.setState({webSocket:e})})),void 0!==e&&(e.on("devices-list",(function(e){var s=JSON.parse(e);t.setState({devices:s})})),e.on("device-online",(function(e){var s=JSON.parse(e);t.state.devices.push(s),t.setState({devices:t.state.devices.map((function(t){return t}))})})),e.on("device-offline",(function(e){var s=JSON.parse(e);t.setState({devices:t.state.devices.filter((function(t){return t.key!==s.key}))})})))},t.state={devices:[],webSocket:void 0,endpoint:"http://localhost:4000/"},t}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return this.state.devices.length<=0?a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"loading"},a.a.createElement("h1",null,"En attente de dispositifs"))):a.a.createElement("div",{className:"container"},this.state.devices.map((function(e){return a.a.createElement(h,{key:e.key,id:e.key,name:e.name,status:e.status,socket:t.state.webSocket})})))}},{key:"componentDidMount",value:function(){if(void 0===this.state.webSocket){var t=this.state.endpoint,e=p()(t);this.fetchDevices(e,t)}}}]),e}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.41ef35e8.chunk.js.map