import { memo } from 'react'
import { TLUiDialogProps } from '../../context/dialogs'
import { useTranslation } from '../../hooks/useTranslation/useTranslation'
import {
	TldrawUiDialogBody,
	TldrawUiDialogCloseButton,
	TldrawUiDialogHeader,
	TldrawUiDialogTitle,
} from '../primitives/TldrawUiDialog'
import { TldrawUiMenuContextProvider } from '../primitives/menus/TldrawUiMenuContext'
import { DefaultKeyboardShortcutsDialogContent } from './DefaultKeyboardShortcutsDialogContent'

/** @public */
export type TLUiKeyboardShortcutsDialogProps = TLUiDialogProps & {
	children?: any
}

/** @public */
export const DefaultKeyboardShortcutsDialog = memo(function DefaultKeyboardShortcutsDialog({
	children,
}: TLUiKeyboardShortcutsDialogProps) {
	const msg = useTranslation()

	const content = children ?? <DefaultKeyboardShortcutsDialogContent />

	return (
		<>
			<TldrawUiDialogHeader className="tlui-shortcuts-dialog__header">
				<TldrawUiDialogTitle>{msg('shortcuts-dialog.title')}</TldrawUiDialogTitle>
				<TldrawUiDialogCloseButton />
			</TldrawUiDialogHeader>
			<TldrawUiDialogBody className="tlui-shortcuts-dialog__body">
				<TldrawUiMenuContextProvider type="keyboard-shortcuts" sourceId="kbd">
					{content}
				</TldrawUiMenuContextProvider>
			</TldrawUiDialogBody>
			<div className="tlui-dialog__scrim" />
		</>
	)
})
