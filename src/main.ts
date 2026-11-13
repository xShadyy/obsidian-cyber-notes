import { Plugin } from 'obsidian';
import { CyberNotesWelcomeModal } from './ui/welcome-modal';

export default class CyberNotesPlugin extends Plugin {
	private welcomeModal?: CyberNotesWelcomeModal;

	onload(): void {
		this.welcomeModal = new CyberNotesWelcomeModal(this.app, this.manifest.name);
		const openWelcome = (): void => {
			this.welcomeModal?.open();
		};

		this.addRibbonIcon('book-open', this.manifest.name, openWelcome);
		this.addCommand({
			id: 'open-welcome',
			name: 'Open welcome',
			callback: openWelcome,
		});
	}

	onunload(): void {
		this.welcomeModal?.close();
	}
}
