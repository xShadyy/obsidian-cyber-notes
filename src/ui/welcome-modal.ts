import { App, Modal } from 'obsidian';

export class CyberNotesWelcomeModal extends Modal {
	constructor(app: App, private readonly pluginName: string) {
		super(app);
	}

	onOpen(): void {
		this.contentEl.empty();
		this.contentEl.createEl('h2', { text: this.pluginName });
		this.contentEl.createEl('p', {
			text: 'The plugin is installed and running in this vault.',
		});
	}

	onClose(): void {
		this.contentEl.empty();
	}
}
