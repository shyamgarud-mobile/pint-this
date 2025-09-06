const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.pintThis', (uri, allUris) => {
        // Handle multiple file selection from Explorer
        if (allUris && allUris.length > 1) {
            handleMultipleFiles(allUris);
        } 
        // Handle single file (from tab or single selection)
        else if (uri && uri.fsPath) {
            handleSingleFile(uri.fsPath);
        } 
        // No file selected
        else {
            vscode.window.showErrorMessage("No file selected.");
        }
    });

    context.subscriptions.push(disposable);
}

function handleSingleFile(filePath) {
    const command = `pint "${filePath}"`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`Error: ${stderr || error.message}`);
            return;
        }
        const fileName = path.basename(filePath);
        vscode.window.showInformationMessage(`Pint finished for ${fileName}`);
    });
}

function handleMultipleFiles(allUris) {
    // Filter only PHP files
    const phpFiles = allUris.filter(uri => 
        uri.fsPath.endsWith('.php')
    );

    if (phpFiles.length === 0) {
        vscode.window.showWarningMessage("No PHP files selected.");
        return;
    }

    // Build command with all file paths
    const filePaths = phpFiles.map(uri => `"${uri.fsPath}"`).join(' ');
    const command = `pint ${filePaths}`;
    
    // Show progress notification
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: `Running Pint on ${phpFiles.length} files...`,
        cancellable: false
    }, () => {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    vscode.window.showErrorMessage(`Error: ${stderr || error.message}`);
                    reject(error);
                    return;
                }
                
                vscode.window.showInformationMessage(
                    `Pint finished successfully on ${phpFiles.length} files!`
                );
                resolve();
            });
        });
    });
}

function deactivate() {}

module.exports = { activate, deactivate };