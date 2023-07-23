"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[3898],{3898:function(e,o,t){t.r(o),t.d(o,{default:function(){return w}});var n=t(29439),r=t(72791),a=t(70272),i=t(38302),l=t(93188),c=t(26513),d=t(1288),s=t(94135),u=t(85247),p=t(94575),m=t(3746),f=t(20165),h=t(61248),g=t(59434),b=t(79271),x=t(97979),v=t(89307),k=t(56534),y=t(91523),C=t(30531),Z=t(80184);function w(){var e=(0,b.k6)(),o=(0,b.TH)(),t=(0,g.I0)(),w=(0,k.VY)(),I=(0,g.v9)((function(e){return e.userData})),S=I.isAuthenticated,M=I.loading,z=I.error,j=(0,p.Z)(),B=(0,r.useState)(!1),T=(0,n.Z)(B,2),F=T[0],R=T[1],N=(0,r.useState)(""),P=(0,n.Z)(N,2),E=P[0],A=P[1],L=(0,r.useState)(""),O=(0,n.Z)(L,2),D=O[0],H=O[1],V=(0,r.useState)(!0),W=(0,n.Z)(V,2),$=W[0],q=W[1],U=!(E&&D&&$),Y=o.search?o.search.split("=")[1]:"/account";return(0,r.useEffect)((function(){z&&(w.error(z),t((0,x.b9)())),S&&e.push(Y)}),[t,S,M,z,w,e,Y]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(C.Z,{title:"Login"}),M?(0,Z.jsx)(v.Z,{}):(0,Z.jsx)("div",{className:j.formContainer,children:(0,Z.jsxs)("form",{className:j.form,children:[(0,Z.jsx)(a.Z,{className:j.avatar,children:(0,Z.jsx)(h.Z,{})}),(0,Z.jsx)(i.Z,{variant:"h5",component:"h1",className:j.heading,children:"Sign in to Your Account"}),(0,Z.jsx)(l.Z,{label:"Email",variant:"outlined",fullWidth:!0,className:"".concat(j.emailInput," ").concat(j.textField),value:E,onChange:function(e){var o=e.target.value;A(o),q(""!==o&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o))},error:!$&&""!==E,helperText:$||""===E?"":"Please enter a valid email address."}),(0,Z.jsx)(l.Z,{label:"Password",variant:"outlined",type:F?"text":"password",fullWidth:!0,className:"".concat(j.passwordInput," ").concat(j.textField),InputProps:{endAdornment:(0,Z.jsx)(c.Z,{variant:"outlined",className:j.showPasswordButton,onClick:function(){R(!F)},children:F?(0,Z.jsx)(f.Z,{}):(0,Z.jsx)(m.Z,{})})},value:D,onChange:function(e){H(e.target.value)}}),(0,Z.jsxs)(d.Z,{container:!0,className:j.rememberMeContainer,children:[(0,Z.jsx)(d.Z,{item:!0,children:(0,Z.jsx)(s.Z,{control:(0,Z.jsx)(u.Z,{color:"primary"}),label:"Remember me"})}),(0,Z.jsx)(d.Z,{item:!0,children:(0,Z.jsx)(y.rU,{to:"/password/forgot",className:j.forgotPasswordLink,children:"Forgot your password?"})})]}),(0,Z.jsxs)(i.Z,{variant:"body2",className:j.termsAndConditionsText,children:["I accept the Cricket Weapon Terms of Use and acknowledge Cricket Weapon will use my information in accordance with its",(0,Z.jsx)(y.rU,{href:"#",className:j.privacyText,children:"Privacy Policy."})]}),(0,Z.jsx)(c.Z,{variant:"contained",className:j.loginButton,fullWidth:!0,disabled:U,onClick:function(e){e.preventDefault(),t((0,x.x4)(E,D))},children:"Sign in"}),(0,Z.jsxs)(i.Z,{variant:"body1",align:"center",style:{marginTop:"1rem"},children:["Don't have an account?",(0,Z.jsx)(y.rU,{to:"/signup",className:j.createAccount,children:"Create Account"})]})]})})]})}},94575:function(e,o,t){var n=t(4942),r=(0,t(38596).Z)((function(e){return{formContainer:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"7rem",paddingBottom:"3rem",height:"auto",backgroundColor:"white"},form:{width:"350px",margin:"auto",borderRadius:"5px",padding:"2rem"},heading:{textAlign:"center",marginBottom:e.spacing(3),color:"#414141",fontWeight:"bold"},nameInput:{position:"relative","& > label":{left:".2rem"},padding:"4px 0px",fontSize:"1rem",width:"100%",marginBottom:e.spacing(5.5),height:".7rem"},emailInput:{position:"relative","& > label":{left:".2rem"},padding:"4px 0px",fontSize:"1rem",width:"100%",marginTop:"3rem",height:".7rem"},passwordInput:{position:"relative","& > label":{left:".2rem"},padding:"4px 0px",width:"100%",height:".7rem",marginTop:e.spacing(5.5),"&.MuiOutlinedInput-input":{padding:"14px 14px"}},strengthIndicator:{marginTop:e.spacing(1)},showPasswordButton:{position:"absolute",top:"50%",color:"rgb(0 0 0 / 85%)",fontSize:"12px",right:e.spacing(2),transform:"translateY(-50%)",border:"none","&:hover":{color:"#ed1c24",background:"none"}},rememberMeContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"14px",marginTop:e.spacing(7),"& .MuiIconButton-label":{color:"black"}},forgotPasswordLink:{color:"#000",textDecoration:"none","&:hover":{textDecoration:"underline",color:"#ed1c24"}},termsAndConditionsText:{fontFamily:"Roboto",color:"#727272",textAlign:"center",lineHeight:"17px",paddingLeft:"4px",marginTop:e.spacing(2),fontSize:"12px"},loginButton:{color:"#fff",backgroundColor:"#000",border:"2px solid #000",margin:"".concat(e.spacing(3),"px 0"),marginTop:"1rem","&:disabled":{backgroundColor:"#444444",color:"#FFFFFF",borderColor:"#444444"},"&:hover":{backgroundColor:"#ff0000",borderColor:"#ff0000"}},privacyText:{marginLeft:"4px",textDecoration:"underline",color:"black",fontSize:"14px","&:hover":{color:"#ed1c24"}},createAccount:{fontSize:"1rem",fontWeight:500,color:"#121212",paddingLeft:"6px","&:hover":{color:"#ed1c24",textDecoration:"underline"}},textField:{marginBottom:e.spacing(2),"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"black",padding:"12px 14px"},"& .MuiInputLabel-root":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiInputLabel-root.Mui-focused":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"black",color:"black"},"& .MuiOutlinedInput-input":{padding:"13px 8px"},"&.Mui-focused fieldset":{borderColor:"black",color:"black",outline:"none"}}},avatar:{margin:" 8px auto",backgroundColor:"black"},gridcheckbox:{display:"flex",justifyContent:"flex-start",alignItems:"center",marginTop:"3rem"},checkbox:{"& .MuiTypography-body1":{fontSize:"14px"},marginTop:e.spacing(1),"& .MuiIconButton-label":{color:"black"}},root:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"3.5rem"},avatar2:{marginLeft:"6px",backgroundColor:"black","&.MuiAvatar-colorDefault":{color:"#fff",backgroundColor:"black"},"&:hover":{backgroundColor:"#ed1c24"}},input:{display:"none"},updateProduct:{display:"flex",alignItems:"flex-start",backgroundColor:"#f1f1f1",justifyContent:"center",width:"100%",gap:"1rem",overflow:"hidden",margin:"-1.1rem 0 0 0",padding:0},firstBox1:(0,n.Z)({width:"20%",margin:"0rem",height:"fit-content",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",display:"block"},e.breakpoints.down("999"),{display:"none"}),toggleBox1:{width:"16rem",margin:"0rem",height:"fit-content",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",display:"block",zIndex:"100",position:"absolute",top:"58px",left:"17px"},secondBox1:(0,n.Z)({width:"75%",backgroundColor:"#f1f1f1",height:"fit-content",display:"flex",flexDirection:"column",margin:"-0.5rem 0 0 0",gap:"10px",justifyContent:"center"},e.breakpoints.down("999"),{width:"100%"}),navBar1:{margin:"0rem"},form2:{marginTop:"-6rem"},uploadAvatarButton:{color:"white",width:"fit-content",backgroundColor:"#414141",height:"2.5rem","&:hover":{backgroundColor:"#ed1c24"}},uploadAvatarText:{fontSize:"14px",backgroundColor:"inherit",fontWeight:500,color:"#fff",padding:"0 1rem"},imgIcon:{width:"auto",marginLeft:"1rem",alignSelf:"center","& svg":{color:"#414141",fontSize:"2.5rem !important",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)"}},descriptionInput:{marginTop:e.spacing(5.5),"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"black",color:"black"},"&:hover fieldset":{borderColor:"black",color:"black"},"&.Mui-focused fieldset":{borderColor:"black",color:"black",outline:"none"}},"& .MuiOutlinedInput-input":{padding:"13px 8px"},"& .MuiInputLabel-root":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiInputLabel-root.Mui-focused":{color:"black",fontSize:"14px",textAlign:"center"}},descriptionIcon:{marginRight:e.spacing(1),color:e.palette.text.secondary},selectOption:{marginTop:e.spacing(5.5),position:"relative",width:"100%"},imageArea:{display:"flex",gap:"18px",width:"90%",overflowX:"scroll",scrollbarWidth:"10px",margin:"2rem 0","&::-webkit-scrollbar":{width:"10px",height:"5px"},padding:"3px 16px",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)",borderRadius:e.shape.borderRadius},image:{width:"4.5rem ",height:"4rem ",objectFit:"cover",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:e.shape.borderRadius},labelText:{color:"#414141",fontSize:"14px",position:"absolute",top:"50%",transform:"translateY(-50%)",left:"14px",pointerEvents:"none",opacity:function(e){return e.category?0:1},transition:"opacity 0.3s ease"},formControl:{width:"100%"},select:{"& .MuiOutlinedInput-input":{padding:"13px 8px"},"& .MuiInputLabel-outlined":{pointerEvents:"none",fontSize:"14px",textAlign:"center",color:"#414141"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#ed1c24"},"&.Mui-focused fieldset":{borderColor:"black",outlineColor:"black"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"black"}},"& .MuiSelect-root":{padding:"10px",color:"black"},"& .MuiSelect-icon":{marginRight:"-4px",color:"gray"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"black"},"& .MuiMenuItem-root:hover":{backgroundColor:"#ed1c24",color:"white"}},menu:{marginTop:e.spacing(1),"& .MuiMenuItem-root":{color:"black"},"& .MuiMenuItem-root:hover":{backgroundColor:"#ed1c24",color:"white"}}}}));o.Z=r},30531:function(e,o,t){t(72791);var n=t(54270),r=t(80184);o.Z=function(e){var o=e.title;return(0,r.jsx)(n.Z,{children:(0,r.jsx)("title",{children:o})})}},70272:function(e,o,t){t.d(o,{Z:function(){return s}});var n=t(87462),r=t(45987),a=t(72791),i=t(28182),l=t(38317),c=(0,t(94327).Z)(a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=a.forwardRef((function(e,o){var t=e.alt,l=e.children,d=e.classes,s=e.className,u=e.component,p=void 0===u?"div":u,m=e.imgProps,f=e.sizes,h=e.src,g=e.srcSet,b=e.variant,x=void 0===b?"circular":b,v=(0,r.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),k=null,y=function(e){var o=e.src,t=e.srcSet,n=a.useState(!1),r=n[0],i=n[1];return a.useEffect((function(){if(o||t){i(!1);var e=!0,n=new Image;return n.src=o,n.srcSet=t,n.onload=function(){e&&i("loaded")},n.onerror=function(){e&&i("error")},function(){e=!1}}}),[o,t]),r}({src:h,srcSet:g}),C=h||g,Z=C&&"error"!==y;return k=Z?a.createElement("img",(0,n.Z)({alt:t,src:h,srcSet:g,sizes:f,className:d.img},m)):null!=l?l:C&&t?t[0]:a.createElement(c,{className:d.fallback}),a.createElement(p,(0,n.Z)({className:(0,i.Z)(d.root,d.system,d[x],s,!Z&&d.colorDefault),ref:o},v),k)})),s=(0,l.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},85247:function(e,o,t){t.d(o,{Z:function(){return v}});var n=t(87462),r=t(45987),a=t(72791),i=t(28182),l=t(50839),c=t(94327),d=(0,c.Z)(a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=(0,c.Z)(a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=t(13108),p=(0,c.Z)(a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=t(91122),f=t(38317),h=a.createElement(s,null),g=a.createElement(d,null),b=a.createElement(p,null),x=a.forwardRef((function(e,o){var t=e.checkedIcon,c=void 0===t?h:t,d=e.classes,s=e.color,u=void 0===s?"secondary":s,p=e.icon,f=void 0===p?g:p,x=e.indeterminate,v=void 0!==x&&x,k=e.indeterminateIcon,y=void 0===k?b:k,C=e.inputProps,Z=e.size,w=void 0===Z?"medium":Z,I=(0,r.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=v?y:f,M=v?y:c;return a.createElement(l.Z,(0,n.Z)({type:"checkbox",classes:{root:(0,i.Z)(d.root,d["color".concat((0,m.Z)(u))],v&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:u,inputProps:(0,n.Z)({"data-indeterminate":v},C),icon:a.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===w?w:S.props.fontSize}),checkedIcon:a.cloneElement(M,{fontSize:void 0===M.props.fontSize&&"small"===w?w:M.props.fontSize}),ref:o},I))})),v=(0,f.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(x)},94135:function(e,o,t){var n=t(87462),r=t(45987),a=t(72791),i=t(28182),l=t(41024),c=t(38317),d=t(38302),s=t(91122),u=a.forwardRef((function(e,o){e.checked;var t=e.classes,c=e.className,u=e.control,p=e.disabled,m=(e.inputRef,e.label),f=e.labelPlacement,h=void 0===f?"end":f,g=(e.name,e.onChange,e.value,(0,r.Z)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),b=(0,l.Z)(),x=p;"undefined"===typeof x&&"undefined"!==typeof u.props.disabled&&(x=u.props.disabled),"undefined"===typeof x&&b&&(x=b.disabled);var v={disabled:x};return["checked","name","onChange","value","inputRef"].forEach((function(o){"undefined"===typeof u.props[o]&&"undefined"!==typeof e[o]&&(v[o]=e[o])})),a.createElement("label",(0,n.Z)({className:(0,i.Z)(t.root,c,"end"!==h&&t["labelPlacement".concat((0,s.Z)(h))],x&&t.disabled),ref:o},g),a.cloneElement(u,v),a.createElement(d.Z,{component:"span",className:(0,i.Z)(t.label,x&&t.disabled)},m))}));o.Z=(0,c.Z)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},50839:function(e,o,t){var n=t(87462),r=t(29439),a=t(45987),i=t(72791),l=t(28182),c=t(92497),d=t(41024),s=t(38317),u=t(67025),p=i.forwardRef((function(e,o){var t=e.autoFocus,s=e.checked,p=e.checkedIcon,m=e.classes,f=e.className,h=e.defaultChecked,g=e.disabled,b=e.icon,x=e.id,v=e.inputProps,k=e.inputRef,y=e.name,C=e.onBlur,Z=e.onChange,w=e.onFocus,I=e.readOnly,S=e.required,M=e.tabIndex,z=e.type,j=e.value,B=(0,a.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),T=(0,c.Z)({controlled:s,default:Boolean(h),name:"SwitchBase",state:"checked"}),F=(0,r.Z)(T,2),R=F[0],N=F[1],P=(0,d.Z)(),E=g;P&&"undefined"===typeof E&&(E=P.disabled);var A="checkbox"===z||"radio"===z;return i.createElement(u.Z,(0,n.Z)({component:"span",className:(0,l.Z)(m.root,f,R&&m.checked,E&&m.disabled),disabled:E,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),P&&P.onFocus&&P.onFocus(e)},onBlur:function(e){C&&C(e),P&&P.onBlur&&P.onBlur(e)},ref:o},B),i.createElement("input",(0,n.Z)({autoFocus:t,checked:s,defaultChecked:h,className:m.input,disabled:E,id:A&&x,name:y,onChange:function(e){var o=e.target.checked;N(o),Z&&Z(e,o)},readOnly:I,ref:k,required:S,tabIndex:M,type:z,value:j},v)),R?p:b)}));o.Z=(0,s.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p)},61248:function(e,o,t){var n=t(64836);o.Z=void 0;var r=n(t(45649)),a=t(80184),i=(0,r.default)((0,a.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");o.Z=i},3746:function(e,o,t){var n=t(64836);o.Z=void 0;var r=n(t(45649)),a=t(80184),i=(0,r.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");o.Z=i},20165:function(e,o,t){var n=t(64836);o.Z=void 0;var r=n(t(45649)),a=t(80184),i=(0,r.default)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");o.Z=i}}]);
//# sourceMappingURL=3898.5c27927b.chunk.js.map