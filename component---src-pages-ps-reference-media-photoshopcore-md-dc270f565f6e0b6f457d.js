"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[25995],{6019:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return s}});var n=a(87462),m=a(63366),r=(a(15007),a(64983)),d=a(91515),l=["components"],o={},i={_frontmatter:o},p=d.Z;function s(e){var t=e.components,a=(0,m.Z)(e,l);return(0,r.mdx)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"photoshopcore"},"photoshopCore"),(0,r.mdx)("p",null,"The module that allows access to specialized commands\nwithin the application. Various application state can be\nmodified or queried here."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"var PhotoshopCore = require('photoshop').core;\n")),(0,r.mdx)("h2",{id:"properties"},"Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Min Version"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"apiVersion"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"22.5"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"API Version declared by the plugin","'","s manifest.json under ","`","host.data.apiVersion","`"," field.")))),(0,r.mdx)("h2",{id:"functions"},"Functions"),(0,r.mdx)("h3",{id:"addnotificationlistener"},"addNotificationListener"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.3"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"Attach a listener to a Photoshop core event. A callback in the form\nof ",(0,r.mdx)("inlineCode",{parentName:"p"},"(eventName: string, descriptor: Descriptor) => void")," will be performed.\nThe event(s) below are supported:"),(0,r.mdx)("p",null,"group: '",(0,r.mdx)("inlineCode",{parentName:"p"},"UI"),"', event: '",(0,r.mdx)("inlineCode",{parentName:"p"},"userIdle"),"'"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Invoked after the Photoshop user idles for a specified number of seconds. See ",(0,r.mdx)("a",{parentName:"li",href:"/uxp-photoshop/ps_reference/media/photoshopcore/#setuseridletime"},"setUserIdleTime"),"."),(0,r.mdx)("li",{parentName:"ul"},"Invoked a second time with the descriptor ",(0,r.mdx)("inlineCode",{parentName:"li"},"{idleEnd: true}")," if the user is no longer idle. This signal can\nbe used to finish up tasks being performed during the idle time.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"await PhotoshopCore.addNotificationListener('UI', ['userIdle'], onUserIdle)\n")),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"group")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"events")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"),"[]")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"notifier")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"NotificationListener")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"calculatedialogsize"},"calculateDialogSize"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<{ ",(0,r.mdx)("inlineCode",{parentName:"p"},"height"),": ",(0,r.mdx)("em",{parentName:"p"},"number")," ; ",(0,r.mdx)("inlineCode",{parentName:"p"},"width"),": ",(0,r.mdx)("em",{parentName:"p"},"number"),"  }",">"),(0,r.mdx)("p",null,"Returns the effective size of a dialog."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"var idealSize = { width: 200, height: 500 }\n{ width, height} = await PhotoshopCore.calculateDialogSize(idealSize)\n")),(0,r.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"preferredSize")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"object"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"preferredSize.height")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"preferredSize.width")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"identifier?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"minimumSize?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"object"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"minimumSize.height")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"minimumSize.width")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"convertcolor"},"convertColor"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.0"),(0,r.mdx)("p",null,"RGBColorDescriptor ","|"," RGB32ColorDescriptor"),(0,r.mdx)("p",null,"Converts the given color (in descriptor form) to RGB,\nreturning the color descriptor."),(0,r.mdx)("p",null,"This is an internal API that is used for ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/solidcolor/"},"SolidColor"),"\nand all the other color classes."),(0,r.mdx)("p",null,"Currently, this API uses the application color settings\nfor conversion (Edit > Color Settings...). '\nIn the future, we will provide color conversion\nbased on embedded color profiles."),(0,r.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"sourceColor")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorDescriptor")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"targetModel")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorConversionModel.RGB")))),(0,r.mdx)("p",null,"LabColorDescriptor"),(0,r.mdx)("p",null,"Convert to Lab"),(0,r.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"sourceColor")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorDescriptor")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"targetModel")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorConversionModel.Lab")))),(0,r.mdx)("p",null,"HSBColorDescriptor"),(0,r.mdx)("p",null,"Convert to HSB"),(0,r.mdx)("h4",{id:"parameters-4"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"sourceColor")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorDescriptor")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"targetModel")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorConversionModel.HSB")))),(0,r.mdx)("p",null,"GrayscaleColorDescriptor"),(0,r.mdx)("p",null,"Convert to Grayscale"),(0,r.mdx)("h4",{id:"parameters-5"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"sourceColor")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorDescriptor")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"targetModel")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorConversionModel.Gray")))),(0,r.mdx)("p",null,"CMYKColorDescriptor"),(0,r.mdx)("p",null,"Convert to CMYK"),(0,r.mdx)("h4",{id:"parameters-6"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"sourceColor")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorDescriptor")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"targetModel")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ColorConversionModel.CMYK")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"endmodaltoolstate"},"endModalToolState"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"End the current modal tool editing state."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// close the modal dialog, cancelling changes\nawait PhotoshopCore.endModalToolState(false)\n")),(0,r.mdx)("h4",{id:"parameters-7"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"commit")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"boolean"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"executeasmodal"},"executeAsModal"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"ExecuteAsModal is needed when a plugin wants to make modifications to the Photoshop state.\nThis includes scenarios where the plugin wants to create or modify documents,\nor the plugin wants to update UI or preference state."),(0,r.mdx)("p",null,"ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"../executeasmodal"},"Modal Execution")," for details"),(0,r.mdx)("h4",{id:"parameters-8"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"targetFunction")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"(",(0,r.mdx)("inlineCode",{parentName:"td"},"executionContext"),": ",(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/options/executioncontext/"},(0,r.mdx)("em",{parentName:"a"},"ExecutionContext")),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"descriptor?"),": ",(0,r.mdx)("em",{parentName:"td"},"object"),") => ",(0,r.mdx)("em",{parentName:"td"},"Promise"),"<any",">")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/returnobjects/executeasmodaloptions/"},(0,r.mdx)("em",{parentName:"a"},"ExecuteAsModalOptions")))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getactivetool"},"getActiveTool"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<{ ",(0,r.mdx)("inlineCode",{parentName:"p"},"classID"),": ",(0,r.mdx)("em",{parentName:"p"},"string")," ; ",(0,r.mdx)("inlineCode",{parentName:"p"},"isModal"),": ",(0,r.mdx)("em",{parentName:"p"},"boolean")," ; ",(0,r.mdx)("inlineCode",{parentName:"p"},"key"),": ",(0,r.mdx)("em",{parentName:"p"},"string")," ; ",(0,r.mdx)("inlineCode",{parentName:"p"},"title"),": ",(0,r.mdx)("em",{parentName:"p"},"string"),"  }",">"),(0,r.mdx)("p",null,"Returns information about the active Photoshop tool."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{ title } = await PhotoshopCore.getActiveTool()\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getcpuinfo"},"getCPUInfo"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.1"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/objects/returnobjects/cpuinfo/"},(0,r.mdx)("em",{parentName:"a"},"CPUInfo"))),(0,r.mdx)("p",null,"Returns information about the host CPU."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'{ logicalCores, frequencyMhz, vendor } = PhotoshopCore.getCPUInfo()\nvar isAMD = vendor === "AMD"\nvar isARM = vendor === "ARM"\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getgpuinfo"},"getGPUInfo"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.1"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/objects/returnobjects/gpuinfo/"},(0,r.mdx)("em",{parentName:"a"},"GPUInfo"))),(0,r.mdx)("p",null,"Returns OpenGL and OpenCL information about the available graphics processor."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'{ gpuInfoList, clgpuInfoList } = PhotoshopCore.getGPUInfo()\nconsole.log(JSON.stringify(gpuInfoList))\n// > [{"version":"2.1 ATI-4.5.14","memoryMB":8192,"name":"16915464", ...}]\nconsole.log(JSON.stringify(clgpuInfoList))\n// > [{"version":"OpenCL 1.2 ","memoryMB":8589,"name":"AMD Radeon Pro 580X Compute Engine", ...}]\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getmenucommandstate"},"getMenuCommandState"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,r.mdx)("p",null,"Returns whether a command menu item is available for invoking."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// can a Fill be performed?\nvar canFill = await PhotoshopCore.getMenuCommandState({ commandID: 1042 })\n")),(0,r.mdx)("h4",{id:"parameters-9"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"object"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.commandID")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.scheduling?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Scheduling")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getmenucommandtitle"},"getMenuCommandTitle"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<string",">"),(0,r.mdx)("p",null,"Returns the localized menu title of the menu command item."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"var renameLayerStr = await PhotoshopCore.getMenuCommandTitle({ commandID: 2983 })\n")),(0,r.mdx)("h4",{id:"parameters-10"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"object"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.commandID?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.menuID?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.scheduling?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Scheduling")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getplugininfo"},"getPluginInfo"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.2"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<ActionDescriptor",">"),(0,r.mdx)("p",null,"Return information about the execution of the plugin.\nThis method is intended for developing plugins.\nShipping code should not use this method."),(0,r.mdx)("p",null,"The returned information include the following properties:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"numberOfPendingMainThreadTasks"),": Number of pending promises."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"batchPlayCount"),": Number of ",(0,r.mdx)("inlineCode",{parentName:"p"},"batchPlay")," calls since the plugin was loaded."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"mainThreadTimeOutCount"),": Number of JavaScript calls that have timed out.\nThis is typically caused by executing commands while Photoshop is modal without using\n",(0,r.mdx)("inlineCode",{parentName:"p"},"executeAsModal"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"v8HeapSize"),": V8 heap allocated for the plugin. This number is only accurate\nwhen loading plugins through the UXP Developer Tool."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"await PhotoshopCore.getPluginInfo()\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"ismodal"},"isModal"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.1"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"boolean")),(0,r.mdx)("p",null,"Returns true if the plugin is currently in a modal state using ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/media/photoshopcore/#executeasmodal"},"executeAsModal")),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"performmenucommand"},"performMenuCommand"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,r.mdx)("p",null,"Invokes the menu command via its ",(0,r.mdx)("inlineCode",{parentName:"p"},"commandID"),". Returns false\non failure, or if the command is not available."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// select all\nawait PhotoshopCore.performMenuCommand({ commandID: 1017 })\n")),(0,r.mdx)("h4",{id:"parameters-11"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"object"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.commandID")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.scheduling?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Scheduling")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"redrawdocument"},"redrawDocument"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.1"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<number",">"),(0,r.mdx)("p",null,"Request that Photoshop redraws (updates) a document immediately.\nThis method can be used to ensure that the document is updated\nimmediately while a user is interacting with a UI element (such as a slider).\nThis can provide a more responsive interaction.\nUpdating a document can be time consuming, and will often happen at a lower frequency\nthan UI events are received.\nPlugins may therefore want to implement a throttle between UI events and calls to\nredrawDocument.\nA throttle could be implemented by using a timer, or by avoiding to call redrawDocument\nfor a small amount of time after a previous request completes.\nredrawDocument returns the time that it took Photoshop to update the target document\nin seconds. This number can be used to refine the throttle.\nredrawDocument is only available to a plugin that is using apiVersion 2 or higher."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"await PhotoshopCore.redrawDocument({ documentID: 123})\n")),(0,r.mdx)("h4",{id:"parameters-12"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"object"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.documentID")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"setexecutionmode"},"setExecutionMode"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.2"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"The execution mode can be used while debugging a plugin. It is only available\nwhen the developer mode is enabled."),(0,r.mdx)("p",null,"The following example illustrate how to enable stacktraces for batchPlay commands\nthat fail. When stacktraces are enabled, then an error result descriptor from a\nbatchPlay request will include a stacktrace property. The property can be used when\nreporting bugs to Adobe."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"await PhotoshopCore.setExecutionMode({ enableErrorStacktraces: true })\n")),(0,r.mdx)("p",null,"The following illustrates how to enable console warnings when a promise is rejected:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"await PhotoshopCore.setExecutionMode({ logRejections: true })\n")),(0,r.mdx)("h4",{id:"parameters-13"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"object"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.enableErrorStacktraces?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"boolean"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.logRejections?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"boolean"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"setuseridletime"},"setUserIdleTime"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.3"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"Specifies the number of seconds a user must be idle on Photoshop before invoking the\nuserIdle event handler defined with ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/media/photoshopcore/#addnotificationlistener"},"addNotificationListener"),". An idleTime of 0\nturns off idle notifications."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"await PhotoshopCore.setUserIdleTime(3)\n")),(0,r.mdx)("h4",{id:"parameters-14"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"idleTime")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"number"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"showalert"},"showAlert"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"async")," : ",(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"Show a generic alert box to the user. 'OK' to dismiss."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// script has completed.\nawait PhotoshopCore.showAlert({ message: 'Operation successful'})\n")),(0,r.mdx)("h4",{id:"parameters-15"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"object"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options.message")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"translateuistring"},"translateUIString"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"22.5"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"string")),(0,r.mdx)("p",null,"Given a Photoshop ZString (of format ",(0,r.mdx)("inlineCode",{parentName:"p"},'"$$$/slash/separated/key=english default value"'),"),\nwill return the translated string for the current UI language"),(0,r.mdx)("h4",{id:"parameters-16"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"zstring")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-photoshopcore-md-dc270f565f6e0b6f457d.js.map