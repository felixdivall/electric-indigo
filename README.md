# Electric Indigo

*Let your code come to life with vibrant colors and awesome contrast.*<br>
This theme offers great aesthetics while not sacrificing any functionality. 
<br>
<br>
> <i>Nothing is invented and perfected at the same time</i>. <br>
> Please provide your feedback, it'll be much appreciated - or just reach out and you might have a new friend.
<br>
<br>

I'll be adding better/more snapshots. But here are the two different themes.

### Electric Black - JavaScript
![js-b-snapshot](images/javascript-black.png)
### Electric Indigo - JavaScript
![js-i-snapshot](images/javascript-indigo.png)


```json
// Theme Setup.
"workbench.colorTheme": "Shades of Purple",
"workbench.iconTheme": "vscode-icons",
"editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
"terminal.integrated.fontFamily": "'Operator Mono', 'Inconsolata for Powerline', monospace",
"editor.fontSize": 17,
"editor.lineHeight": 24.65,
"editor.letterSpacing": 0.5,
"editor.fontWeight": "400",
"editor.fontLigatures": true,
"editor.cursorStyle": "line",
"editor.cursorWidth": 5,
"editor.cursorBlinking": "solid",
"editor.renderWhitespace": "all",
"editor.snippetSuggestions": "top",
"workbench.startupEditor": "newUntitledFile",
"editor.glyphMargin": true,
"workbench.editor.enablePreview": false,
"explorer.confirmDragAndDrop": false,
"files.trimTrailingWhitespace": true,
"files.trimFinalNewlines": true,
// Formatting Optional.
"editor.formatOnSave": true,
"prettier.eslintIntegration": true,
"eslint.run": "onType",
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
// MacOS Only Settings.
"workbench.fontAliasing": "auto",
"terminal.integrated.macOptionIsMeta": true,
"workbench.statusBar.feedback.visible": false,
// The default syntax (TextMate) highlighter classifies many tokens as variables and these are now (since VSCode 1.43) resolved into namespaces, classes, parameters, and so on. This is called Semantic highlighting support for TypeScript and JavaScript. But many themes and language extensions seem broken with single-colored syntax. This came as a surprise to me. It's set `true` by default. I recommend disabling this for now.
"editor.semanticHighlighting.enabled": false,
// SOP's highlight matching tag setting.
"highlight-matching-tag.styles": {
    "opening": {
        "full": {
            "highlight": "rgba(165, 153, 233, 0.3)"
        }
    }
},
[comment]: <> (// SOP's Import Cost Extension Settings.)
[comment]: <> ("importCost.largePackageColor": "#EC3A37F5",)
[comment]: <> ("importCost.mediumPackageColor": "#B362FF",)
[comment]: <> ("importCost.smallPackageColor": "#B362FF")

## Features
- Visually soothing color scheme with a soft and vibrant color palette
- High contrast syntax highlighting
- Supports multiple programming languages
<br>
<br>
Created with inspiration from one and only Ahmad Awais and his <i>Shades of Purple</i>. <br>
But with a much softer color palette to make it last a lifetime. And a lot of other improvements/tweaks.