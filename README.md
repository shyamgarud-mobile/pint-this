# Pint This - Installation & Usage Guide

A VS Code extension that adds a convenient right-click option to run Laravel Pint on your PHP files. Format single files or multiple files at once with just a few clicks!

## Features

✨ **Right-click on file tabs** - Quick access from any open PHP file  
✨ **Right-click in Explorer** - Format files directly from the file explorer  
✨ **Multiple file selection** - Select and format multiple PHP files at once  
✨ **Progress notifications** - See real-time progress when formatting multiple files  
✨ **Smart filtering** - Automatically filters to PHP files only when multiple files are selected  

## Prerequisites

- **PHP 8.2+**: Check your version with `php -v`
- **Composer**: Verify installation with `composer --version`

## Step 1: Install Laravel Pint Globally

Laravel Pint is a PHP code style fixer that needs to be available globally on your system for this extension to work.

### Option A: Global Installation (Recommended)

Install Laravel Pint globally using Composer:

```bash
composer global require laravel/pint
```

### Option B: Project-based Installation

If you prefer project-based installation:

```bash
# In your PHP/Laravel project directory
composer require laravel/pint --dev
```

**Note**: With project-based installation, the extension will only work within projects that have Pint installed.

### Verify Installation

Test that Pint is available from the command line:

```bash
pint --version
```

If you get a "command not found" error, ensure Composer's global bin directory is in your PATH:

- **Windows**: Add `%APPDATA%\Composer\vendor\bin` to your PATH
- **macOS/Linux**: Add `~/.composer/vendor/bin` or `~/.config/composer/vendor/bin` to your PATH

## Step 2: Install the VS Code Extension

1. **Open VS Code**
2. **Go to Extensions** (Ctrl+Shift+X or Cmd+Shift+X on Mac)
3. **Search for "Pint This"** by ShyamkumarAshokGarud
4. **Click "Install"**

## Step 3: Using the Extension

### Method 1: From File Tabs (Single File)

![Pint This from file tab](https://raw.githubusercontent.com/shyamgarud-mobile/pint-this/refs/heads/main/single-file.png)

1. **Open any PHP file** in VS Code
2. **Right-click on the file tab** (the tab at the top)
3. **Click "Pint this"** from the context menu
4. **Done!** Your file will be automatically formatted

### Method 2: From Explorer (Single or Multiple Files)

![Pint This from explorer](https://raw.githubusercontent.com/shyamgarud-mobile/pint-this/refs/heads/main/multiple-files.png)

#### Single File:
1. **Right-click on any PHP file** in the Explorer panel
2. **Click "Pint this"** from the context menu

#### Multiple Files:
1. **Select multiple files** in the Explorer panel (Ctrl+Click or Cmd+Click)
2. **Right-click on the selection**
3. **Click "Pint this"** from the context menu
4. **Watch the progress** - you'll see a progress notification for multiple files

**Note**: When selecting multiple files, the extension automatically filters to PHP files only, so you can safely select mixed file types.

### Features in Action

- **Single file**: Get instant feedback with a success notification
- **Multiple files**: See progress notifications and batch processing results
- **Error handling**: Clear error messages if something goes wrong
- **Smart filtering**: Only PHP files are processed, even in mixed selections

## Configuration (Optional)

Laravel Pint works perfectly with default settings, but you can customize it by creating a `pint.json` file in your project root:

```json
{
    "preset": "laravel",
    "rules": {
        "simplified_null_return": true,
        "array_indentation": false
    }
}
```

## Troubleshooting

### "pint command not found"

**Solution**: Ensure Laravel Pint is installed globally and in your PATH:

```bash
# Check if globally installed
composer global show laravel/pint

# If not installed, install it
composer global require laravel/pint
```

If still not working, add Composer's bin directory to your PATH:
- **Windows**: Add `%APPDATA%\Composer\vendor\bin` to your PATH
- **macOS/Linux**: Add `~/.composer/vendor/bin` to your PATH

### Extension Not Appearing

**Solution**: 
1. Restart VS Code
2. Make sure you're right-clicking on either:
   - The file **tab** (at the top), or
   - Files in the **Explorer panel**
3. Check that the extension is enabled in the Extensions panel

### Multiple File Selection Not Working

**Solution**:
1. Make sure you're selecting files in the **Explorer panel** (not tabs)
2. Use Ctrl+Click (Windows/Linux) or Cmd+Click (Mac) to select multiple files
3. Right-click on one of the selected files to see the context menu

## Changelog

### Latest Version
- ✅ Added support for multiple file selection
- ✅ Added progress notifications for batch processing
- ✅ Improved context menu placement (works from both tabs and explorer)
- ✅ Smart PHP file filtering
- ✅ Enhanced error handling

## About Laravel Pint

Laravel Pint is a PHP code style fixer that ensures your code follows Laravel's coding standards. It automatically fixes indentation, spacing, and other style issues to keep your code clean and consistent.

## Contributing

Found a bug or have a feature request? Please open an issue on our [GitHub repository](https://github.com/your-repo/pint-this).

## License

This extension is licensed under the MIT License.