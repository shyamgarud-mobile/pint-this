const vscode = require('vscode');
const { exec } = require('child_process');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.pintThis', (uri) => {
        if (!uri || !uri.fsPath) {
            vscode.window.showErrorMessage("No file selected.");
            return;
        }

        const filePath = uri.fsPath;
        const command = `pint "${filePath}"`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error: ${stderr || error.message}`);
                return;
            }
            vscode.window.showInformationMessage(`Pint finished for ${filePath}`);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
