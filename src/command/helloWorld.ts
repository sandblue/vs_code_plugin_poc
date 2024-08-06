import * as vscode from 'vscode';

export function helloWolrd() {
    return vscode.commands.registerCommand('bffgenerator.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        const dateTime = new Date();
        vscode.window.showInformationMessage(`Hello World from BffGenerator ! ${dateTime.toISOString()}`);
    });
}