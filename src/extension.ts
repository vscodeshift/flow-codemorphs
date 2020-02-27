import * as vscode from 'vscode'
import applyTransform from '@vscodeshift/apply-jscodeshift'

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.makeExact', () =>
      applyTransform(require('flow-codemorphs/makeExact'))
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.makeInexact', () =>
      applyTransform(require('flow-codemorphs/makeInexact'))
    )
  )
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.makeReadOnly', () =>
      applyTransform(require('flow-codemorphs/makeReadOnly'))
    )
  )
}

export function deactivate(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
