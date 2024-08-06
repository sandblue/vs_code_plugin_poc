import * as vscode from 'vscode';

export function bffGenerate() {
    return vscode.commands.registerCommand('bffgenerator.bffGenerate', async () => {
        const fileName = await vscode.window.showInputBox({
            placeHolder: 'Enter the file name',
            prompt: 'File name',
        });
    });
}