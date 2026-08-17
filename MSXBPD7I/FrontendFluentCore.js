import{C as e,D as t,E as n,I as r,T as i,f as a,k as o,l as s,m as c,v as ee,w as l}from"./InterProcessCommunication.js";import{$ as u,A as te,B as ne,C as d,D as f,E as re,F as ie,G as p,H as m,I as ae,J as oe,K as h,L as se,M as ce,N as le,O as ue,P as g,Q as _,R as de,S as fe,T as pe,U as v,V as y,W as b,X as x,Y as S,Z as C,_ as w,a as T,b as E,c as D,d as O,f as k,g as A,h as j,i as M,j as N,k as P,l as F,m as I,n as L,o as R,p as z,q as B,r as me,s as he,t as ge,u as _e,v as ve,w as ye,x as be,y as xe,z as Se}from"./Vendor.js";import{n as V}from"./DownloadTask.js";import{n as H,r as Ce,t as we}from"./InteractiveFileContentProvider.js";var Te=h`
    :host {
        box-shadow: var(--shadow4);
        border-radius: var(--borderRadiusLarge);
    }

    slot {
        display: content;
    }
`,Ee=b`<slot></slot>`,FluentCard=class extends B{};FluentCard.define({name:`fluent-card`,template:Ee,styles:Te});var De=h`
    :host {
        display: contents;
    }
`,Oe=b`
    <input ${p(`input`)} type="number" style="padding: 0.5em;" min=${e=>e.min} max=${e=>e.max} value=${e=>e.value.toString()} @change=${(e,t)=>e.DispatchChangeEvent()}></input>
`,FluentNumberField=class extends B{constructor(...e){super(...e),this.value=0}DispatchChangeEvent(){let e=Math.max(this.min,Math.min(this.max,parseInt(this.input.value)));if(e!=this.value){this.value=e;let t=new Event(`change`,{bubbles:!0,cancelable:!1,composed:!1});Object.defineProperty(t,"target",{value:this}),this.dispatchEvent(t)}}};H([S],FluentNumberField.prototype,`min`,void 0),H([S],FluentNumberField.prototype,`max`,void 0),H([S],FluentNumberField.prototype,`value`,void 0),FluentNumberField.define({name:`fluent-number-field`,template:Oe,styles:De});var U={Scope:`frontend.fluent-core`,Theme:`theme`,PanelBookmarks:`panel.bookmarks`,PanelDownloads:`panel.downloads`},W={key:`web-dark`,value:ne,label:r.Frontend_FluentCore_Settings_ThemeMode_WebDark},G={key:`web-light`,value:y,label:r.Frontend_FluentCore_Settings_ThemeMode_WebLight},K=new Map([[W.key,W],[G.key,G]]),SettingsManager=class{#e;#t;constructor(){this.#e=HakuNeko.SettingsManager.OpenScope(),this.#t=HakuNeko.SettingsManager.OpenScope(U.Scope),this.settingThemeChoice=new l(U.Theme,r.Frontend_FluentCore_Settings_ThemeMode_Label,r.Frontend_FluentCore_Settings_ThemeMode_Description,G.key,W,G),this.SettingSelectedTheme=K.get(this.settingThemeChoice.Value),this.settingPanelBookmarksCheck=new e(U.PanelBookmarks,r.Frontend_FluentCore_Settings_ShowBookmarksPanel_Label,r.Frontend_FluentCore_Settings_ShowBookmarksPanel_Description,!0),this.SettingPanelBookmarks=this.settingPanelBookmarksCheck.Value,this.settingPanelDownloadsCheck=new e(U.PanelDownloads,r.Frontend_FluentCore_Settings_ShowDownloadsPanel_Label,r.Frontend_FluentCore_Settings_ShowDownloadsPanel_Description,!1),this.SettingPanelDownloads=this.settingPanelDownloadsCheck.Value,this.ShowSettingsDialog=()=>{},this.SettingLanguage=this.#e.Get(c.Language),this.SettingMediaDirectory=this.#e.Get(c.MediaDirectory),this.settingThemeChoice.Subscribe(e=>this.SettingSelectedTheme=K.get(e)),this.settingPanelBookmarksCheck.Subscribe(e=>this.SettingPanelBookmarks=e),this.settingPanelDownloadsCheck.Subscribe(e=>this.SettingPanelDownloads=e),this.Initialize()}async Initialize(){await this.#t.Initialize(this.settingThemeChoice,this.settingPanelBookmarksCheck,this.settingPanelDownloadsCheck),this.SettingPanelBookmarks=this.settingPanelBookmarksCheck.Value,this.SettingPanelDownloads=this.settingPanelDownloadsCheck.Value}get GlobalSettings(){return[...this.#e]}get FrontendSettings(){return[...this.#t]}SettingSelectedThemeChanged(){this.settingThemeChoice.Value=this.SettingSelectedTheme.key,Se(this.SettingSelectedTheme.value)}SettingPanelBookmarksChanged(){this.settingPanelBookmarksCheck.Value=this.SettingPanelBookmarks}SettingPanelDownloadsChanged(){this.settingPanelDownloadsCheck.Value=this.SettingPanelDownloads}};H([C],SettingsManager.prototype,`SettingSelectedTheme`,void 0),H([C],SettingsManager.prototype,`SettingPanelBookmarks`,void 0),H([C],SettingsManager.prototype,`SettingPanelDownloads`,void 0),H([C],SettingsManager.prototype,`ShowSettingsDialog`,void 0);var q=_.createContext(),ke=h`
    :host {
        /* Extend/Override the default value of '--body-font' to support colored emoji flags */
        --body-font: NotoColorEmoji-Flags, 'Segoe UI Variable', 'Segoe UI', sans-serif;

        font-family: var(--body-font);
        font-size: var(--fontSizeBase300);
        gap: 0;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: min-content min-content minmax(0, 1fr);
        border: 1px var(--colorNeutralStroke3) solid;
        border-radius: var(--borderRadiusXLarge);
        height: calc(100vh - 2 * var(--strokeWidthThin));
        background-color: var(--colorNeutralBackground2);
        color: var(--colorNeutralForeground1);
        user-select: none;
    }

    #titlebar {
    }

    #widgets {
        display: flex;
        flex-direction: row;
        gap: var(--spacingHorizontalS);
        margin: var(--spacingHorizontalS);
    }

    #preview {
    }

    #sidepanel {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: var(--spacingHorizontalS);
    }

    #mainpanel {
        flex: 3;
        gap: var(--spacingHorizontalS);
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: min-content min-content minmax(0, 1fr);
    }

    #bookmark-list-panel {
        flex: 1;
        min-height: 0;
        /*border: 1px dotted green;*/
    }

    #download-manager-panel {
        flex: 1;
        min-height: 0;
        /*border: 1px dotted blue;*/
    }

    #bookmark-list, #download-manager, #website-select, #media-title-select, #media-item-list {
        height: 100%;
    }
`,Ae=b`
    <div id="sidepanel">
        <fluent-card id="bookmark-list-panel" style="display: ${e=>e.SettingsManager.SettingPanelBookmarks?`block`:`none`}">
            <fluent-bookmark-list id="bookmark-list"
                @bookmarkClicked=${(e,t)=>e.selectedTitle=t.event.detail}></fluent-bookmark-list>
        </fluent-card>
        <!-- TODO: Download Panel not shown, probably not Injected/Initialized? -->
        <fluent-card id="download-manager-panel" style="display: ${e=>e.SettingsManager.SettingPanelDownloads?`block`:`none`}">
            <fluent-download-manager id="download-manager"></fluent-download-manager>
        </fluent-card>
    </div>
`,je=b`
    <div id="widgets">
        ${m(e=>e.SettingsManager.SettingPanelBookmarks||e.SettingsManager.SettingPanelDownloads,Ae)}
        <div id="mainpanel">
            <fluent-card>
                <fluent-website-select id="website-select" :Entries=${()=>HakuNeko.PluginController.WebsitePlugins} :Selected=${e=>e.selectedWebsite}
                    @selectedChanged=${(e,t)=>e.SelectedWebsiteChanged(t.event)}>
                </fluent-website-select>
            </fluent-card>
            <fluent-card>
                <fluent-media-title-select id="media-title-select" :Container=${e=>e.selectedWebsite} :Selected=${e=>e.selectedTitle}
                    @selectedChanged=${(e,t)=>e.SelectedMediaTitleChanged(t.event)}>
                </fluent-media-title-select>
            </fluent-card>
            <fluent-card>
                <fluent-media-item-list id="media-item-list" :Container=${e=>e.selectedTitle}
                    @previewClicked=${(e,t)=>e.previewEntry=t.event.detail}></fluent-media-item-list>
            </fluent-card>
        </div>
    </div>
`,Me=b`
    <fluent-media-item-preview id="preview" :Entry=${e=>e.previewEntry}
        @entryChanged=${(e,t)=>e.previewEntry=t.eventDetail()}></fluent-media-item-preview>
`,Ne=b`
    <fluent-settings-dialog></fluent-settings-dialog>
    <fluent-titlebar id="titlebar"></fluent-titlebar>
    ${m(e=>!e.previewEntry,je)}
    ${m(e=>e.previewEntry,Me)}
`,J=class App extends B{SelectedWebsiteChanged(e){this.selectedWebsite=e.detail,this.selectedWebsite?.IsSameAs(this.selectedTitle?.Parent)||(this.selectedTitle=void 0)}SelectedMediaTitleChanged(e){this.selectedTitle=e.detail,this.selectedTitle&&(this.selectedWebsite||this.selectedTitle?.Parent)&&!this.selectedWebsite?.IsSameAs(this.selectedTitle?.Parent)&&(this.selectedWebsite=this.selectedTitle?.Parent)}};H([q],J.prototype,`SettingsManager`,void 0),H([C],J.prototype,`selectedWebsite`,void 0),H([C],J.prototype,`selectedTitle`,void 0),H([C],J.prototype,`previewEntry`,void 0),J=H([oe({name:`fluent-app`,template:Ne,styles:ke})],J);var WindowManager=class{constructor(e){this.windowController=e,this.IsMaximized=!1,this.windowController.Maximized.Subscribe(e=>this.IsMaximized=e)}Minimize(){this.windowController.Minimize()}Maximize(){this.windowController.Maximize()}Restore(){this.windowController.Restore()}Close(){this.windowController.Close()}};H([C],WindowManager.prototype,`IsMaximized`,void 0);var Y=_.createContext();function __decorateParam(e,t){return function(n,r){t(n,r,e)}}var X=class LocalizationProvider{constructor(e){this.SettingsManager=e,this.Locale=a(),this.SettingsManager.SettingLanguage.Subscribe(()=>this.Locale=a())}Get(e,...t){return this.Locale[e](...t)}};H([C],X.prototype,`Locale`,void 0),X=H([__decorateParam(0,q)],X);var Z=_.createContext(),Pe=h`

    :host {
        gap: 0;
        display: grid;
        align-items: center;
        grid-template-columns: max-content auto max-content;
        border-top-left-radius: var(--borderRadiusXLarge);
        border-top-right-radius: var(--borderRadiusXLarge);
    }

    #menu {
        display: block;
    }

    #menu-button {
        min-width: unset !important;
    }

    #title {
        font-weight: bold;
        text-align: center;
        -webkit-app-region: drag;
    }

    #controls {
        display: flex;
    }

    #controls > fluent-button#close:hover {
        background-color: var(--colorStatusDangerBackground2) !important;
    }

    #menu-overlay {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2147483647;
    }

    fluent-menu-item div[slot="start"] {
        display: flex;
    }
`,Fe=b`
    <fluent-button icon-only appearance="transparent" :title=${e=>e.Localization.Locale.Frontend_FluentCore_Button_ToggleTheme_Description(e.Localization.Get(G.label))} :innerHTML=${()=>se} @click=${e=>e.SettingsManager.SettingSelectedTheme=G}></fluent-button>
`,Ie=b`
    <fluent-button icon-only appearance="transparent" :title=${e=>e.Localization.Locale.Frontend_FluentCore_Button_ToggleTheme_Description(e.Localization.Get(W.label))} :innerHTML=${()=>de} @click=${e=>e.SettingsManager.SettingSelectedTheme=W}></fluent-button>
`,Le=b`
    <fluent-menu id="menu">
        <fluent-menu-button id="menu-button" slot="trigger" appearance="subtle" title="${e=>e.Localization.Locale.Frontend_FluentCore_Menu_Description()}" :innerHTML=${()=>N}></fluent-menu-button>
        <fluent-menu-list id="menu-popup">
            <fluent-menu-item role="menuitemcheckbox" title="${e=>e.Localization.Locale.Frontend_FluentCore_Settings_ShowBookmarksPanel_Description()}" :checked=${e=>e.SettingsManager.SettingPanelBookmarks} @change=${(e,t)=>e.SettingsManager.SettingPanelBookmarks=t.eventTarget().checked}>
                <div slot="start" :innerHTML=${()=>ie}></div>
                ${e=>e.Localization.Locale.Frontend_FluentCore_Settings_ShowBookmarksPanel_Label()}
            </fluent-menu-item>
            <fluent-menu-item role="menuitemcheckbox" title="${e=>e.Localization.Locale.Frontend_FluentCore_Settings_ShowDownloadsPanel_Description()}" :checked=${e=>e.SettingsManager.SettingPanelDownloads} @change=${(e,t)=>e.SettingsManager.SettingPanelDownloads=t.eventTarget().checked}>
                <div slot="start" :innerHTML=${()=>ae}></div>
                ${e=>e.Localization.Locale.Frontend_FluentCore_Settings_ShowDownloadsPanel_Label()}
            </fluent-menu-item>
            <fluent-divider></fluent-divider>
            <fluent-menu-item title="${e=>e.Localization.Locale.Frontend_FluentCore_Menu_OpenSettings_Description()}" @click=${e=>e.ShowGlobalSettingsDialog()}>
                <div slot="start" :innerHTML=${()=>f}></div>
                ${e=>e.Localization.Locale.Frontend_FluentCore_Menu_OpenSettings_Label()}
            </fluent-menu-item>
            <fluent-menu-item title="${e=>e.Localization.Locale.Frontend_FluentCore_Menu_ImportBookmarks_Description()}" @click=${e=>e.ImportBookmarks()}>
                <div slot="start" :innerHTML=${()=>g}></div>    
                ${e=>e.Localization.Locale.Frontend_FluentCore_Menu_ImportBookmarks_Label()}
            </fluent-menu-item>
            <fluent-menu-item title="${e=>e.Localization.Locale.Frontend_FluentCore_Menu_ExportBookmarks_Description()}" @click=${e=>e.ExportBookmarks()}>
                <div slot="start" :innerHTML=${()=>le}></div>   
                ${e=>e.Localization.Locale.Frontend_FluentCore_Menu_ExportBookmarks_Label()}
            </fluent-menu-item>
            <fluent-divider></fluent-divider>
            <fluent-menu-item title="${e=>e.Localization.Locale.Settings_FeatureFlags_Description()}">
                <div slot="start" :innerHTML=${()=>te}></div>
                ${e=>e.Localization.Locale.Settings_FeatureFlags_Label()}
                <fluent-menu-list slot="submenu">
                    <fluent-menu-item role="menuitemcheckbox" title="${e=>e.Localization.Locale[HakuNeko.FeatureFlags.HideSplashScreen.Description]()}" :checked=${()=>!HakuNeko.FeatureFlags.HideSplashScreen.Value} @change=${(e,t)=>HakuNeko.FeatureFlags.HideSplashScreen.Value=!t.eventTarget().checked}>
                        <div slot="start" :innerHTML=${()=>ce}></div>
                        ${e=>e.Localization.Locale[HakuNeko.FeatureFlags.HideSplashScreen.Label]()}
                    </fluent-menu-item>
                    <fluent-menu-item role="menuitemcheckbox" title="${e=>e.Localization.Locale[HakuNeko.FeatureFlags.VerboseFetchWindow.Description]()}" :checked=${()=>HakuNeko.FeatureFlags.VerboseFetchWindow.Value} @change=${(e,t)=>HakuNeko.FeatureFlags.VerboseFetchWindow.Value=t.eventTarget().checked}>
                        <div slot="start" :innerHTML=${()=>P}></div>
                        ${e=>e.Localization.Locale[HakuNeko.FeatureFlags.VerboseFetchWindow.Label]()}
                    </fluent-menu-item>
                    <fluent-menu-item role="menuitemcheckbox" title="${e=>e.Localization.Locale[HakuNeko.FeatureFlags.CrowdinTranslationMode.Description]()}" :checked=${()=>HakuNeko.FeatureFlags.CrowdinTranslationMode.Value} @change=${(e,t)=>HakuNeko.FeatureFlags.CrowdinTranslationMode.Value=t.eventTarget().checked}>
                        <div slot="start" :innerHTML=${()=>ue}></div>
                        ${e=>e.Localization.Locale[HakuNeko.FeatureFlags.CrowdinTranslationMode.Label]()}
                    </fluent-menu-item>
                </fluent-menu-list>
            </fluent-menu-item>
        </fluent-menu-list>
    </fluent-menu>
    <div id="title">${e=>e.Localization.Locale.Frontend_Product_Title()}</div>
    <div id="controls">
        ${e=>e.SettingsManager.SettingSelectedTheme===G?Ie:Fe}
        <fluent-button icon-only appearance="subtle" title="${e=>e.Localization.Locale.Frontend_FluentCore_Window_ButtonMinimize_Description()}" :innerHTML=${()=>re} @click="${e=>e.WindowManager.Minimize()}"></fluent-button>
        <fluent-button icon-only appearance="subtle" title="${e=>e.WindowManager.IsMaximized?e.Localization.Locale.Frontend_FluentCore_Window_ButtonRestore_Description():e.Localization.Locale.Frontend_FluentCore_Window_ButtonMaximize_Description()}" :innerHTML=${e=>e.WindowManager.IsMaximized?ye:pe} @click="${e=>e.WindowManager.IsMaximized?e.WindowManager.Restore():e.WindowManager.Maximize()}"></fluent-button>
        <fluent-button icon-only id="close" appearance="subtle" title="${e=>e.Localization.Locale.Frontend_FluentCore_Window_ButtonClose_Description()}" :innerHTML=${()=>d} @click=${e=>e.WindowManager.Close()}></fluent-button>
    </div>
`,TitleBar=class extends B{constructor(...e){super(...e),this.maximized=!1,this.settings=!1}ShowGlobalSettingsDialog(){this.SettingsManager.ShowSettingsDialog(...this.SettingsManager.GlobalSettings)}async ImportBookmarks(){try{let e=await HakuNeko.BookmarkPlugin.Import();console.log(e)}catch(e){console.error(e)}}async ExportBookmarks(){try{let e=await HakuNeko.BookmarkPlugin.Export();console.log(e)}catch(e){console.error(e)}}};H([Y],TitleBar.prototype,`WindowManager`,void 0),H([Z],TitleBar.prototype,`Localization`,void 0),H([q],TitleBar.prototype,`SettingsManager`,void 0),H([C],TitleBar.prototype,`maximized`,void 0),H([C],TitleBar.prototype,`settings`,void 0),TitleBar.define({name:`fluent-titlebar`,template:Le,styles:Pe});function CreateMediaItemTemplate(e,t=e=>!0){let n=[`height: var(--fontSizeBase600)`,`padding: var(--spacingHorizontalXS)`,`border - top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle)`,`gap: var(--spacingHorizontalXS)`,`display: grid`,`align-items: center`,`grid-template-rows: min-content`,`grid-template-columns: min-content min-content 1fr`,`cursor: pointer`].join(`;`),r=[n,`opacity: 0.5`].join(`;`),i=[`margin-right: var(--spacingHorizontalXS)`,`height: inherit`].join(`;`),a=[`overflow: hidden`,`white-space: nowrap`,`text-overflow: ellipsis`].join(`;`),onMouseOver=(e,t)=>{let n=t.eventTarget();n.style.backgroundColor=getComputedStyle(t.eventTarget()).getPropertyValue(`--colorNeutralBackground1Hover`)},onMouseOut=(e,t)=>{t.eventTarget().style.backgroundColor=``};return b`
        <div style="${e=>t(e)?n:r}" @mouseover="${onMouseOver}" @mouseout="${onMouseOut}" @click="${e}">
            <img style="${i}" src="${e=>e.Parent.Icon}"></img>
            <div style="${a}">${e=>e.Title}</div>
        </div>
    `}var Re=h`

    :host {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: min-content min-content minmax(0, 1fr);
    }

    #header {
        padding: var(--spacingHorizontalS);
        background-color: var(--colorNeutralBackground4);
        display: grid;
        align-items: center;
        grid-template-rows: auto;
        grid-template-columns: minmax(0, 1fr) max-content;
    }

    #title {
        text-transform: uppercase;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .hint {
        color: var(--colorNeutralForeground4);
    }

    .missing {
        opacity: 0.5;
    }

    #searchcontrol {
        padding: var(--spacingHorizontalS);
        border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        border-bottom: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        background-color: var(--colorNeutralBackground4);
    }

    #entries {
        padding: 0;
        margin: 0;
    }
`,ze=b`
    <div id="header">
        <div id="title">${e=>e.Localization.Locale.Frontend_FluentCore_BookmarkList_Heading()}</div>
        <div class="hint">${e=>e.filtered?.length??`┄`}／${e=>e.Entries?.length??`┄`}</div>
    </div>
    <div id="searchcontrol">
        <fluent-searchbox placeholder="" @predicate=${(e,t)=>e.Match=t.event.detail}></fluent-searchbox>
    </div>
    <fluent-lazy-scroll id="entries" :Items=${e=>e.filtered} :Template=${e=>CreateMediaItemTemplate(e.SelectEntry.bind(e),e=>!e?.IsOrphaned)}></fluent-lazy-scroll>
`,BookmarkList=class extends B{constructor(...e){super(...e),this.Entries=[],this.Match=()=>!0,this.filtered=[],this.updating=!1,this.BookmarksChanged=function(){this.Entries=HakuNeko.BookmarkPlugin.Entries.Value.slice()}.bind(this)}connectedCallback(){super.connectedCallback(),HakuNeko.BookmarkPlugin.Entries.Subscribe(this.BookmarksChanged),this.BookmarksChanged()}disconnectedCallback(){super.disconnectedCallback(),HakuNeko.BookmarkPlugin.Entries.Unsubscribe(this.BookmarksChanged)}EntriesChanged(){this.FilterEntries()}MatchChanged(){this.FilterEntries()}SelectEntry(e){this.$emit(`bookmarkClicked`,e)}FilterEntries(){this.filtered=this.Entries.filter(e=>this.Match(e.Title))}};H([Z],BookmarkList.prototype,`Localization`,void 0),H([C],BookmarkList.prototype,`Entries`,void 0),H([C],BookmarkList.prototype,`Match`,void 0),H([C],BookmarkList.prototype,`filtered`,void 0),H([C],BookmarkList.prototype,`updating`,void 0),BookmarkList.define({name:`fluent-bookmark-list`,template:ze,styles:Re});var Be=h`

    :host {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: min-content min-content minmax(0, 1fr);
    }

    #header {
        padding: var(--spacingHorizontalS);
        background-color: var(--colorNeutralBackground4);
        display: grid;
        align-items: center;
        grid-template-rows: auto;
        grid-template-columns: minmax(0, 1fr) max-content;
    }

    #title {
        text-transform: uppercase;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .hint {
        color: var(--colorNeutralForeground4);
    }

    #searchcontrol {
        padding: var(--spacingHorizontalS);
        border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        border-bottom: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        background-color: var(--colorNeutralBackground4);
    }

    #entries {
        overflow-y: scroll;
        overflow-x: hidden;
    }
`;function CreateItemTemplate$3(e){return b`<fluent-download-manager-task :Entry=${e=>e}></fluent-download-manager-task>`}var Ve=b`
    <div id="header">
        <div id="title">${e=>e.Localization.Locale.Frontend_FluentCore_DownloadManager_Heading()}</div>
        <div class="hint">${e=>e.filtered?.length??`┄`}／${e=>e.Entries?.length??`┄`}</div>
    </div>
    <div id="searchcontrol">
        <fluent-searchbox placeholder="" @predicate=${(e,t)=>e.Match=t.event.detail}></fluent-searchbox>
    </div>
    <div id="entries">
        ${v(e=>e.filtered,CreateItemTemplate$3)}
    </div>
`,DownloadManager=class extends B{constructor(...e){super(...e),this.Entries=[],this.Match=()=>!0,this.filtered=[],this.DownloadsChanged=async()=>{this.Entries=HakuNeko.DownloadManager.Queue.Value.slice()}}connectedCallback(){super.connectedCallback(),HakuNeko.DownloadManager.Queue.Subscribe(this.DownloadsChanged),this.DownloadsChanged()}disconnectedCallback(){super.disconnectedCallback(),HakuNeko.DownloadManager.Queue.Unsubscribe(this.DownloadsChanged)}EntriesChanged(){this.FilterEntries()}MatchChanged(){this.FilterEntries()}FilterEntries(){this.filtered=this.Entries.filter(e=>this.Match(e.Media.Title)).slice(0,500)}};H([Z],DownloadManager.prototype,`Localization`,void 0),H([C],DownloadManager.prototype,`Entries`,void 0),H([C],DownloadManager.prototype,`Match`,void 0),H([C],DownloadManager.prototype,`filtered`,void 0),DownloadManager.define({name:`fluent-download-manager`,template:Ve,styles:Be});var He={[V.Queued]:fe,[V.Paused]:be,[V.Downloading]:E,[V.Processing]:xe,[V.Failed]:ve,[V.Completed]:w},Ue=h`

    :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacingHorizontalXS);
        padding: var(--spacingHorizontalXS);
        border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
    }

    .mediatitle {
        font-weight: bold;
    }

    .mediatitle, .mediaitem {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .controls {
        gap: var(--spacingHorizontalXS);
        display: grid;
        align-items: center;
        grid-template-columns:  minmax(0, 1fr) min-content min-content;
        white-space: nowrap;
    }

    .status {
        display: contents;
    }

    .status.${V.Queued} svg {
        opacity: 0.5;
    }

    .status.${V.Paused} svg {
    }

    .status.${V.Downloading} svg {
    }

    .status.${V.Processing} svg {
    }

    .status.${V.Failed} svg {
        cursor: pointer;
        fill: #FF6060;
    }

    .status.${V.Completed} svg {
        fill: #20C040;
    }
`,We=b`
    <div class="mediatitle">${e=>e.Entry?.Media.Parent.Title}</div>
    <div class="mediaitem">${e=>e.Entry?.Media.Title}</div>
    <div class="controls">
        <fluent-progress-bar min="0" max="1" :paused=${()=>!1} :value=${e=>e.progress}></fluent-progress-bar>
        <div class="status ${e=>e.status}" :innerHTML=${e=>He[e.status]} @click=${e=>e.ShowErrors()}></div>
        <fluent-button icon-only size="small" appearance="transparent" title="${e=>e.Localization.Locale.Frontend_FluentCore_DownloadManagerTask_RemoveButton_Description()}" :innerHTML=${()=>A} @click=${e=>HakuNeko.DownloadManager.Dequeue(e.Entry)}></fluent-button>
    </div>
`,DownloadManagerTask=class extends B{constructor(...e){super(...e),this.progress=0,this.UpdateStatus=function(e){this.status=e}.bind(this),this.UpdateProgress=function(e){this.progress=e??0}.bind(this)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.Entry?.Status.Unsubscribe(this.UpdateStatus),this.Entry?.Progress.Unsubscribe(this.UpdateProgress)}EntryChanged(e,t){e?.Status.Unsubscribe(this.UpdateStatus),t?.Status.Subscribe(this.UpdateStatus),e?.Progress.Unsubscribe(this.UpdateProgress),t?.Progress.Subscribe(this.UpdateProgress),this.UpdateStatus(this.Entry?.Status.Value),this.UpdateProgress(this.Entry?.Progress.Value)}ShowErrors(){if(this.Entry.Errors.Value.length>0){let e=this.Entry.Errors.Value.map(e=>`<div>${e.message}</div><pre>${e.stack}</pre>`).join(`<hr>`);window.open(null,`_blank`,[`titlebar=no`,`menubar=no`,`toolbar=no`,`location=no`,`status=no`,`scrollbars=yes`,`resizable=yes`,`width=800`,`height=480`].join(`, `)).document.write(e)}}};H([Z],DownloadManagerTask.prototype,`Localization`,void 0),H([C],DownloadManagerTask.prototype,`Entry`,void 0),H([C],DownloadManagerTask.prototype,`status`,void 0),H([C],DownloadManagerTask.prototype,`progress`,void 0),DownloadManagerTask.define({name:`fluent-download-manager-task`,template:We,styles:Ue});var Ge=h`

    :host {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: min-content minmax(0, 1fr);
    }

    #heading {
        background-color: var(--colorNeutralBackground4);
        padding: var(--spacingHorizontalXS);
        gap: var(--spacingHorizontalS);
        display: grid;
        align-items: center;
        grid-template-columns: max-content 1fr max-content;
    }

    #heading:hover {
        cursor: pointer;
        background-color: var(--colorNeutralBackground1Hover);
    }

    #heading #logo {
        height: var(--fontSizeBase600);
    }

    #heading #title {
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #controls {
        display: flex;
        align-items: center;
    }

    #controls .hint {
        margin-left: var(--spacingHorizontalXS);
        margin-right: var(--spacingHorizontalXS);
    }

    #dropdown {
        height: 100%;
        display: none;
    }

    #searchcontrol {
        padding: var(--spacingHorizontalS);
        border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        border-bottom: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        background-color: var(--colorNeutralBackground4);
    }

    #button-update-entries.updating svg {
        animation: spinning 1.5s linear infinite;
    }

    @keyframes spinning {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    #entries {
        height: 320px;
        padding: 0;
        margin: 0;
    }

    .hint {
        color: var(--colorNeutralForeground4);
    }
`,Ke=b`
    <fluent-button icon-only id="add-favorite-button" appearance="transparent" title="${e=>e.Localization.Locale.Frontend_FluentCore_WebsiteSelect_AddFavoriteButton_Description()}" ?disabled=${e=>!e.Selected} :innerHTML=${()=>z} @click=${(e,t)=>e.AddFavorite(t.event)}></fluent-button>
`,qe=b`
    <fluent-button icon-only id="remove-favorite-button" appearance="transparent" title="${e=>e.Localization.Locale.Frontend_FluentCore_WebsiteSelect_RemoveFavoriteButton_Description()}" ?disabled=${e=>!e.Selected} :innerHTML=${()=>k} @click=${(e,t)=>e.RemoveFavorite(t.event)}></fluent-button>
`;function CreateItemTemplate$2(e,t=e=>!0){let n=[`height: 42px`,`padding: var(--spacingHorizontalXS)`,`border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle)`,`gap: var(--spacingHorizontalXS)`,`display: grid`,`grid-template-rows: min-content 1fr`,`grid-template-columns: min-content 1fr`,`cursor: pointer`].join(`;`),r=[n,`opacity: 0.5`].join(`;`),i=[`margin-right: var(--spacingHorizontalXS)`,`height: inherit`,`grid-row: 1 / -1`].join(`;`),a=[`overflow: hidden`,`white-space: nowrap`,`text-overflow: ellipsis`].join(`;`),o=[a,`font-weight: bold`].join(`;`),s=[a,`color: var(--colorNeutralForeground4)`].join(`;`);return b`
        <div  style="${e=>t(e)?n:r}" onmouseover="this.style.backgroundColor = getComputedStyle(this).getPropertyValue('--colorNeutralBackground1Hover')" onmouseout="this.style.backgroundColor = ''" @click=${t=>e(t)}>
            <img style="${i}" src="${e=>e.Icon}"></img>
            <div style="${o}">${e=>e.Title}</div>
            <div style="${s}">${e=>e.Identifier}</div>
        </div>
    `}var Je=b`
    <div id="heading" title="${e=>e.Localization.Locale.Frontend_FluentCore_WebsiteSelect_Description()}" @click=${e=>e.Expanded=!e.Expanded}>
        <img id="logo" src="${e=>e.Selected?.Icon}"></img>
        <div id="title">${e=>e.Selected?.Title??`…`}</div>
        <div id="controls">
            <div class="hint">${e=>(e.filtered?.length??``)+`／`+(e.Entries?.length??``)}</div>
            <fluent-button icon-only id="button-browse" appearance="transparent" title="${e=>e.Selected?.URI?.href}" ?disabled=${e=>!e.Selected?.URI} :innerHTML=${()=>I} @click="${(e,t)=>e.OpenBrowser(t.event)}"></fluent-button>
            ${e=>e.favorite?qe:Ke}
            <fluent-button icon-only id="button-settings" appearance="transparent" title="${e=>e.Localization.Locale.Frontend_FluentCore_WebsiteSelect_OpenSettingsButton_Description()}" ?disabled=${e=>!e.Selected} :innerHTML=${()=>j} @click="${(e,t)=>e.OpenSettings(t.event)}"></fluent-button>
        </div>
    </div>
    <div id="dropdown" ${p(`dropdown`)}>
        <div id="searchcontrol">
            <fluent-searchbox id="searchbox" ${p(`searchbox`)} placeholder="${e=>e.Localization.Locale.Frontend_FluentCore_WebsiteSelect_SearchBox_Placeholder()}" @predicate=${(e,t)=>e.Match=t.event.detail}></fluent-searchbox>
        </div>
        <fluent-lazy-scroll id="entries" :Items=${e=>e.filtered} :Template=${e=>CreateItemTemplate$2(e.SelectEntry.bind(e))}></fluent-lazy-scroll>
    </div>
`,WebsiteSelect=class extends B{constructor(...e){super(...e),this.Entries=[],this.Match=()=>!0,this.filtered=[],this.Expanded=!1,this.updating=!1,this.favorite=!1}EntriesChanged(){this.FilterEntries()}MatchChanged(){this.FilterEntries()}SelectedChanged(e,t){(t||e)&&!t?.IsSameAs(e)&&this.$emit(`selectedChanged`,this.Selected)}ExpandedChanged(){this.dropdown&&(this.dropdown.style.display=this.Expanded?`block`:`none`,this.searchbox.Focus())}async FilterEntries(){this.filtered=this.Entries.filter(e=>this.Match(e.Title))}SelectEntry(e){this.Selected=e,this.Expanded=!1,x.notify(this,`expanded`)}AddFavorite(e){e.stopPropagation(),this.favorite=!0,console.log(`Added Favorite`,this.Selected?.Identifier)}RemoveFavorite(e){e.stopPropagation(),this.favorite=!1,console.log(`Removed Favorite`,this.Selected?.Identifier)}OpenSettings(e){e.stopPropagation(),this.Selected?.Settings&&this.SettingsManager.ShowSettingsDialog(...this.Selected.Settings)}OpenBrowser(e){e.stopPropagation(),this.Selected?.URI&&window.open(this.Selected.URI)}};H([Z],WebsiteSelect.prototype,`Localization`,void 0),H([q],WebsiteSelect.prototype,`SettingsManager`,void 0),H([C],WebsiteSelect.prototype,`Entries`,void 0),H([C],WebsiteSelect.prototype,`Match`,void 0),H([C],WebsiteSelect.prototype,`filtered`,void 0),H([C],WebsiteSelect.prototype,`Selected`,void 0),H([C],WebsiteSelect.prototype,`Expanded`,void 0),H([C],WebsiteSelect.prototype,`updating`,void 0),H([C],WebsiteSelect.prototype,`favorite`,void 0),WebsiteSelect.define({name:`fluent-website-select`,template:Je,styles:Ge});var Ye=h`

    :host {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: min-content minmax(0, 1fr);
    }

    #heading {
        background-color: var(--colorNeutralBackground4);
        padding: var(--spacingHorizontalXS);
        gap: var(--spacingHorizontalS);
        display: grid;
        align-items: center;
        grid-template-columns: max-content 1fr max-content;
    }

    #heading:hover {
        cursor: pointer;
        background-color: var(--colorNeutralBackground1Hover);
    }

    #heading #logo {
        height: var(--fontSizeBase600);
    }

    #heading #title {
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #controls {
        display: flex;
        align-items: center;
    }

    #controls .hint {
        margin-left: var(--spacingHorizontalXS);
        margin-right: var(--spacingHorizontalXS);
    }

    #dropdown {
        height: 100%;
        display: none;
    }

    #searchcontrol {
        padding: var(--spacingHorizontalS);
        border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        border-bottom: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        background-color: var(--colorNeutralBackground4);
    }

    #button-update-entries.updating svg {
        animation: spinning 1.5s linear infinite;
    }

    @keyframes spinning {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    #entries {
        height: 320px;
        padding: 0;
        margin: 0;
    }

    .hint {
        color: var(--colorNeutralForeground4);
    }
`,Xe=b`
    <fluent-button icon-only id="add-favorite-button" appearance="transparent" ?disabled=${e=>!e.Selected} title="${e=>e.Localization.Locale.Frontend_FluentCore_MediaTitleSelect_AddBookmarkButton_Description()}" :innerHTML=${()=>F} @click=${(e,t)=>e.AddBookmark(t.event)}></fluent-button>
`,Ze=b`
    <fluent-button icon-only id="remove-favorite-button" appearance="transparent" ?disabled=${e=>!e.Selected} title="${e=>e.Localization.Locale.Frontend_FluentCore_MediaTitleSelect_RemoveBookmarkButton_Description()}" :innerHTML=${()=>D} @click=${(e,t)=>e.RemoveBookmark(t.event)}></fluent-button>
`;function CreateItemTemplate$1(e,t=e=>!0){let n=[`height: 42px`,`padding: var(--spacingHorizontalXS)`,`border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle)`,`gap: var(--spacingHorizontalXS)`,`display: grid`,`grid-template-rows: min-content 1fr`,`grid-template-columns: min-content 1fr`,`cursor: pointer`].join(`;`),r=[n,`opacity: 0.5`].join(`;`),i=[`margin-right: var(--spacingHorizontalXS)`,`height: inherit`,`grid-row: 1 / -1`].join(`;`),a=[`overflow: hidden`,`white-space: nowrap`,`text-overflow: ellipsis`].join(`;`),o=[a,`font-weight: bold`].join(`;`),s=[a,`color: var(--colorNeutralForeground4)`].join(`;`);return b`
        <div style="${e=>t(e)?n:r}" onmouseover="this.style.backgroundColor = getComputedStyle(this).getPropertyValue('--colorNeutralBackground1Hover')" onmouseout="this.style.backgroundColor = ''" @click=${t=>e(t)}>
            <img style="${i}" src="${e=>e.Icon}"></img>
            <div style="${o}">${e=>e.Title}</div>
            <div style="${s}">${e=>e.Identifier}</div>
        </div>
    `}var Qe=b`
    <div id="heading" title="${e=>e.Localization.Locale.Frontend_FluentCore_MediaTitleSelect_Description()}" @click=${e=>e.Expanded=!e.Expanded}>
        <img id="logo" src="${e=>e.Selected?.Icon}"></img>
        <div id="title">${e=>e.Selected?.Title??`…`}</div>
        <div id="controls">
            <div class="hint">${e=>e.updating.includes(e.Container?.Identifier)||e.pasting?`┄`:(e.filtered?.length??``)+`／`+(e.Container?.Entries.Value.length??``)}</div>
            <fluent-button
                icon-only
                id="button-update-entries"
                appearance="transparent"
                class="${e=>e.updating.includes(e.Container?.Identifier)||e.pasting?`updating`:``}"
                title="${e=>e.Localization.Locale.Frontend_FluentCore_WebsiteSelect_UpdateEntriesButton_Description()}"
                ?disabled=${e=>!e.Container||e.updating.includes(e.Container?.Identifier)||e.pasting}
                :innerHTML=${()=>O}
                @click=${(e,t)=>e.UpdateEntries(t.event)}>
            </fluent-button>
            ${e=>e.bookmark?Ze:Xe}
            <fluent-button
                icon-only
                id="paste-clipboard-button"
                appearance="transparent"
                title="${e=>e.Localization.Locale.Frontend_FluentCore_MediaTitleSelect_PasteClipboardButton_Description()}"
                ?disabled=${e=>e.updating.includes(e.Container?.Identifier)||e.pasting}
                :innerHTML=${()=>_e}
                @click="${(e,t)=>e.PasteClipboard(t.event)}">
            </fluent-button>
        </div>
    </div>
    <div id="dropdown" ${p(`dropdown`)}>
        <div id="searchcontrol">
            <fluent-searchbox id="searchbox" ${p(`searchbox`)} placeholder="${e=>e.Localization.Locale.Frontend_FluentCore_MediaTitleSelect_SearchBox_Placeholder()}" allowcase allowregex @predicate=${(e,t)=>e.Match=t.event.detail}></fluent-searchbox>
        </div>
        <fluent-lazy-scroll id="entries" :Items=${e=>e.filtered} :Template=${e=>CreateItemTemplate$1(e.SelectEntry.bind(e))}></fluent-lazy-scroll>
    </div>
`,MediaTitleSelect=class extends B{constructor(...e){super(...e),this.Match=()=>!0,this.filtered=[],this.Expanded=!1,this.updating=[],this.bookmark=!1,this.scanning=!1,this.pasting=!1,this.BookmarksChanged=function(e,t){this.bookmark=this.Selected&&t.IsBookmarked(this.Selected)}.bind(this),this.PastedClipboardUrlChanged=async function(e){try{this.pasting=!0;for(let t of HakuNeko.PluginController.WebsitePlugins){let n=await t.TryGetEntry(e.href);if(n){n=HakuNeko.BookmarkPlugin.Entries.Value.find(e=>e.IsSameAs(n))??n,await n.Update(),(!this.Selected||!this.Selected.IsSameAs(n))&&(this.Selected=n);return}}throw new s(r.Frontend_Media_PasteLink_NotFoundError,e.href)}catch(e){console.warn(e)}finally{this.pasting=!1}}.bind(this)}connectedCallback(){super.connectedCallback(),HakuNeko.BookmarkPlugin.Entries.Subscribe(this.BookmarksChanged),HakuNeko.PastedClipboardURL.Subscribe(this.PastedClipboardUrlChanged),this.FilterEntries()}disconnectedCallback(){super.disconnectedCallback(),HakuNeko.BookmarkPlugin.Entries.Unsubscribe(this.BookmarksChanged),HakuNeko.PastedClipboardURL.Unsubscribe(this.PastedClipboardUrlChanged)}ContainerChanged(){let e=this.Container?.Entries.Value.find(e=>e.Identifier===this.Selected?.Identifier);this.Selected=e??this.Selected,this.FilterEntries()}MatchChanged(){this.FilterEntries()}SelectedChanged(e,t){t!==e&&(this.BookmarksChanged(HakuNeko.BookmarkPlugin.Entries.Value,HakuNeko.BookmarkPlugin),this.$emit(`selectedChanged`,this.Selected))}ExpandedChanged(){this.dropdown&&(this.dropdown.style.display=this.Expanded?`block`:`none`,this.searchbox.Focus())}async FilterEntries(){this.filtered=this.Container?.Entries?.Value.filter(e=>this.Match(e.Title))??[]}SelectEntry(e){this.Selected=e,this.Expanded=!1,x.notify(this,`expanded`)}async UpdateEntries(e){e.stopPropagation();let t=this.Container;try{this.updating.includes(t.Identifier)||(this.updating=[...this.updating,t.Identifier],await t?.Update(),this.ContainerChanged())}catch(e){console.warn(e)}finally{this.updating=this.updating.filter(e=>e!==t.Identifier)}}async AddBookmark(e){e.stopPropagation(),this.Selected&&await HakuNeko.BookmarkPlugin.Add(this.Selected)}async RemoveBookmark(e){if(e.stopPropagation(),this.Selected&&HakuNeko.BookmarkPlugin.IsBookmarked(this.Selected)){let e=HakuNeko.BookmarkPlugin.Find(this.Selected);await HakuNeko.BookmarkPlugin.Remove(e)}}async PasteClipboard(e){e.stopPropagation();let t=await navigator.clipboard.readText();try{HakuNeko.PastedClipboardURL.Value=new URL(t)}catch(e){console.warn(e)}}};H([Z],MediaTitleSelect.prototype,`Localization`,void 0),H([C],MediaTitleSelect.prototype,`Container`,void 0),H([C],MediaTitleSelect.prototype,`Match`,void 0),H([C],MediaTitleSelect.prototype,`filtered`,void 0),H([C],MediaTitleSelect.prototype,`Selected`,void 0),H([C],MediaTitleSelect.prototype,`Expanded`,void 0),H([C],MediaTitleSelect.prototype,`updating`,void 0),H([C],MediaTitleSelect.prototype,`bookmark`,void 0),H([C],MediaTitleSelect.prototype,`scanning`,void 0),H([C],MediaTitleSelect.prototype,`pasting`,void 0),MediaTitleSelect.define({name:`fluent-media-title-select`,template:Qe,styles:Ye});var $e=[`padding: var(--spacingHorizontalXS);`,`border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);`,`gap: var(--spacingHorizontalXS);`,`display: grid;`,`align-items: center;`,`grid-template-rows: min-content;`,`grid-template-columns: min-content 1fr min-content;`].join(` `),Q=[`overflow: hidden;`,`white-space: nowrap;`,`text-overflow: ellipsis;`].join(` `),et=[Q,`display: flex;`,`visibility: hidden;`].join(` `),tt=h`

    :host {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: min-content min-content minmax(0, 1fr);
    }

    #header {
        padding: var(--spacingHorizontalS);
        background-color: var(--colorNeutralBackground4);
        display: grid;
        align-items: center;
        grid-template-rows: auto;
        grid-template-columns: minmax(0, 1fr) max-content;
    }

    #title {
        text-transform: uppercase;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #controls {
        display: flex;
        align-items: center;
    }

    #controls .hint {
        color: var(--colorNeutralForeground4);
        margin-left: var(--spacingHorizontalXS);
        margin-right: var(--spacingHorizontalXS);
    }

    #searchcontrol {
        padding: var(--spacingHorizontalS);
        border-top: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        border-bottom: var(--strokeWidthThin) solid var(--colorNeutralStrokeSubtle);
        background-color: var(--colorNeutralBackground4);
    }

    #button-update-entries.updating svg {
        animation: spinning 1.5s linear infinite;
    }

    @keyframes spinning {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    #entries {
        padding: 0;
        margin: 0;
    }
`;function CreateItemTemplate(e){return b`
        <div class="entry" style="${$e}" onmouseover="this.querySelector('div.controls').style.visibility = 'visible'" onmouseout="this.querySelector('div.controls').style.visibility = 'hidden'">
            <div style="${Q}"><!-- <fluent-checkbox></fluent-checkbox> --></div>
            <div style="${Q}">${e=>e.Title}</div>
            <div class="controls" style="${et}">
                <fluent-button
                    icon-only
                    appearance="transparent"
                    title="${()=>e.Localization.Locale.Frontend_FluentCore_MediaItemList_PreviewButton_Description()}"
                    :innerHTML=${()=>he}
                    @click=${t=>e.ShowPreview(t)}>
                </fluent-button>
                <fluent-button
                    icon-only
                    appearance="transparent"
                    title="${()=>e.Localization.Locale.Frontend_FluentCore_MediaItemList_DownloadButton_Description()}"
                    :innerHTML=${()=>E}
                    @click=${t=>e.Download(t)}>
                </fluent-button>
            </div>
        </div>
    `}var nt=b`
    <div id="header">
        <div id="title">${e=>e.Localization.Locale.Frontend_FluentCore_MediaItemList_Heading()}</div>
        <div id="controls">
            <div class="hint">${e=>e.filtered?.length??`┄`}／${e=>e.Entries?.length??`┄`}</div>
            <fluent-button
                icon-only
                id="button-update-entries"
                appearance="transparent"
                class="${e=>e.updating.includes(e.Container?.Identifier)?`updating`:``}"
                title="${e=>e.Localization.Locale.Frontend_FluentCore_MediaTitleSelect_UpdateEntriesButton_Description()}"
                ?disabled=${e=>!e.Container||e.updating.includes(e.Container?.Identifier)}
                :innerHTML=${()=>O}
                @click=${(e,t)=>e.UpdateEntries(t.event)}>
            </fluent-button>
        </div>
    </div>
    <div id="searchcontrol">
        <fluent-searchbox allowcase allowregex @predicate=${(e,t)=>e.Match=t.event.detail}></fluent-searchbox>
    </div>
    <fluent-lazy-scroll id="entries" :Items=${e=>e.filtered} :Template=${e=>CreateItemTemplate(e)}></fluent-lazy-scroll>
`,MediaItemList=class extends B{constructor(...e){super(...e),this.Entries=[],this.Match=()=>!0,this.filtered=[],this.updating=[]}ContainerChanged(){this.Entries=this.Container?.Entries.Value??[]}EntriesChanged(){this.FilterEntries()}MatchChanged(){this.FilterEntries()}async FilterEntries(){this.filtered=this.Entries?.filter(e=>this.Match(e.Title))??[]}async UpdateEntries(e){e.stopPropagation();let t=this.Container;try{this.updating.includes(t.Identifier)||(this.updating=[...this.updating,t.Identifier],await t?.Update(),this.ContainerChanged())}catch(e){console.warn(e)}finally{this.updating=this.updating.filter(e=>e!==t.Identifier)}}async ShowPreview(e){this.$emit(`previewClicked`,e)}async Download(e){try{await this.SettingsManager.SettingMediaDirectory.EnsureAccess()}catch(e){return alert(e.message??e)}await HakuNeko.DownloadManager.Enqueue(e)}};H([Z],MediaItemList.prototype,`Localization`,void 0),H([q],MediaItemList.prototype,`SettingsManager`,void 0),H([C],MediaItemList.prototype,`Container`,void 0),H([C],MediaItemList.prototype,`Entries`,void 0),H([C],MediaItemList.prototype,`Match`,void 0),H([C],MediaItemList.prototype,`filtered`,void 0),H([C],MediaItemList.prototype,`updating`,void 0),MediaItemList.define({name:`fluent-media-item-list`,template:nt,styles:tt});var rt=h`

    :host {
        display: flex;
        flex-direction: column;
    }

    #heading {
        background-color: var(--colorNeutralBackground2);
        padding: var(--spacingHorizontalXS);
        gap: var(--spacingHorizontalS);
        display: grid;
        align-items: center;
        grid-template-columns: max-content 1fr max-content;
    }

    #caption {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #content {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        text-align: center;
    }
`,it=b`<fluent-media-item-page :Item=${e=>e}></fluent-media-item-page>`,at=b`${v(e=>e.items,it,{recycle:!1})}`,ot=b`
    <div id="heading">
        <fluent-button icon-only appearance="transparent" title="${e=>e.Localization.Locale.Frontend_FluentCore_Preview_CloseButton_Description()}" :innerHTML=${()=>R} @click=${e=>e.Entry=void 0}></fluent-button>
        <div id="caption">${e=>e.Entry?.Title??``}</div>
        <div></div>
    </div>
    <div id="content">
        ${m(e=>e.Entry instanceof Ce,at)}
    </div>
`,MediaItemPreview=class extends B{async EntryChanged(){this.Entry?.Entries?.Value.length===0&&(this.items=[],await this.Entry?.Update()),this.items=this.Entry?.Entries.Value??[],this.$emit(`entryChanged`,this.Entry)}};H([Z],MediaItemPreview.prototype,`Localization`,void 0),H([C],MediaItemPreview.prototype,`items`,void 0),H([C],MediaItemPreview.prototype,`Entry`,void 0),MediaItemPreview.define({name:`fluent-media-item-preview`,template:ot,styles:rt});function noop(){}var st=h`

    :host {
        display: inline-grid;
        margin: var(--spacingHorizontalS);
        /* imitiate fluent-card as it is not yet implemented ... */
        border: var(--strokeWidthThin) solid var(--neutral-stroke-layer-rest);
        border-radius: var(--borderRadiusXLarge);
        box-shadow: var(--shadow4);
        overflow: clip;
    }

    a {
        color: var(--colorBrandForegroundLink);
        text-decoration: none;
    }

    .info {
        padding: var(--spacingHorizontalXS);
        background-color: var(--colorNeutralBackground4);
        color: var(--colorNeutralForeground4);
    }

    .thumbnail {
        width: 320px;
        height: 320px;
    }

    .link {
        display: block;
    }

    .spinner {
        display: grid;
        align-items: center;
        justify-items: center;
    }
`,ct=b`
    <a target="_blank" href="${e=>e.Item?.Link}" title="${e=>e.Item?.Link}">
        ${e=>e.Info??`┄`}
    </a>
`,lt=b`
    <a class="thumbnail link" target="_blank" href="${e=>e.Image}" title="${e=>e.Image}">
        <fluent-image fit="contain" shape="square">
            <img src="${e=>e.Image}" />
        </fluent-image>
    </a>
`,ut=b`
    <div class="thumbnail spinner">
        <fluent-spinner size="huge"></fluent-spinner>
    </div>
`,dt=b`
    <div class="info">
        ${e=>e.Item&&e.Info?ct:b`┄`}
    </div>
    ${e=>e.Image?lt:ut}
`,MediaItemPage=class extends B{constructor(...e){super(...e),this.abort=noop,this.Image=void 0,this.Info=void 0}disconnectedCallback(){super.disconnectedCallback(),this.Item=void 0}ItemChanged(){this.abort(),this.Image=void 0,window.clearTimeout(this.timerLoadPage),this.timerLoadPage=window.setTimeout(()=>{this.Item&&(window.clearTimeout(this.timerLoadPage),this.LoadPage())},500)}ImageChanged(e,t){e?.startsWith(`blob:`)&&URL.revokeObjectURL(e),t?.startsWith(`blob:`)||(this.Info=void 0)}async LoadPage(){try{let e=new AbortController;this.abort=()=>{this.abort=noop,e.abort()};let t=await this.Item.Fetch(ee.High,e.signal);if(this.abort=noop,!t||e.signal.aborted)return;this.Image=URL.createObjectURL(t),this.Info=`${t.type} @ ${t.size.toLocaleString(`en-US`,{useGrouping:!0})}`}catch(e){console.warn(e)}finally{this.abort=noop}}};H([C],MediaItemPage.prototype,`Item`,void 0),H([C],MediaItemPage.prototype,`Image`,void 0),H([C],MediaItemPage.prototype,`Info`,void 0),MediaItemPage.define({name:`fluent-media-item-page`,template:dt,styles:st});var ft=h`
    :host {
        display: block;
    }

    #searchpattern {
        display: block;
        max-width: unset !important;
    }

    #searchpattern [slot="start"] svg {
        height: 1em;
    }

    #searchpattern [slot="start"] {
        display: flex;
        align-items: center;
    }

    #searchpattern [slot="end"] {
        display: flex;
        align-items: center;
    }
`,pt=b`
    <fluent-button icon-only size="small" appearance="${e=>e.CaseEnabled?`outline`:`transparent`}" title="${e=>e.Localization.Locale.Frontend_FluentCore_SearchBox_CaseSenstiveToggleButton_Description()}" :innerHTML=${()=>me} @click=${e=>e.CaseEnabled=!e.CaseEnabled}></fluent-button>
`,mt=b`
    <fluent-button icon-only size="small" appearance="${e=>e.RegexEnabled?`outline`:`transparent`}" title="${e=>e.Localization.Locale.Frontend_FluentCore_SearchBox_CaseRegularExpressionToggleButton_Description()}" :innerHTML=${()=>L} @click=${e=>e.RegexEnabled=!e.RegexEnabled}></fluent-button>
`,ht=b`
    <fluent-text-input id="searchpattern" ${p(`searchpattern`)} appearance="outline" placeholder="${e=>e.placeholder}" :value=${e=>e.Needle} @input=${(e,t)=>e.Needle=t.eventTarget().value}>
        <div slot="start" :innerHTML=${()=>T}></div>
        <div slot="end">
            <fluent-button icon-only size="small" appearance="transparent" title="${e=>e.Localization.Locale.Frontend_FluentCore_SearchBox_ClearButton_Description()}" :innerHTML=${()=>M} @click=${e=>e.Needle=``}></fluent-button>
            ${m(e=>e.AllowCase,pt)}
            ${m(e=>e.AllowRegex,mt)}
        </div>
    </fluent-text-input>
`,SearchBox=class extends B{constructor(...e){super(...e),this.event=`predicate`,this.placeholder=``,this.Needle=``,this.AllowCase=!1,this.CaseEnabled=!1,this.AllowRegex=!1,this.RegexEnabled=!1}NeedleChanged(){this.UpdatePredicate()}AllowCaseChanged(){this.UpdatePredicate()}CaseEnabledChanged(){this.UpdatePredicate()}AllowRegexChanged(){this.UpdatePredicate()}RegexEnabledChanged(){this.UpdatePredicate()}Focus(){return this.searchpattern.focus()}UpdatePredicate(){try{if(!this.Needle)this.$emit(this.event,()=>!0);else if(this.AllowRegex&&this.RegexEnabled){let e=new RegExpSafe(this.Needle,this.AllowCase&&this.CaseEnabled?void 0:`i`);this.$emit(this.event,t=>e.test(t))}else if(this.AllowCase&&this.CaseEnabled)this.$emit(this.event,e=>e.includes(this.Needle));else{let e=this.Needle.toLocaleLowerCase();this.$emit(this.event,t=>t.toLowerCase().includes(e))}}catch{}}};H([Z],SearchBox.prototype,`Localization`,void 0),H([S],SearchBox.prototype,`placeholder`,void 0),H([C],SearchBox.prototype,`Needle`,void 0),H([S({mode:`boolean`})],SearchBox.prototype,`AllowCase`,void 0),H([C],SearchBox.prototype,`CaseEnabled`,void 0),H([S({mode:`boolean`})],SearchBox.prototype,`AllowRegex`,void 0),H([C],SearchBox.prototype,`RegexEnabled`,void 0),SearchBox.define({name:`fluent-searchbox`,template:ht,styles:ft});var $=_.createContext(),gt=h`

    #settings {
        display: grid;
        align-items: center;
        grid-template-columns: max-content max-content;
        gap: var(--spacingHorizontalS);
    }
`,_t=b`
    <fluent-text-input type="text" value=${e=>e.Value} @change=${(e,t)=>e.Value=t.eventTarget().value}></fluent-text-input>
`,vt=b`
    <fluent-text-input type="password" value=${e=>e.Value} @change=${(e,t)=>e.Value=t.eventTarget().value}></fluent-text-input>
`,yt=b`
    <fluent-number-field min=${e=>e.Min} max=${e=>e.Max} value=${e=>e.Value} @change=${(e,t)=>e.Value=t.eventTarget().value}></input>
`,bt=b`
    <fluent-checkbox style="display: inline-block;" :checked=${e=>e.Value} @change=${(e,t)=>e.Value=t.eventTarget().checked}></fluent-checkbox>
`;function CreateChoiceOptionTemplate(e,t){return b`
        <fluent-option value=${e=>e.key} selected=${e=>e.key===t.Value}>${t=>e.Localization.Get(t.label)}</fluent-option>
    `}function CreateChoiceTemplate(e){return b`
        <fluent-dropdown type="dropdown" id=${e=>e.ID} @change=${(e,t)=>e.Value=t.eventTarget().value}>
            <fluent-listbox>
                ${v(e=>e.Options,t=>CreateChoiceOptionTemplate(e,t))}
            </fluent-listbox>
        </fluent-dropdown>
    `}var xt=b`
    <fluent-text-input type="text" readonly id=${e=>e.ID} value=${e=>e.Value?.name}>
        <fluent-button slot="end" icon-only size="small" appearance="transparent" :innerHTML=${()=>ge} @click=${(e,t)=>t.parent.SelectDirectory(e)}></fluent-button>
    </fluent-text-input>
`;function CreateSettingTemplate(r){return b`
        <div title=${e=>r.Localization.Locale[e.Description]()}>${e=>r.Localization.Get(e.Label)}</div>
        ${m(e=>e instanceof o,_t)}
        ${m(e=>e instanceof t,vt)}
        ${m(e=>e instanceof n,yt)}
        ${m(t=>t instanceof e,bt)}
        ${m(e=>e instanceof l,CreateChoiceTemplate(r))}
        ${m(e=>e instanceof i,xt)}
    `}var St=b`
    <fluent-dialog type="modal" ${p(`dialog`)}>
        <fluent-dialog-body>
            <div slot="title">${e=>e.Localization.Locale.Frontend_FluentCore_SettingsDialog_Title()}</div>
            <div id="settings">
                ${v(e=>e.Settings,CreateSettingTemplate)}
            </div>
            <fluent-button slot="action" appearance="accent" @click=${e=>e.dialog.hide()}>
                ${e=>e.Localization.Locale.Frontend_FluentCore_SettingsDialog_CloseButton_Label()}
            </fluent-button>
        </fluent-dialog-body>
    </fluent-dialog>
`,SettingsDialog=class extends B{constructor(...e){super(...e),this.Settings=[]}connectedCallback(){super.connectedCallback(),this.SettingsManager.ShowSettingsDialog=(...e)=>{this.Settings=e,this.dialog.show()}}async SelectDirectory(e){try{let t=await this.InteractiveFileContentProvider.PickDirectory(e.Value??`documents`)??e.Value;this.shadowRoot.querySelector(`#`+e.ID).value=t.name,e.Value=t}catch(e){if(this.InteractiveFileContentProvider.IsAbortError(e))return;throw e}}};H([$],SettingsDialog.prototype,`InteractiveFileContentProvider`,void 0),H([Z],SettingsDialog.prototype,`Localization`,void 0),H([q],SettingsDialog.prototype,`SettingsManager`,void 0),H([C],SettingsDialog.prototype,`Settings`,void 0),SettingsDialog.define({name:`fluent-settings-dialog`,template:St,styles:gt});var Ct=h`

    :host {
        display: block;
        overflow-x: hidden;
        overflow-y: scroll;
    }
`,wt=b`
    ${v(e=>e.visibles,e=>e.Template)}
    <div ${p(`trigger`)}></div>
`,LazyScroll=class extends B{constructor(...e){super(...e),this.observer=new IntersectionObserver(([e])=>e.isIntersecting&&this.LoadNext(100)),this.visibles=[],this.LoadNext=function(e){this.visibles.length<this.Items.length&&window.requestAnimationFrame(()=>{this.visibles=this.Items?.slice(0,this.visibles.length+e)??[]})}.bind(this)}connectedCallback(){super.connectedCallback(),this.observer.observe(this.trigger)}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}ItemsChanged(){this.visibles=[],this.LoadNext(100)}};H([C],LazyScroll.prototype,`Template`,void 0),H([C],LazyScroll.prototype,`visibles`,void 0),H([C],LazyScroll.prototype,`Items`,void 0),LazyScroll.define({name:`fluent-lazy-scroll`,template:wt,styles:Ct});var FluentCore=class{RegisterDependencies(e){let t=_.getOrCreateDOMContainer(document.body);t.register(u.singleton(q,SettingsManager)),t.register(u.singleton(Z,X)),t.register(u.instance(Y,new WindowManager(e))),t.register(u.singleton($,we))}async Render(e,t){this.RegisterDependencies(t),e.appendChild(new J)}},Tt=new FluentCore;export{Tt as default};