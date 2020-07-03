(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{371:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("该阶段之所以称为"),a("code",[t._v("layout")]),t._v("，因为该阶段的代码都是在"),a("code",[t._v("DOM")]),t._v("渲染完成（"),a("code",[t._v("mutation阶段")]),t._v("完成）后执行的。")]),t._v(" "),a("p",[t._v("该阶段触发的生命周期钩子和"),a("code",[t._v("hook")]),t._v("可以直接访问到已经改变后的"),a("code",[t._v("DOM")]),t._v("，即该阶段是可以参与"),a("code",[t._v("DOM layout")]),t._v("的阶段。")]),t._v(" "),a("h2",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),a("p",[t._v("与前两个阶段类似，"),a("code",[t._v("layout阶段")]),t._v("也是遍历"),a("code",[t._v("effectList")]),t._v("，执行函数。这里执行的是"),a("code",[t._v("commitLayoutEffects")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nnextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" firstEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitLayoutEffects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invariant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Should be working on an effect."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("captureCommitPhaseError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    nextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nnextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"commitlayouteffects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlayouteffects"}},[t._v("#")]),t._v(" commitLayoutEffects")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2224",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到"),a("code",[t._v("commitLayoutEffects")]),t._v("源码")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitLayoutEffects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FiberRoot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" committedLanes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Lanes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" effectTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectTag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用生命周期钩子和hook")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitLayoutEffectOnFiber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" committedLanes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 赋值ref")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitAttachRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    nextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("commitLayoutEffects")]),t._v("一共做了两件事：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("commitLayoutEffectOnFiber（调用生命周期钩子和 hook）")])]),t._v(" "),a("li",[a("p",[t._v("commitAttachRef（赋值 ref）")])])]),t._v(" "),a("h2",{attrs:{id:"commitlayouteffectonfiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlayouteffectonfiber"}},[t._v("#")]),t._v(" commitLayoutEffectOnFiber")]),t._v(" "),a("p",[a("code",[t._v("commitLayoutEffectOnFiber")]),t._v("方法会根据"),a("code",[t._v("fiber.tag")]),t._v("对不同类型的节点分别处理。")]),t._v(" "),a("blockquote",[a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L462",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到"),a("code",[t._v("commitLayoutEffectOnFiber")]),t._v("源码")])]),t._v(" "),a("ul",[a("li",[t._v("对于"),a("code",[t._v("ClassComponent")]),t._v("，他会通过"),a("code",[t._v("current === null?")]),t._v("区分是"),a("code",[t._v("mount")]),t._v("还是"),a("code",[t._v("update")]),t._v("，调用"),a("code",[t._v("componentDidMount")]),t._v("或"),a("code",[t._v("componentDidUpdate")]),t._v("。")])]),t._v(" "),a("p",[t._v("触发"),a("code",[t._v("状态更新")]),t._v("的"),a("code",[t._v("this.setState")]),t._v("如果赋值了第二个参数"),a("code",[t._v("回调函数")]),t._v("，也会在此时调用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i am update~"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("对于"),a("code",[t._v("FunctionComponent")]),t._v("，他会调用"),a("code",[t._v("useLayoutEffect hook")]),t._v("的回调函数。")])]),t._v(" "),a("p",[t._v("在上一节介绍"),a("RouterLink",{attrs:{to:"/renderer/mutation.html#update-effect"}},[t._v("Update effect")]),t._v("时介绍过，"),a("code",[t._v("mutation阶段")]),t._v("会执行"),a("code",[t._v("useLayoutEffect hook")]),t._v("的消耗函数。结合这里我们可以发现，"),a("code",[t._v("useLayoutEffect hook")]),t._v("从上一次更新的销毁函数调用到本次更新的回调函数调用是同步执行的。")],1),t._v(" "),a("p",[t._v("而"),a("code",[t._v("useEffect")]),t._v("则需要先调度，在"),a("code",[t._v("commit阶段")]),t._v("完成后再异步执行。这就是"),a("code",[t._v("useLayoutEffect")]),t._v("与"),a("code",[t._v("useEffect")]),t._v("的区别。")]),t._v(" "),a("ul",[a("li",[t._v("对于"),a("code",[t._v("HostRoot")]),t._v("，即"),a("code",[t._v("rootFiber")]),t._v("，如果赋值了第三个参数"),a("code",[t._v("回调函数")]),t._v("，也会在此时调用。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i am mount~"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"commitattachref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitattachref"}},[t._v("#")]),t._v(" commitAttachRef")]),t._v(" "),a("p",[a("code",[t._v("commitLayoutEffects")]),t._v("会做的第二件事是"),a("code",[t._v("commitAttachRef")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberCommitWork.new.js#L826",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到"),a("code",[t._v("commitAttachRef")]),t._v("源码")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitAttachRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("finishedWork"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ref "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取DOM实例")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" instanceToUse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" HostComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        instanceToUse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPublicInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        instanceToUse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" ref "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果ref是函数形式，调用回调函数")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instanceToUse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果ref是ref实例形式，赋值ref.current")]),t._v("\n      ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instanceToUse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("代码逻辑很简单：获取"),a("code",[t._v("DOM")]),t._v("实例，更新"),a("code",[t._v("ref")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"current-fiber树切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-fiber树切换"}},[t._v("#")]),t._v(" current Fiber树切换")]),t._v(" "),a("p",[t._v("至此，整个"),a("code",[t._v("layout阶段")]),t._v("就结束了。")]),t._v(" "),a("p",[t._v("在结束本节的学习前，我们关注下这行代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" finishedWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1954",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到这行代码")])]),t._v(" "),a("p",[t._v("在"),a("RouterLink",{attrs:{to:"/process/doubleBuffer.html#什么是-双缓存"}},[t._v("双缓存机制一节")]),t._v("我们介绍过，"),a("code",[t._v("workInProgress Fiber树")]),t._v("在"),a("code",[t._v("commit阶段")]),t._v("完成渲染后会变为"),a("code",[t._v("current Fiber树")]),t._v("。这行代码的作用就是切换"),a("code",[t._v("rootFiberNode")]),t._v("指向的"),a("code",[t._v("current Fiber树")]),t._v("。")],1),t._v(" "),a("p",[t._v("那么这行代码为什么在这里呢？（在"),a("code",[t._v("mutation阶段")]),t._v("结束后，"),a("code",[t._v("layout阶段")]),t._v("开始前。）")]),t._v(" "),a("p",[t._v("我们知道"),a("code",[t._v("componentWillUnmount")]),t._v("会在"),a("code",[t._v("mutation阶段")]),t._v("执行。此时"),a("code",[t._v("current Fiber树")]),t._v("还指向前一次更新的"),a("code",[t._v("Fiber树")]),t._v("，在生命周期钩子内获取的"),a("code",[t._v("DOM")]),t._v("还是更新前的。")]),t._v(" "),a("p",[a("code",[t._v("componentDidMount")]),t._v("和"),a("code",[t._v("componentDidUpdate")]),t._v("会在"),a("code",[t._v("layout阶段")]),t._v("执行。此时"),a("code",[t._v("current Fiber树")]),t._v("已经指向更新后的"),a("code",[t._v("Fiber树")]),t._v("，在生命周期钩子内获取的"),a("code",[t._v("DOM")]),t._v("就是更新后的。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("从这节我们学到，"),a("code",[t._v("layout阶段")]),t._v("会遍历"),a("code",[t._v("effectList")]),t._v("，依次执行"),a("code",[t._v("commitLayoutEffects")]),t._v("。该方法的主要工作为“根据"),a("code",[t._v("effectTag")]),t._v("调用不同的处理函数处理"),a("code",[t._v("Fiber")]),t._v("并更新"),a("code",[t._v("ref")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);