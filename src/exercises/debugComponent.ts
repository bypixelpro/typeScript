import * as jQuery from "jquery";
(<any>window).jQuery = jQuery;

export class DebugComponent {

    public debugGroupStart(_groupName: string|null = null) : void {
        console.group(_groupName);
    }

    public toConsole(_obj: any, _groupName: string|null, _type: string = 'log') : void {
        // Group
        this.debugGroupStart(_groupName);
        // Debug
        this.debugVars(_obj, _type, _groupName);
        // GroupEnd
        this.debugGroupEnd();
    }

    public debugGroupEnd() : void {
        console.groupEnd();
    }

    private debugVars(_obj: {[k: string]: any}, _type: string = 'log', _groupName: string|null): void {
        type consoleType = 'log' | 'warn' | 'info' | 'table' | 'error';
        let html = `<div>`;
        html += `<h2 style="background: #CCC; padding: 12px;">${_groupName}</h2>`;
        for (let k in _obj) {
            if (_obj.hasOwnProperty(k)) {
                console[_type as consoleType](_obj[k]);
                let result = _obj[k];
                let typeResult = typeof result;
                html += `<p>T: ${typeResult} - R: ${result}</p>`;
            }
        }
        html += `</div>`;
        jQuery('#result').append(html);
    }
}