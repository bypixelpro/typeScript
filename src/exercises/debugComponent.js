import * as jQuery from "jquery";
window.jQuery = jQuery;
export class DebugComponent {
    debugGroupStart(_groupName = null) {
        console.group(_groupName);
    }
    toConsole(_obj, _groupName, _type = 'log') {
        // Group
        this.debugGroupStart(_groupName);
        // Debug
        this.debugVars(_obj, _type, _groupName);
        // GroupEnd
        this.debugGroupEnd();
    }
    debugGroupEnd() {
        console.groupEnd();
    }
    debugVars(_obj, _type = 'log', _groupName) {
        let html = `<div>`;
        html += `<h2 style="background: #CCC; padding: 12px;">${_groupName}</h2>`;
        for (let k in _obj) {
            if (_obj.hasOwnProperty(k)) {
                console[_type](_obj[k]);
                let result = _obj[k];
                let typeResult = typeof result;
                html += `<p>T: ${typeResult} - R: ${result}</p>`;
            }
        }
        html += `</div>`;
        jQuery('#result').append(html);
    }
}
