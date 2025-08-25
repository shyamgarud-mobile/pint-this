# Pint This - Installation & Usage Guide

A VS Code extension that adds a convenient right-click option to run Laravel Pint on your PHP files with just two simple steps.

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

### Quick Start

1. **Open any PHP file** in VS Code
2. **Right-click on the file tab** (the tab at the top, not in the editor)
3. **Click "Pint this"** from the context menu
4. **Done!** Your file will be automatically formatted according to Laravel's coding standards

You'll see a notification when Pint finishes processing the file.

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
2. Make sure you're right-clicking on the file **tab**, not in the editor
3. Check that the extension is enabled in the Extensions panel

## About Laravel Pint

Laravel Pint is a PHP code style fixer that ensures your code follows Laravel's coding standards. It automatically fixes indentation, spacing, and other style issues to keep your code clean and consistent.