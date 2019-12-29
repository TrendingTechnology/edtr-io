import isHotkey from 'is-hotkey'
import * as React from 'react'

import { toggleMark } from '../helpers'
import { Editor, TextEditorPlugin } from '../types'

export function createStrongMarkPlugin({
  type = 'strong',
  Component = StrongMark,
  hotkey = 'mod+b'
}: {
  type?: string
  Component?: React.ComponentType<{ children: React.ReactNode }>
  hotkey?: string | ReadonlyArray<string>
} = {}): TextEditorPlugin {
  return function(editor: Editor) {
    const { controls, onKeyDown, renderLeaf } = editor
    editor.onKeyDown = event => {
      if (!isHotkey(hotkey, event)) return onKeyDown(event)
      toggleMark(editor, type)
    }
    // eslint-disable-next-line react/display-name
    editor.renderLeaf = ({ children, ...props }) => {
      const Wrapper = props.leaf[type] ? Component : React.Fragment
      return renderLeaf({ ...props, children: <Wrapper>{children}</Wrapper> })
    }
    editor.controls = [
      ...controls,
      {
        title: 'Strong',
        onClick() {
          toggleMark(editor, type)
        }
      }
    ]
    return editor
  }
}

function StrongMark({ children }: { children: React.ReactNode }) {
  return <strong>{children}</strong>
}
