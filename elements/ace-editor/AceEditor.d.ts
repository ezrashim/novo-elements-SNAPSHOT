import { EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import 'brace/index';
import 'brace/theme/chrome';
import 'brace/mode/javascript';
import 'brace/ext/language_tools.js';
export declare class NovoAceEditor implements ControlValueAccessor, OnInit, OnDestroy {
    private elementRef;
    theme: any;
    options: any;
    mode: any;
    name: string;
    blur: EventEmitter<{}>;
    focus: EventEmitter<{}>;
    private _options;
    private _theme;
    private _mode;
    private text;
    private oldText;
    private editor;
    private onChange;
    private onTouched;
    constructor(elementRef: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    private initializeEditor();
    private initializeOptions();
    private initializeEvents();
    private updateText();
    private setText(text);
    private setOptions(options);
    private setTheme(theme);
    private setMode(mode);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}